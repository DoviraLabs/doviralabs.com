import { Icon } from "./Icon";

/** Editable interface studies. These are not released-product screenshots. */
export function ProductEcosystem() {
  return <div className="ecosystem" role="img" aria-label="A software studio workbench with a laptop, App Lock Android phone, browser tools and AI concept card">
    <div className="desk-scene" aria-hidden="true">
      <div className="desk-light"/>
      <div className="desk-note">Small tools.<br/>A bigger.<br/>Brighter world.<span>—</span></div>
      <svg className="desk-plant" viewBox="0 0 140 270" fill="none"><defs><linearGradient id="leaf-shade" x1="20" y1="0" x2="110" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#536d52"/><stop offset="1" stopColor="#203b30"/></linearGradient></defs><path d="M71 209Q73 110 73 17M69 174Q43 105 18 77M74 173Q98 106 129 66" stroke="#48614a" strokeWidth="3"/><g fill="url(#leaf-shade)"><path d="M73 123C37 87 48 39 75 8C88 54 99 83 73 123Z"/><path d="M63 157C24 144 7 112 8 70C42 85 62 116 63 157Z"/><path d="M77 188C92 146 121 133 139 132C130 170 107 191 77 188Z"/><path d="M65 195C37 190 20 174 11 143C47 147 61 164 65 195Z"/></g><path d="M82 142C78 100 106 63 133 53C137 91 113 129 82 142Z" fill="url(#leaf-shade)"/><path d="M75 24L72 126M16 83L63 157M128 65L82 142M132 141L78 187" stroke="#7c9272" strokeWidth=".7"/><ellipse cx="73" cy="207" rx="42" ry="12" fill="#8b929f"/><path d="M31 207H115L104 260Q73 273 43 260Z" fill="#e4e8ef"/><ellipse cx="73" cy="207" rx="34" ry="8" fill="#273335"/></svg>
      <div className="desk-laptop"><div className="laptop-lid"><span className="laptop-camera"/><div className="laptop-display"><div className="mock-nav"><b>Dovira <span>Labs.</span></b><span>Products　 About　 Engineering</span><Icon name="code" size={12}/></div><div className="mock-main"><div className="mock-statement"><strong>Build.<br/>Solve.<br/><span>Improve.</span></strong><p>Thoughtful software.<br/>For a better digital tomorrow.</p></div><div className="mock-products">{[["mobile","Apps"],["web","Web Products"],["browser","Browser Tools"],["spark","AI Software"]].map(([icon,title])=><div key={title}><span><Icon name={icon} size={15}/></span><b>{title}</b><i>↗</i></div>)}</div></div><div className="mock-bottom"><span>DESIGNED WITH INTENT</span><span>BUILT WITH CARE</span></div></div></div><div className="laptop-deck"><div className="keyboard"/><div className="trackpad"/></div><div className="laptop-lip"/></div>
      <div className="desk-phone"><span className="phone-camera"/><span className="phone-studio">DOVIRA LABS</span><strong>App Lock</strong><div className="phone-app"><Icon name="lock" size={35}/></div><span className="phone-platform">ANDROID APP</span><span className="phone-concept">Product concept</span><span className="phone-home"/></div>
      <div className="desk-ai-card"><Icon name="spark" size={17}/><p>Ideas<br/>to useful<br/>products.</p><span>—</span><svg viewBox="0 0 150 74"><path d="M0 67 24 45 39 53 65 20 81 33 101 6 127 33 150 43V74H0Z" fill="#c1d3f7"/><path d="m0 74 42-22 27 8 32-54 26 27 23 10v31Z" fill="#779eea"/><path d="m65 74 36-68 4 47 45 21Z" fill="#386bd0"/><path d="m101 6 26 27-13-7-6 7Z" fill="#eff5ff"/></svg></div>
      <div className="desk-stylus"/><span className="desk-caption">CONCEPT WORKBENCH / DOVIRA LABS</span>
    </div>
  </div>;
}

export function AppLockVisual() {
  return <div className="lock-visual" role="img" aria-label="Two App Lock concept phones. Replaceable with actual product screenshots."><div className="showcase-phone phone-dark" aria-hidden="true"><span className="phone-camera"/><Icon name="lock" size={38}/><strong>App Lock</strong><span>Android App</span><span className="phone-home"/></div><div className="showcase-phone phone-light" aria-hidden="true"><span className="phone-camera"/><span className="phone-studio">DOVIRA LABS</span><strong>App Lock</strong><div className="phone-app"><Icon name="lock" size={35}/></div><span className="phone-platform">ANDROID APP</span><div className="phone-placeholder"><i/><i/><i/></div><span className="phone-home"/></div><span className="lock-visual-label">CONCEPT PREVIEW</span></div>;
}

