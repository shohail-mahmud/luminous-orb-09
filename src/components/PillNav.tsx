import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = 'rgba(255, 255, 255, 0.9)',
  pillColor = 'rgba(255, 255, 255, 0.1)',
  hoveredPillTextColor = 'rgba(255, 255, 255, 0.95)',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const navItems = navItemsRef.current;

      if (navItems) {
        const pills = navItems.querySelectorAll('.pill');
        gsap.set(pills, { scale: 0 });
        gsap.to(pills, {
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease,
          delay: 0.2
        });
      }
    }

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  } as React.CSSProperties;

  return (
    <div
      className={`pill-nav ${className}`}
      style={cssVars}
    >
      <nav className="pill-nav-inner">
        <div ref={navItemsRef} className="pill-nav-items">
          <ul className="pill-nav-pills">
            {items.map((item, i) => {
              const href = item.href;
              const label = item.label;
              const ariaLabel = item.ariaLabel || label;
              const isActive = href === activeHref;

              const pillContent = (
                <>
                  <span
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                    className="pill-circle"
                    aria-hidden="true"
                  />
                  <span className="pill-label">{label}</span>
                </>
              );

              return (
                <li key={i} className="pill-item">
                  {isRouterLink(href) ? (
                    <Link
                      to={href}
                      className={`pill ${isActive ? 'pill-active' : ''}`}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                      aria-label={ariaLabel}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {pillContent}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className={`pill ${isActive ? 'pill-active' : ''}`}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                      aria-label={ariaLabel}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {pillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <button
        ref={hamburgerRef}
        onClick={toggleMobileMenu}
        className="pill-nav-hamburger"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <div ref={mobileMenuRef} className="pill-nav-mobile-menu">
        <ul className="pill-nav-mobile-items">
          {items.map((item, idx) => {
            const href = item.href;
            const label = item.label;
            const isActive = href === activeHref;

            return (
              <li key={idx} className="pill-nav-mobile-item">
                {isRouterLink(href) ? (
                  <Link
                    to={href}
                    className={`pill-nav-mobile-link ${isActive ? 'pill-nav-mobile-link-active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={`pill-nav-mobile-link ${isActive ? 'pill-nav-mobile-link-active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
      .pill-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        transition: background 0.3s ease, backdrop-filter 0.3s ease;
      }

      .pill-nav-inner {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .pill-nav-items {
        display: flex;
        align-items: center;
      }

      .pill-nav-pills {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        list-style: none;
        padding: 0.4rem 0.75rem;
        margin: 0;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .pill-item {
        list-style: none;
      }

      .pill {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: var(--nav-h, 34px);
        padding: 0 var(--pill-pad-x, 12px);
        border-radius: calc(var(--nav-h, 34px) / 2);
        text-decoration: none;
        color: var(--pill-text, rgba(255, 255, 255, 0.9));
        font-size: 13px;
        font-weight: 500;
        overflow: hidden;
        cursor: pointer;
        transition: color 0.3s ease;
      }

      .pill:hover {
        color: var(--hover-text, rgba(255, 255, 255, 0.95));
      }

      .pill-circle {
        position: absolute;
        left: 50%;
        border-radius: 50%;
        background: var(--pill-bg, rgba(255, 255, 255, 0.1));
        pointer-events: none;
      }

      .pill-label, .pill-label-hover {
        position: relative;
        z-index: 1;
      }

      .pill-label-hover {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: var(--hover-text, rgba(255, 255, 255, 0.95));
        font-weight: 600;
      }

      .pill-nav-hamburger {
        display: none;
        position: fixed;
        top: 0.75rem;
        right: 0.875rem;
        width: 36px;
        height: 36px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 9999px;
        cursor: pointer;
        z-index: 1001;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
      }

      .hamburger-line {
        width: 16px;
        height: 2px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 9999px;
      }

      .pill-nav-mobile-menu {
        position: fixed;
        top: 55px;
        right: 0.875rem;
        background: rgba(0, 0, 0, 0.98);
        border: none;
        border-radius: 12px;
        padding: 0.5rem;
        min-width: 150px;
        z-index: 1000;
      }

      .pill-nav-mobile-items {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .pill-nav-mobile-item {
        list-style: none;
      }

      .pill-nav-mobile-link {
        display: block;
        padding: 0.5rem 0.75rem;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        border-radius: 6px;
        transition: background 0.2s ease;
        font-size: 13px;
        font-weight: 500;
      }

      .pill-nav-mobile-link:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .pill-nav-mobile-link-active {
        background: rgba(255, 255, 255, 0.15);
        color: rgba(255, 255, 255, 1);
      }

      @media (max-width: 768px) {
        .pill-nav {
          padding: 0.625rem 0.875rem;
          background: rgba(0, 0, 0, 0.85);
        }

        .pill-nav-pills {
          display: none;
        }

        .pill-nav-hamburger {
          display: flex;
          transition: transform 0.2s ease;
        }

        .pill-nav-hamburger:active {
          transform: scale(0.95);
        }

        .pill-nav-mobile-menu {
          top: 52px;
          right: 0.75rem;
          left: 0.75rem;
          min-width: unset;
        }

        .pill-nav-mobile-link {
          font-size: 13px;
          padding: 0.55rem 0.875rem;
        }
      }
    `}</style>
    </div>
  );
};

export default PillNav;
