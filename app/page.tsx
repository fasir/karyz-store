'use client';

import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, Play, Sparkles, X } from 'lucide-react';

const features = [
  ['01', 'Your brand, your way', 'Custom themes, colors, and a domain that feels like home.'],
  ['02', 'Everything in one place', 'Products, payments, orders, and customers, beautifully organized.'],
  ['03', 'Ready when you are', 'Start with a simple idea and grow without rebuilding along the way.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const openSignup = () => setSignupOpen(true);

  return <main>
    {/* <div className="topline"><span>New: launch your store in minutes</span><a href="#features">See what&apos;s new <ArrowRight size={13} /></a></div> */}
    
    <header className="site-header">
      <a className="brand" href="#top"><img src="/logo.png" alt="Karyz" width="122" height="62" /></a>
      <button className="mobile-toggle" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}><a href="#features">Features <ChevronDown size={14} /></a><a href="#examples">Examples</a><a href="#demo">Demo Store</a><a href="#pricing">Pricing</a></nav>
      <div className="header-actions"><button className="login-button" onClick={openSignup}>Log in</button><button className="create-button" onClick={openSignup}>Create store</button></div>
    </header>

    <section className="hero" id="top">
        <div className="hero-content">
          <div className="pill"><Sparkles size={14} /> Built for independent brands</div>
          <h1>The <strong>easiest</strong> way to run an e-commerce store</h1>
          <p>E-commerce website builder with 0% commissions. Add products to a spreadsheet and sell online in seconds.</p>
          <form className="store-start-form" onSubmit={(event) => { event.preventDefault(); openSignup(); }}><input aria-label="Store name" placeholder="I want to sell" required /><button type="submit">Create store <ArrowRight size={16} /></button></form>
          <div className="hero-proof"><span className="proof-check"><Check size={13} /></span><p><strong>Free to start</strong> · No code required · 0% commission</p></div>
        </div><div className="hero-visual"><div className="visual-note note-one">No code needed <Check size={14} /></div><div className="browser-card"><div className="browser-bar"><span className="traffic red" /><span className="traffic yellow" /><span className="traffic green" /><span className="url">yourbrand.karyz.store</span></div><div className="store-preview"><div className="store-nav"><strong>nōma</strong><span>Shop &nbsp; About &nbsp; Journal</span><span>Bag (0)</span></div><div className="store-hero"><div><small>NEW COLLECTION / 2025</small><h2>Objects for<br /><i>slower living.</i></h2><button>Explore collection <ArrowRight size={13} /></button></div><div className="ceramic-art"><div className="sun" /><div className="vase vase-one" /><div className="vase vase-two" /></div></div><div className="store-foot"><span>Thoughtfully made in small batches</span><span>Scroll to discover ↓</span></div></div></div><div className="visual-note note-two">Beautiful by default <Sparkles size={14} /></div></div></section>
    <section className="logo-strip"><span>MADE FOR PEOPLE WHO MAKE</span><div className="logo-list"><span className="petbra-logo">Petbra <small>pet wellness</small></span><img src="/logo.png" alt="Karyz" /><span className="petbra-logo">Petbra <small>pet wellness</small></span><img src="/logo.png" alt="Karyz" /></div></section>
    <section className="feature-intro" id="features"><p className="eyebrow">One calm place for your business</p><h2>Everything you need to<br /><em>make it yours.</em></h2><p className="intro-copy">Karyz gives independent brands the tools to look professional, sell with confidence, and grow on their own terms.</p></section>
    <section className="feature-grid">{features.map(([number, title, text]) => <article key={number}><span className="feature-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#pricing">Learn more <ArrowRight size={15} /></a></article>)}</section>
    <section className="showcase" id="examples"><div className="showcase-copy"><p className="eyebrow">Designed around you</p><h2>Small business<br /><em>never looked so good.</em></h2><p>Choose a starting point, add your personality, and make every detail feel considered. Your store should feel like an extension of the work you love.</p><button className="outline-button" onClick={openSignup}>Create your store <ArrowRight size={16} /></button></div><div className="showcase-window"><div className="window-top"><span>Store editor</span><span className="live-dot">● Live</span></div><div className="editor-layout"><div className="editor-sidebar"><span className="active">⌂ &nbsp; Overview</span><span>▣ &nbsp; Products</span><span>◷ &nbsp; Orders</span><span>◎ &nbsp; Customers</span><span>⚙ &nbsp; Settings</span></div><div className="editor-main"><div className="editor-heading"><div><small>MONDAY, SEPTEMBER 15</small><h3>Good morning, Maya</h3></div><span className="mini-avatar">M</span></div><div className="metrics"><div><small>Total sales</small><strong>$18,420</strong><b>+24.8%</b></div><div><small>Orders</small><strong>286</strong><b>+12.4%</b></div><div><small>Visitors</small><strong>8,942</strong><b>+18.2%</b></div></div><div className="chart"><div className="chart-title"><span>Sales overview</span><small>Last 30 days⌄</small></div><div className="chart-lines"><i /><i /><i /><i /><svg viewBox="0 0 500 130" preserveAspectRatio="none"><path d="M0 110 C45 90, 54 105, 90 74 S145 85, 180 57 S225 91, 270 53 S315 64, 350 30 S405 55, 450 18 S480 32, 500 5" /></svg></div></div></div></div></div></section>
    <section className="demo-section" id="demo"><div className="demo-card"><div className="demo-copy"><p className="eyebrow">Try before you build</p><h2>See what your<br /><em>store could be.</em></h2><p>Browse a live Karyz store made for a modern brand. Notice something you like? Make it yours in a few clicks.</p><a className="primary-button" href="#top">Visit demo store <ArrowRight size={17} /></a></div><div className="demo-product"><div className="demo-shape shape-one" /><div className="demo-shape shape-two" /><div className="demo-label">Objects for<br /><i>slower living.</i></div></div></div></section>
    <section className="pricing" id="pricing"><p className="eyebrow">Simple to start</p><h2>One plan. <em>No surprises.</em></h2><p>Everything you need to launch and grow, for less than your morning coffee.</p><div className="price"><strong>$19</strong><span>/ month</span></div><button className="primary-button" onClick={openSignup}>Start your free trial <ArrowRight size={17} /></button><small>14 days free. No credit card required.</small></section>
    <footer className="site-footer"><div><img src="/logo.png" alt="Karyz" width="106" height="54" /><p>Make something<br />worth remembering.</p></div><div className="footer-column"><strong>Product</strong><a href="#features">Features</a><a href="#demo">Demo store</a><a href="#pricing">Pricing</a></div><div className="footer-column"><strong>Company</strong><a href="#about">About Karyz</a><a href="#about">Journal</a><a href="#about">Contact</a></div><div className="footer-column"><strong>Follow along</strong><a href="#top">Instagram</a><a href="#top">Pinterest</a><a href="#top">LinkedIn</a></div><div className="footer-bottom"><span>© 2025 Karyz, Inc.</span><span>Privacy &nbsp; Terms</span></div></footer>
    {signupOpen && <div className="modal-backdrop" onClick={() => setSignupOpen(false)}><div className="signup-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSignupOpen(false)} aria-label="Close"><X size={20} /></button>{submitted ? <div className="success-state"><div className="success-icon"><Check size={23} /></div><h2>You&apos;re on your way.</h2><p>We&apos;ll save your spot and send the next steps to your inbox.</p><button className="primary-button" onClick={() => setSignupOpen(false)}>Back to Karyz</button></div> : <><p className="eyebrow">Start your free trial</p><h2>Let&apos;s make it <em>real.</em></h2><p className="modal-copy">Create your account and get your store online today.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@brand.com" /></label><button className="primary-button" type="submit">Create my store <ArrowRight size={17} /></button></form><small>14 days free. No credit card required.</small></>}</div></div>}
  </main>;
}
