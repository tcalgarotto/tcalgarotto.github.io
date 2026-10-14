import {readFile,writeFile} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {fileURLToPath} from 'node:url'
const base=fileURLToPath(new URL('../',import.meta.url))
const front=await readFile(base+'assets/interactive-card/portrait.svg','utf8')
const inner=front.match(/<svg[^>]*>([\s\S]*)<\/svg>/)[1]
const pin=(await readFile(base+'assets/interactive-card/pin.png')).toString('base64')
// The same model bounds, camera projection, joint anchor and initial pose as id-card.tsx.
const px=520/(40*Math.tan(10*Math.PI/180)),tilt=.06
const bodyX=190+Math.sin(tilt)*1.1*px,bodyY=-35+(2.55+Math.cos(tilt)*1.1)*px
const width=8*.35820895433425903*px,height=4*px
const left=bodyX-width/2,top=bodyY-(4*1.0229052305221558-3.16)*px
const pinWidth=1.4*1024/1536*px,pinHeight=1.4*px,pinY=bodyY-(.93-1.4*104/1536)*px-pinHeight/2
const f=n=>n.toFixed(3)
for(const theme of ['light','dark']){
 const color=theme==='light'?'#262626':'#d4d4d8',highlight=theme==='light'?'#555':'#f4f4f5'
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="380" height="2555" viewBox="0 -2035 380 2555"><defs><linearGradient id="rope"><stop stop-color="${color}"/><stop offset=".4" stop-color="${highlight}"/><stop offset="1" stop-color="${color}"/></linearGradient><clipPath id="face"><rect x="${f(left)}" y="${f(top)}" width="${f(width)}" height="${f(height)}" rx="9"/></clipPath></defs><path d="M190 -2035 L190 -35 C190 40 190 130 ${f(bodyX)} ${f(bodyY-.6*px)}" fill="none" stroke="url(#rope)" stroke-width="${f(.2*px)}"/><g transform="rotate(${-tilt*180/Math.PI} ${f(bodyX)} ${f(bodyY)})"><rect x="${f(left)}" y="${f(top+1.6)}" width="${f(width)}" height="${f(height)}" rx="9" fill="#202526"/><g clip-path="url(#face)"><svg x="${f(left)}" y="${f(top)}" width="${f(width)}" height="${f(height)}" viewBox="13.43 0 573.14 800">${inner}</svg><rect x="${f(left)}" y="${f(top)}" width="${f(width)}" height="${f(height*.03)}" fill="#c4db81"/></g><image href="data:image/png;base64,${pin}" x="${f(bodyX-pinWidth/2)}" y="${f(pinY)}" width="${f(pinWidth)}" height="${f(pinHeight)}"/></g></svg>`
 await writeFile(base+`assets/interactive-card/fallback-${theme}.svg`,svg)
}
const version=createHash('sha256').update(front).digest('hex').slice(0,12)
const entryPath=base+'interactive-card-source/src/main.tsx'
const entry=await readFile(entryPath,'utf8')
await writeFile(entryPath,entry.replace(/\/assets\/interactive-card\/portrait\.svg(?:\?v=[a-f0-9]+)?/g,'/assets/interactive-card/portrait.svg?v='+version))
