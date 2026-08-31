import React from 'react';

const variants = {
  accent: { background: 'var(--color-badge-bg)', color: 'var(--color-badge-text)' },
  primary: { background: 'var(--color-primary-100)', color: 'var(--color-primary-800)' },
  neutral: { background: 'var(--color-neutral-200)', color: 'var(--color-neutral-700)' },
  outline: { background: 'transparent', color: 'var(--color-pond-500)', border: '1.5px solid var(--color-border)' },
};

/** Small rounded label for subject/grade tags and status badges. variant: accent | primary | neutral | outline */
export function Tag({ variant = 'primary', children, style }) {
  const v = variants[variant] || variants.primary;
  return (
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-sm)',
        padding: '5px 14px',
        borderRadius: 'var(--radius-pill)',
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1.2,
        ...v,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
