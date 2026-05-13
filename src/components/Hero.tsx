import { motion } from 'framer-motion';

interface Props {
  name: string;
  role: string;
  bio: string;
  github: string;
  email: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease } },
});

const [firstName, ...rest] = ' Franco Balsamo'.trim().split(' ');
const lastName = rest.join(' ');

export default function Hero({ name, role, bio, github, email }: Props) {
  const parts = name.trim().split(' ');
  const first = parts[0];
  const last = parts.slice(1).join(' ');

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 2rem 6rem',
      }}
    >
      <div className="container hero-inner">
        {/* number decoration */}
        <motion.span
          className="hero-index"
          {...fade(0)}
        >
          01
        </motion.span>

        {/* name block */}
        <div className="hero-name-block">
          <motion.h1 {...fade(0.1)}>
            <span className="hero-first">{first}</span>
            <br />
            <span className="hero-last">
              {last}
              <span className="hero-cursor" aria-hidden="true" />
            </span>
          </motion.h1>
        </div>

        {/* bottom row */}
        <div className="hero-bottom">
          <motion.div className="hero-meta" {...fade(0.25)}>
            <p className="hero-role">{role}</p>
            <p className="hero-bio">{bio}</p>
          </motion.div>

          <motion.div className="hero-actions" {...fade(0.35)}>
            <a href="#proyectos" className="btn-primary">
              Proyectos
            </a>
            <a href={`mailto:${email}`} className="btn-secondary">
              Contacto
            </a>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                GitHub ↗
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hero-index {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-muted-2);
          letter-spacing: 0.2em;
        }

        .hero-name-block h1 {
          font-size: clamp(3.5rem, 10vw, 8.5rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .hero-first {
          font-family: var(--font-sans);
          font-weight: 300;
          color: var(--color-muted);
        }

        .hero-last {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 500;
          font-optical-sizing: auto;
          color: var(--color-text);
          position: relative;
        }

        .hero-cursor {
          display: inline-block;
          width: 3px;
          height: 0.75em;
          background: var(--color-accent);
          margin-left: 4px;
          vertical-align: middle;
          border-radius: 1px;
          animation: blink 1.1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-bottom {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          gap: 2rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--color-border);
        }

        .hero-role {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--color-accent);
          letter-spacing: 0.08em;
          margin-bottom: 0.5rem;
        }

        .hero-bio {
          font-size: 0.9rem;
          color: var(--color-muted);
          max-width: 380px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .hero-bottom {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
