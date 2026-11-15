const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(process.argv[2],'utf8');
const noop=()=>{}; const el=new Proxy(function(){},{get:()=>el,apply:()=>el});
const ctx={document:{addEventListener:noop,documentElement:{lang:'de'},querySelectorAll:()=>[],getElementById:()=>null},window:{},localStorage:{getItem:()=>null,setItem:noop},sessionStorage:{getItem:()=>'1',setItem:noop},location:{pathname:'/x',host:''},navigator:{userAgent:'bot',language:'de'},setTimeout:noop,setInterval:noop,console};
vm.createContext(ctx);
vm.runInContext(src+';this.__out={translations,d1,d2_detailed,d3,BRAND};',ctx);
process.stdout.write(JSON.stringify(ctx.__out));
