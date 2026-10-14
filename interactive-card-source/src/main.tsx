import React,{Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import IdCard from './id-card'
class CardBoundary extends React.Component<{onError:()=>void,children:React.ReactNode},{failed:boolean}>{
  state={failed:false};static getDerivedStateFromError(){return {failed:true}};componentDidCatch(){this.props.onError()};render(){return this.state.failed?null:this.props.children}
}
export function mountBadge(container:HTMLElement,onReady:()=>void,onError:()=>void){
  const root=createRoot(container);
  const render=(active:boolean)=>root.render(<CardBoundary onError={onError}><Suspense fallback={null}><IdCard frontImage='/assets/interactive-card/portrait.svg?v=d6d077a9e791' className='lanyard-stage' onReady={onReady} active={active}/></Suspense></CardBoundary>);
  render(true);
  return {unmount:()=>root.unmount(),setActive:render}
}
