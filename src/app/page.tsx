"use client";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const hiText = document.querySelector('.hi-text') as HTMLElement;
    let ticking = false;

    function updateParallax() {
      if (hiText) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        hiText.style.transform = `translateY(${rate}px)`;
      }
      ticking = false;
    }

    function requestTick() {
      if (!ticking && window.innerWidth > 1024) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <div className="container">
        <header>
          <div className="logo-container">
            <div className="logo"><span className="bold">re:</span>fabrika</div>
            <div className="tagline">Redesign. Rebuild. Relaunch.</div>
          </div>
          <div className="cta-container">
            <div className="cta-text">Start Your Transformation</div>
            <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:hello@refabrika.com" className="email">hello@refabrika.com</a>
              <a href="https://wa.me/905323745568" className="email">+90 532 374 55 68</a>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="content-wrapper">
            <div className="left-content">
              <h1>
                AI-Powered
                <span className="highlight">Advertising Agency</span>
              </h1>
              <p className="description">
                Transforming businesses through intelligent design & strategic innovation
              </p>
              <p className="experience">17 Years of Experience</p>
            </div>
            <div className="hi-container">
              <div className="hi-text">hi</div>
            </div>
          </div>
        </main>

        <footer>
          <div className="location">Istanbul × Fethiye | Crafting Digital Excellence Since Day One</div>
          <div className="copyright">Copyright 2025</div>
        </footer>
      </div>

      {/* Black Band Outside Container */}
      <div className="black-band">
        <div className="scroll-wrapper">
          <div className="scroll-container">
            <div className="scroll-text">
              <span>Redesign.</span><span>Rebuild.</span><span>Relaunch.</span><span>Redesign.</span>
            </div>
            <div className="scroll-text">
              <span>Redesign.</span><span>Rebuild.</span><span>Relaunch.</span><span>Redesign.</span>
            </div>
            <div className="scroll-text">
              <span>Redesign.</span><span>Rebuild.</span><span>Relaunch.</span><span>Redesign.</span>
            </div>
            <div className="scroll-text">
              <span>Redesign.</span><span>Rebuild.</span><span>Relaunch.</span><span>Redesign.</span>
            </div>
            <div className="scroll-text">
              <span>Redesign.</span><span>Rebuild.</span><span>Relaunch.</span><span>Redesign.</span>
            </div>
            <div className="scroll-text">
              <span>Redesign.</span><span>Rebuild.</span><span>Relaunch.</span><span>Redesign.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
