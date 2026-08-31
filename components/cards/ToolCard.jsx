import React from 'react';
import { Tag } from '../tags/Tag';

/** Lily-pad shaped content card: three corners generously rounded, one corner squared into a leaf notch. */
export function ToolCard({ title, description, tags = [], icon, cta = 'Visit Tool', onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--color-bg-raised)',
        borderRadius: '28px 28px 28px 6px',
        padding: 'var(--space-5)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'box-shadow var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: 340,
        border: '1px solid var(--color-border)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: 44, height: 44, borderRadius: '14px 14px 14px 4px',
          background: 'var(--color-primary-100)', color: 'var(--color-primary-700)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0,
        }}>
          {icon || '\u2318'}
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', margin: 0, color: 'var(--color-text)' }}>{title}</h3>
      </div>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-normal)' }}>{description}</p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {tags.map((t, i) => <Tag key={i} variant={i === 0 ? 'accent' : 'primary'}>{t}</Tag>)}
      </div>
      <button
        onClick={onClick}
        style={{
          marginTop: 'var(--space-2)', alignSelf: 'flex-start',
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)',
          color: hover ? 'var(--color-primary-800)' : 'var(--color-primary-700)',
        }}
      >
        {cta} &rarr;
      </button>
    </div>
  );
}
