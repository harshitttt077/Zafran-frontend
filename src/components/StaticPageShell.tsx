import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type StaticPageShellProps = {
  title: string
  eyebrow?: string
  children: ReactNode
}

export default function StaticPageShell({
  title,
  eyebrow,
  children,
}: StaticPageShellProps) {
  return (
    <main className="main-wrapper">
      <section className="section_layout1">
        <div className="padding-global">
          <div className="container-large">
            <div
              style={{
                maxWidth: '56rem',
                margin: '0 auto',
                padding: '7rem 0 5rem',
              }}
            >
              {eyebrow ? (
                <div className="margin-bottom margin-xsmall">
                  <div className="text-color-white text-style-nowrap text-weight-semibold text-color-primary">
                    {eyebrow}
                  </div>
                </div>
              ) : null}
              <div className="margin-bottom margin-small">
                <h1 className="heading-style-h2">{title}</h1>
              </div>
              <div className="text-color-white">{children}</div>
              <div
                className="button-group"
                style={{ marginTop: '2rem', justifyContent: 'flex-start' }}
              >
                <Link to="/contact-us" className="button w-button">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
