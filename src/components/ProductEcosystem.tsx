import { Icon } from "./Icon";

/** Editable interface studies. These are not released-product screenshots. */
export function ProductEcosystem() {
  return <div className="ecosystem" role="img" aria-label="A software studio workbench with a laptop, App Lock Android phone, browser tools and AI concept card">
    <div className="desk-scene" aria-hidden="true">
      <div className="desk-light"/>
      <div className="desk-note">Useful tools.<br/>Clear ideas.<br/>Built with care.<span>—</span></div>
      <div className="desk-laptop"><div className="laptop-lid"><span className="laptop-camera"/><div className="laptop-display"><div className="mock-nav"><b>Dovira <span>Labs.</span></b><span>Products　 About　 Engineering</span><Icon name="code" size={12}/></div><div className="mock-main"><div className="mock-statement"><strong>Build.<br/>Solve.<br/><span>Improve.</span></strong><p>Practical software.<br/>Built around real needs.</p></div><div className="mock-products">{[["mobile","Apps"],["web","Web Products"],["browser","Browser Tools"],["spark","AI Software"]].map(([icon,title])=><div key={title}><span><Icon name={icon} size={15}/></span><b>{title}</b><i>↗</i></div>)}</div></div><div className="mock-bottom"><span>DESIGNED WITH INTENT</span><span>BUILT WITH CARE</span></div></div></div><div className="laptop-deck"><div className="keyboard"/><div className="trackpad"/></div><div className="laptop-lip"/></div>
      <div className="desk-phone"><span className="phone-camera"/><span className="phone-studio">DOVIRA LABS</span><strong>App Lock</strong><div className="phone-app"><Icon name="lock" size={35}/></div><span className="phone-platform">ANDROID APP</span><span className="phone-concept">Product concept</span><span className="phone-home"/></div>
      <div className="desk-ai-card"><Icon name="spark" size={17}/><p>Ideas<br/>into useful<br/>products.</p><span>—</span><svg viewBox="0 0 150 74"><path d="M0 67 24 45 39 53 65 20 81 33 101 6 127 33 150 43V74H0Z" fill="#c1d3f7"/><path d="m0 74 42-22 27 8 32-54 26 27 23 10v31Z" fill="#779eea"/><path d="m65 74 36-68 4 47 45 21Z" fill="#386bd0"/><path d="m101 6 26 27-13-7-6 7Z" fill="#eff5ff"/></svg></div>
      <div className="desk-stylus"/><span className="desk-caption">CONCEPT WORKBENCH / DOVIRA LABS</span>
    </div>
  </div>;
}

export function AppLockVisual() {
  return <div className="lock-visual" role="img" aria-label="Two App Lock concept phones. Replaceable with actual product screenshots."><div className="showcase-phone phone-dark" aria-hidden="true"><span className="phone-camera"/><Icon name="lock" size={38}/><strong>App Lock</strong><span>Android App</span><span className="phone-home"/></div><div className="showcase-phone phone-light" aria-hidden="true"><span className="phone-camera"/><span className="phone-studio">DOVIRA LABS</span><strong>App Lock</strong><div className="phone-app"><Icon name="lock" size={35}/></div><span className="phone-platform">ANDROID APP</span><div className="phone-placeholder"><i/><i/><i/></div><span className="phone-home"/></div><span className="lock-visual-label">CONCEPT PREVIEW</span></div>;
}
