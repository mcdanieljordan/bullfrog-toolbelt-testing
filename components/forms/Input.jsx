import React from 'react';

/** Search / text input with pill rounding and accent focus ring. */
export function Input({ placeholder = 'Search tools...', icon = '\u{1F50D}', value, onChange, style }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        background: 'var(--color-bg-raised)',
        border: `2px solid ${focused ? 'var(--color-focus-ring)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-pill)',
        padding: '10px 20px',
        transition: 'border-color var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
    >
      <span style={{ fontSize: 'var(--text-base)', opacity: 0.6 }}>{icon}</span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          border: 'none', outline: 'none', background: 'transparent', flex: 1,
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text)',
        }}
      />
    </div>
  );
}
