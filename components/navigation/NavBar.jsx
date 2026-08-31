import React from 'react';

/** Site header: logo mark + wordmark, nav links, primary CTA — on the pond-deep dark background. */
export function NavBar({ links = ['Browse', 'Categories', 'Submit a Tool'], cta = 'Submit a Tool' }) {
  return (
    <header style={{
      background: 'var(--color-header-bg)',
      color: 'var(--color-header-text)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px var(--space-6)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/assets/logo/lilypad-mark.png" alt="BullFrog Toolbelt" style={{ width: 36, height: 36, borderRadius: '10px 10px 10px 3px' }} />
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>BullFrog Toolbelt</span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        {links.slice(0, -1).map((l) => (
          <a key={l} href="#" style={{ color: 'var(--color-header-text)', textDecoration: 'none', fontWeight: 500, fontSize: 'var(--text-base)', opacity: 0.9 }}>{l}</a>
        ))}
        <button style={{
          background: 'var(--color-accent-500)', color: 'var(--color-pond-900)',
          border: 'none', borderRadius: 'var(--radius-pill)', padding: '10px 20px',
          fontFamily: 'var(--font-body)', fontWeight: 600, cursor: 'pointer', fontSize: 'var(--text-sm)',
        }}>{cta}</button>
      </nav>
    </header>
  );
}
