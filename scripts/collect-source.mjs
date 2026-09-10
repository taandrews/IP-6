import fs from 'node:fs/promises';
const base='http://www.ip-6.net/';
const paths=['','about-us.html','other-benefits.html','what-s-new-.html','The_Science.html','the-scientist.html','faq.html','contact-us.html'];
await fs.mkdir('content/source',{recursive:true});
const decode=s=>s.replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(+n)).replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&quot;/gi,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const plain=s=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<\/(p|div|h[1-6]|tr)>|<br\b[^>]*>/gi,'\n').replace(/<[^>]+>/g,'')).replace(/[ \t]+/g,' ').replace(/\n\s*\n/g,'\n\n').trim();
const pages=await Promise.all(paths.map(async path=>{
 const url=new URL(path,base).href; const r=await fetch(url,{signal:AbortSignal.timeout(60000)}); if(!r.ok)throw Error(`${url}: ${r.status}`); const html=await r.text();
 const main=html.split(/<DIV id="layout">/i)[1]?.split(/<!-- FOOTER BLOCK -->/i)[0]||html;
 const links=[...main.matchAll(/href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m=>({url:new URL(m[1],url).href,label:plain(m[2])})).filter(l=>!l.url.startsWith('javascript:'));
 const images=[...main.matchAll(/<img\b[^>]*src=["']([^"']+)["'][^>]*>/gi)].map(m=>new URL(m[1],url).href);
 const name=path||'index.html'; await fs.writeFile(`content/source/${name}`,html); await fs.writeFile(`content/source/${name}.txt`,plain(main));
 return {url,path:name,text:plain(main),links,images};
}));
await fs.writeFile('content/source/inventory.json',JSON.stringify({collectedAt:new Date().toISOString(),pages},null,2));
console.log(JSON.stringify(pages.map(p=>({url:p.url,characters:p.text.length,links:p.links,images:p.images})),null,2));
