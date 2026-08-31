import React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Input } from '../../components/forms/Input';
import { Tag } from '../../components/tags/Tag';
import { ToolCard } from '../../components/cards/ToolCard';
import { Button } from '../../components/buttons/Button';

const TOOLS = [
  { title: 'Kahoot!', description: 'Turn any lesson into a quiz-show style review game the whole class plays together.', tags: ['Free', 'Grades 3-8'], icon: '\u{1F3AE}' },
  { title: 'Padlet', description: 'A shared digital bulletin board for brainstorms, exit tickets and gallery walks.', tags: ['Free', 'K-12'], icon: '\u{1F4CC}' },
  { title: 'Flip', description: 'Short video responses students record and discuss, right from a browser.', tags: ['New', 'Grades 6-12'], icon: '\u{1F3A5}' },
  { title: 'Wordwall', description: 'Build matching games, quizzes and sorting activities in minutes.', tags: ['Free', 'K-5'], icon: '\u{1F9E9}' },
  { title: 'Canva for Education', description: 'Drag-and-drop design for posters, worksheets and slide decks.', tags: ['Free', 'K-12'], icon: '\u{1F3A8}' },
  { title: 'Formative', description: 'Live formative checks with instant, question-by-question feedback.', tags: ['Grades 3-12'], icon: '\u2705' },
];

const CATEGORIES = ['All Tools', 'Assessment', 'Engagement', 'Creativity', 'Organization', 'Communication'];

export function DirectoryHome() {
  const [active, setActive] = React.useState('All Tools');
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>
      <NavBar />

      <section className="ripple-bg-dark" style={{
        background: 'var(--color-pond-500)', color: 'var(--color-neutral-50)',
        padding: 'var(--space-8) var(--space-6) var(--space-7)', textAlign: 'center',
        '--ripple-x': '15%', '--ripple-y': '20%',
      }}>
        <h1 style={{ fontSize: 'var(--text-5xl)', margin: '0 0 var(--space-3)' }}>BullFrog Toolbelt</h1>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', color: 'var(--color-accent-400)', margin: '0 0 var(--space-6)' }}>
          One Link to Rule Them All
        </p>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <Input placeholder="Search 400+ free teacher tools..." style={{ background: 'var(--color-neutral-50)' }} />
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-6) var(--container-pad)' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{ border: 'none', padding: 0, background: 'none', cursor: 'pointer' }}
            >
              <Tag variant={active === c ? 'accent' : 'outline'}>{c}</Tag>
            </button>
          ))}
        </div>

        <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-text)', margin: '0 0 var(--space-5)' }}>Featured this week</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
          {TOOLS.map((t) => <ToolCard key={t.title} {...t} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-7)' }}>
          <Button variant="secondary" size="lg">Browse all 400+ tools</Button>
        </div>
      </section>

      <footer style={{ background: 'var(--color-neutral-200)', padding: 'var(--space-6)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
        <p style={{ margin: 0 }}>BullFrog Toolbelt &mdash; free, teacher-vetted tools. Built by teachers, for teachers.</p>
      </footer>
    </div>
  );
}
