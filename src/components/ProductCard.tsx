import { Link } from "react-router-dom";
import { products } from "../data/products";
import { Icon } from "./Icon";
import { AppLockVisual } from "./ProductEcosystem";
export function ProductCard({product, headingLevel = 3}: {product:(typeof products)[number]; headingLevel?: 2 | 3}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const featured = product.kind === "lock";
  return <article className={`product-card ${featured ? "product-featured" : `product-upcoming upcoming-${product.kind}`}`}>
    {featured && <AppLockVisual/>}
    <div className="product-info">
      {featured ? <p className="product-category"><span/>Android App</p> : <div className="upcoming-heading"><span className="product-symbol" aria-hidden="true"><Icon name={product.kind} size={26}/></span><span className="status"><span/>IN DEVELOPMENT</span></div>}
      <Heading>{"href" in product ? <Link to={product.href} className="product-link">{product.name}</Link> : product.name}</Heading>
      <p className="muted">{product.description}</p>
      {"href" in product ? <Link to={product.href} className="button product-cta">Learn more about {product.name} <Icon name="arrow" size={17}/></Link> : <p className="upcoming-note">Product concept · Details to follow</p>}
    </div>
  </article>;
}
