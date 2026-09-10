import fs from 'node:fs/promises';
const inventory=JSON.parse(await fs.readFile('content/source/inventory.json','utf8'));
await fs.mkdir('public/source',{recursive:true});
const urls=[...new Set(inventory.pages.flatMap(p=>[...p.images,...p.links.map(l=>l.url).filter(u=>u.startsWith('http://www.ip-6.net/files/'))]))].filter(u=>['www.ip-6.net','builder.sitearchitect.com'].includes(new URL(u).hostname));
const results=await Promise.all(urls.map(async url=>{try{const existingName=new URL(url).pathname.split('/' ).pop();try{const existing=await fs.readFile(`public/source/${existingName}`);return {url,file:`/source/${existingName}`,bytes:existing.length}}catch{}const r=await fetch(url,{signal:AbortSignal.timeout(60000)});if(!r.ok)throw Error(String(r.status));const name=new URL(url).pathname.split('/').pop();const data=Buffer.from(await r.arrayBuffer());await fs.writeFile(`public/source/${name}`,data);return {url,file:`/source/${name}`,bytes:data.length};}catch(e){return{url,error:String(e)}}}));
await fs.writeFile('content/source/assets.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
