import React from 'react';

const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-semibold)',
  border: 'none',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
};

const sizes = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-sm)' },
  md: { padding: '12px 22px', fontSize: 'var(--text-base)' },
  lg: { padding: '15px 28px', fontSize: 'var(--text-lg)' },
};

const variants = {
  primary: {
    background: 'var(--color-btn-primary-bg)',
    color: 'var(--color-btn-primary-text)',
  },
  secondary: {
    background: 'var(--color-btn-secondary-bg)',
    color: 'var(--color-btn-secondary-text)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-pond-500)',
    border: '2px solid var(--color-border)',
  },
};

/** Pill-shaped action button. variant: primary | secondary | ghost. size: sm | md | lg. */
export function Button({ variant = 'primary', size = 'md', disabled, icon, children, style, ...props }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  let bg = v.background;
  if (variant === 'primary') {
    bg = active ? 'var(--color-btn-primary-bg-active)' : hover ? 'var(--color-btn-primary-bg-hover)' : v.background;
  } else if (variant === 'secondary') {
    bg = hover ? 'var(--color-btn-secondary-bg-hover)' : v.background;
  } else if (variant === 'ghost') {
    bg = hover ? 'var(--color-primary-100)' : 'transparent';
  }
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        ...base,
        ...sizes[size],
        ...v,
        background: bg,
        opacity: disabled ? 0.45 : 1,
        transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
        outline: 'none',
        ...style,
      }}
      onFocus={(e) => { e.target.style.boxShadow = '0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-focus-ring)'; }}
      onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
