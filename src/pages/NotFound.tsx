import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="main-wrapper">
      <section className="section_layout1">
        <div className="padding-global">
          <div className="container-large">
            <div
              style={{
                minHeight: '60vh',
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center',
              }}
            >
              <div style={{ maxWidth: '36rem' }}>
                <div className="margin-bottom margin-xsmall">
                  <div className="text-color-white text-style-nowrap text-weight-semibold text-color-primary">
                    404
                  </div>
                </div>
                <div className="margin-bottom margin-small">
                  <h1 className="heading-style-h2">Page not found</h1>
                </div>
                <p className="text-color-white">
                  The page you were looking for is not available in this
                  frontend-only build.
                </p>
                <div
                  className="button-group"
                  style={{ marginTop: '2rem', justifyContent: 'center' }}
                >
                  <Link to="/" className="button w-button">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
