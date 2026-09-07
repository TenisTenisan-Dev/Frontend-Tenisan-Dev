import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="home-nav">
        <a className="home-brand" href="#top" aria-label="Rally Court home"><span className="home-brand-mark"><i /></span><span><strong>rally</strong><small>COURT CLUB</small></span></a>
        <nav className="home-links" aria-label="Public navigation"><a href="#programs">Programs</a><a href="#coaches">Coaches</a><a href="#club">The club</a></nav>
        <div className="home-nav-actions"><a className="home-login" href="/login">Member login</a><a className="home-cta" href="/login?redirect=booking">Book a class <ChevronRight size={15} /></a></div>
      </header>

      <main id="top">
        <section className="home-hero">
          <div className="home-hero-copy"><p className="home-kicker"><span /> Tennis, with intention</p><h1>Find your<br /><em>best game.</em></h1><p className="home-lede">Thoughtful coaching, welcoming people, and a court that always feels like your own. Progress starts with showing up.</p><div className="home-hero-actions"><a className="home-cta large" href="/login?redirect=booking">Book a coaching class <ChevronRight size={17} /></a><a href="#programs" className="home-text-link">Explore programs <span>↗</span></a></div><div className="home-proof"><div className="proof-avatars"><span>JA</span><span>MC</span><span>LM</span><b>+</b></div><p><strong>1,200+ players</strong><br />already finding their rhythm</p></div></div>
          <div className="home-court-visual" aria-label="Tennis court illustration"><div className="court-glow" /><div className="home-court"><div className="home-court-net" /><div className="home-court-service left" /><div className="home-court-service right" /><div className="home-court-center" /></div><div className="home-ball"><span /></div><div className="visual-note"><span>01</span><strong>Play<br />with purpose.</strong></div></div>
        </section>

        <section className="home-intro-band" id="club"><p className="home-kicker">More than a tennis club</p><h2>A better way to<br /><em>get better.</em></h2><p>At Rally Court, every session has a purpose. Whether you are picking up a racquet for the first time or sharpening your competitive edge, our coaches meet you where you are.</p><div className="intro-stats"><span><strong>4</strong> coaching levels</span><span><strong>12</strong> expert coaches</span><span><strong>7</strong> indoor courts</span></div></section>

        <section className="programs-section" id="programs"><div className="section-kicker-row"><div><p className="home-kicker">Choose your starting point</p><h2>Coaching for<br /><em>every stage.</em></h2></div><a className="home-text-link" href="/login?redirect=booking">See all programs <span>↗</span></a></div><div className="program-grid"><article className="program-card featured"><div className="program-number">01</div><div className="program-icon beginner-icon">○</div><h3>Newbie</h3><p>Your first steps on court. Learn the basics, find your balance, and start enjoying the game.</p><span className="program-meta">For complete beginners <ChevronRight size={14} /></span></article><article className="program-card"><div className="program-number">02</div><div className="program-icon">↗</div><h3>Beginner</h3><p>Build a confident foundation with better movement, contact, and consistency.</p><span className="program-meta">Build your foundation <ChevronRight size={14} /></span></article><article className="program-card"><div className="program-number">03</div><div className="program-icon">✦</div><h3>Upper Beginner</h3><p>Turn your practice into points. Develop patterns, placement, and match awareness.</p><span className="program-meta">Play with intention <ChevronRight size={14} /></span></article><article className="program-card"><div className="program-number">04</div><div className="program-icon">◒</div><h3>Intermediate</h3><p>Refine your game and compete with more clarity, control, and confidence.</p><span className="program-meta">Raise your level <ChevronRight size={14} /></span></article></div></section>

        <section className="coach-strip" id="coaches"><div className="coach-strip-copy"><p className="home-kicker">People make the difference</p><h2>Meet the team<br />behind your <em>progress.</em></h2><p>Patient, precise, and genuinely invested in your game. Find a coach who makes every session count.</p><a className="home-cta" href="/login?redirect=booking">Meet our coaches <ChevronRight size={15} /></a></div><div className="coach-collage"><div className="coach-photo coach-one"><span>AR</span></div><div className="coach-photo coach-two"><span>MS</span></div><div className="coach-caption"><strong>12 coaches</strong><span>one shared belief:<br />everyone can improve</span></div></div></section>
      </main>
      <footer className="home-footer"><a className="home-brand" href="#top"><span className="home-brand-mark"><i /></span><span><strong>rally</strong><small>COURT CLUB</small></span></a><span>© 2024 Rally Court Club</span><span>Made for the love of the game.</span></footer>
    </div>
  );
}
