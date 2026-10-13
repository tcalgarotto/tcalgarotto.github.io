import {readFile,writeFile} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {fileURLToPath} from 'node:url'
const base=fileURLToPath(new URL('../',import.meta.url))
const version=async path=>createHash('sha256').update(await readFile(base+path)).digest('hex').slice(0,12)
let app=await readFile(base+'app.js','utf8')
const importPath=/\.\/assets\/interactive-card\/card\.js(?:\?v=[a-f0-9]+)?/g
if((app.match(importPath)||[]).length!==1)throw new Error('Expected exactly one badge module import')
app=app.replace(importPath,'./assets/interactive-card/card.js?v='+await version('assets/interactive-card/card.js'))
await writeFile(base+'app.js',app)
let html=await readFile(base+'index.html','utf8')
for(const asset of ['app.js','styles.css','assets/badge-google-python.png','assets/badge-ibm-rag-agentic.png','assets/credential-agentic-langchain-langgraph.png','assets/credential-agents-mcp.png','assets/credential-agentic-workflows.png','assets/credential-multimodal-ai.png','assets/credential-rag-applications.png','assets/credential-advanced-rag.png']){
 const pattern=new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?:\\?v=[a-f0-9]+)?','g')
 html=html.replace(pattern,asset+'?v='+await version(asset))
}
await writeFile(base+'index.html',html)
