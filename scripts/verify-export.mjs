import fs from 'node:fs/promises';
import path from 'node:path';
const base=process.env.SITE_TARGET === 'sites' ? '' : (process.env.NEXT_PUBLIC_BASE_PATH ?? '/IP-6');
const routes=['','about','science','benefits','scientist','news','faq','contact'];
const errors=[];const pages=new Map();
for(const route of routes){const file=`out/${route?route+'/':''}index.html`;pages.set(route,await fs.readFile(file,'utf8'))}
let links=0,assets=0;
for(const [route,html] of pages){
 if((html.match(/<h1\b/g)||[]).length!==1)errors.push(`${route}: expected one h1`);
 if(!/<title>[^<]+<\/title>/.test(html))errors.push(`${route}: missing title`);
 if(!/<meta name="description" content="[^"]+"/.test(html))errors.push(`${route}: missing description`);
 if(/ip6research\.com|archetyp\.cx|Message Sent Successfully|200\+ published|30\+ countries/.test(html))errors.push(`${route}: stale or excluded content`);
 for(const match of html.matchAll(/\b(href|src)="([^"]+)"/g)){
  const kind=match[1],value=match[2].replaceAll('&amp;','&');if(/^(https?:|mailto:|tel:|data:)/.test(value))continue;
  const [pathname,hash]=value.split('#');
  if(!pathname){if(hash&&!html.includes(`id="${hash}"`))errors.push(`${route}: missing anchor ${hash}`);continue}
  if(base&&pathname!==base&&!pathname.startsWith(base+'/')){errors.push(`${route}: unprefixed URL ${value}`);continue}
  const local=(base?pathname.slice(base.length):pathname).split('?')[0];
  let target=path.join('out',decodeURIComponent(local));
  if(local.endsWith('/')||!path.extname(local))target=path.join(target,'index.html');
  try{await fs.access(target);if(kind==='src')assets++;else links++;if(hash){const destination=await fs.readFile(target,'utf8');if(!destination.includes(`id="${hash}"`))errors.push(`${route}: unresolved ${value}`)}}catch{errors.push(`${route}: missing ${value}`)}
 }
}
const inventory=JSON.parse(await fs.readFile('content/source/assets.json','utf8'));
for(const entry of inventory){if(entry.error){console.warn(`Unavailable legacy source asset (documented): ${entry.url}`);continue}const bytes=await fs.readFile(`public${entry.file}`);if(bytes.length!==entry.bytes)errors.push(`asset length changed: ${entry.file}`);if(entry.file.endsWith('.pdf')&&bytes.subarray(0,4).toString()!=='%PDF')errors.push(`invalid PDF: ${entry.file}`)}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log(`PASS: ${pages.size} pages, ${links} internal links, ${assets} rendered assets, ${inventory.filter(x=>!x.error).length} preserved source files. Titles, descriptions, single h1, fragments, PDF signatures, and excluded-content checks passed.`);
