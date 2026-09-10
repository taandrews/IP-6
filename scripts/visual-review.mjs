import {chromium} from '../tmp/visual-qa/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';
const base=(process.argv[2]||'https://taandrews.github.io/IP-6/').replace(/\/?$/,'/');
const label=process.argv[3]||'review';
await fs.mkdir(`tmp/qa/${label}`,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
async function loadImages(){await page.locator('img').evaluateAll(async images=>{await Promise.all(images.map(async img=>{img.loading='eager';await img.decode();}));});}
await page.goto(base,{waitUntil:'networkidle',timeout:60000});
await loadImages();
await page.screenshot({path:`tmp/qa/${label}/desktop.png`,fullPage:true});
await page.locator('.hero').screenshot({path:`tmp/qa/${label}/hero.png`});
await page.locator('.feature-grid').screenshot({path:`tmp/qa/${label}/scientist.png`});
const portrait=await page.locator('.scientist-photo img').evaluate(img=>({natural:[img.naturalWidth,img.naturalHeight],rendered:[img.clientWidth,img.clientHeight],fit:getComputedStyle(img).objectFit}));
await page.setViewportSize({width:390,height:844});await page.goto(base,{waitUntil:'networkidle'});
await loadImages();
await page.screenshot({path:`tmp/qa/${label}/mobile.png`,fullPage:true});
const overflow=await page.evaluate(()=>({viewport:innerWidth,content:document.documentElement.scrollWidth}));
console.log(JSON.stringify({base,label,heading:await page.locator('h1').innerText(),portrait,mobile:overflow,errors},null,2));
const failures=[];
for(const width of [1440,768,390,320]){
 await page.setViewportSize({width,height:900});
 for(const route of ['','about/','science/','benefits/','scientist/','news/','faq/','contact/']){
  const response=await page.goto(base+route,{waitUntil:'networkidle'});
  await loadImages();
  if(response.status()!==200)failures.push(`${width} ${route}: HTTP ${response.status()}`);
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))failures.push(`${width} ${route}: horizontal overflow`);
  if(width===1440||width===390)await page.screenshot({path:`tmp/qa/${label}/${route.replace('/','')||'home'}-${width}.png`,fullPage:true});
 }
}
await page.goto(base+'faq/',{waitUntil:'networkidle'});
await page.getByRole('button',{name:'Open navigation',exact:true}).click();
if(!await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible())failures.push('Mobile menu did not open');
await page.keyboard.press('Escape');
if(await page.getByRole('button',{name:'Open navigation',exact:true}).getAttribute('aria-expanded')!=='false')failures.push('Escape did not close menu');
const question=page.locator('.faq-trigger').nth(1);await question.click();
if(await question.getAttribute('aria-expanded')!=='true')failures.push('FAQ did not expand');
await page.goto(base+'contact/',{waitUntil:'networkidle'});
if(await page.locator('form').evaluate(form=>form.checkValidity()))failures.push('Empty contact form incorrectly valid');
if(errors.length)failures.push(...errors);
console.log(JSON.stringify({routeViewportChecks:32,interactionChecks:['mobile menu','Escape','FAQ expansion','required form fields'],failures},null,2));
await browser.close();
if(failures.length)process.exitCode=1;
