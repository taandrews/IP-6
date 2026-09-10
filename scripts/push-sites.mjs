// Accept a short-lived Sites credential through non-echoed stdin only.
// No credential is written to a file, Git configuration, or remote URL.
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const project=JSON.parse(fs.readFileSync('.openai/hosting.json','utf8')).project_id;
if(process.stdin.isTTY)process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
console.log('Ready for temporary source authorization.');
let input='';
process.stdin.on('data',chunk=>{
 input+=chunk;
 if(input.includes('\u0003'))process.exit(130);
 try{JSON.parse(input.trim())}catch{if(input.length>32000)process.exit(1);return}
 process.stdin.pause();
 try{
  const credential=JSON.parse(input.trim());input='';
  const remote=new URL(credential.remote_url);
  if(remote.protocol!=='https:'||remote.hostname!=='git.chatgpt-team.site'||!remote.pathname.endsWith(`/${project}.git`)||remote.username||remote.password)throw Error('Unexpected source destination');
  if(!/^[a-zA-Z0-9_/-]+$/.test(credential.branch))throw Error('Invalid source branch');
  const result=spawnSync('git',['-c',`safe.directory=${path.resolve('.')}`,'-c','credential.helper=','push',remote.href,`HEAD:refs/heads/${credential.branch}`],{encoding:'utf8',windowsHide:true,timeout:120000,env:{...process.env,GIT_CONFIG_COUNT:'1',GIT_CONFIG_KEY_0:'http.extraHeader',GIT_CONFIG_VALUE_0:`Authorization: Bearer ${credential.token}`,GIT_TERMINAL_PROMPT:'0'}});
  console.log(((result.stdout||'')+(result.stderr||'')).replaceAll(credential.token,'[REDACTED]'));
  if(result.error)console.error(result.error.message);
  process.exit(result.status ?? 1);
 }catch(error){console.error(error.message);process.exit(1)}
});
