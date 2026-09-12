import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PHONE_URL = 'tel:+919811045808'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `navbar3_link w-nav-link${isActive ? ' w--current' : ''}`
}

function DeliveryLinks({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose?: () => void
}) {
  return (
    <nav
      className={`dropdown-list w-dropdown-list${isOpen ? ' w--open' : ''}`}
      style={isOpen ? { display: 'block' } : undefined}
    >
      <a
        aria-label="Contact Zafran to place an order"
        href="#"
        data-frontend-action="delivery"
        onClick={onClose}
        className="dropdown-link w-inline-block"
      >
        <img
          src="/zomato_logo.png"
          style={{
            width: 60,
            height: 24,
            objectFit: 'contain',
            marginRight: 8,
          }}
          alt="Zomato"
        />
        <div>ZOMATO</div>
      </a>
      <a
        aria-label="Contact Zafran to place an order"
        href="#"
        data-frontend-action="delivery"
        onClick={onClose}
        className="dropdown-link w-inline-block"
      >
        <div className="icon-embed-xsmall w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--simple-icons"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 2.865v4.997c0 1.883 1.332 3.13 3.084 3.13a2.97 2.97 0 0 0 2.15-.877v.743h1.211V2.864H5.223v4.934c0 1.265-.87 2.12-1.995 2.122c-1.139-.002-1.997-.834-1.997-2.122V2.865zm7.363 0v7.993h1.162v-.732a3 3 0 0 0 2.118.876a3.044 3.044 0 1 0 0-6.086a2.97 2.97 0 0 0-2.107.876V2.865zm9.885 2.056a3.02 3.02 0 0 0-3.035 3.024c0 1.737 1.373 3.037 3.153 3.037a3.12 3.12 0 0 0 2.558-1.243l-.85-.618a2.05 2.05 0 0 1-1.708.858a1.97 1.97 0 0 1-1.97-1.655h4.817v-.379c0-1.734-1.254-3.024-2.964-3.024zm6.163.066a1.6 1.6 0 0 0-1.376.766v-.719h-1.163v5.824h1.174V7.546c0-.902.559-1.484 1.327-1.484h.495V4.989zm-6.203.944a1.844 1.844 0 0 1 1.834 1.486h-3.618a1.844 1.844 0 0 1 1.784-1.486m-6.659.006a2.021 2.021 0 1 1 .002 4.042a2.02 2.02 0 0 1-1.416-.598a2.02 2.02 0 0 1-.585-1.422a2.02 2.02 0 0 1 .584-1.422a2.02 2.02 0 0 1 1.415-.6M0 12.987v7.971h5.722v-1.367H1.546v-1.97H5.61v-1.315H1.545v-1.955h4.176v-1.365zm14.56.41v1.685h-1.15v1.338h1.154v3.143c0 .793.572 1.421 1.6 1.421h1.643l-.006-1.338H16.66c-.348 0-.572-.15-.572-.464v-2.768H17.8v-1.332h-1.706v-1.686zm-5.297 1.527a3.103 3.103 0 1 0 .07 6.205a3 3 0 0 0 1.913-.666v.532h1.517v-5.913h-1.509v.526a3 3 0 0 0-1.92-.684zm11.771.007c-1.585 0-2.7.644-2.7 1.886c0 .86.613 1.421 1.936 1.695l1.448.328c.57.11.722.259.722.49c0 .371-.438.603-1.127.603c-.876 0-1.378-.19-1.573-.848h-1.533c.22 1.231 1.157 2.05 3.049 2.05h.002c1.752 0 2.742-.819 2.742-1.953c0-.806-.585-1.408-1.809-1.667l-1.294-.26c-.751-.136-.988-.274-.988-.546c0-.357.361-.575 1.03-.575c.722 0 1.252.192 1.405.847h1.518c-.086-1.229-.99-2.05-2.827-2.05m-11.567 1.25c1.01.01 1.819.837 1.807 1.847A1.8 1.8 0 0 1 9.45 19.83a1.824 1.824 0 0 1 .018-3.648"
            />
          </svg>
        </div>
        <div>UBER&nbsp;EATS</div>
      </a>
      <Link
        to="/contact-us"
        onClick={onClose}
        className="dropdown-link w-inline-block"
      >
        <div>DINE&nbsp;IN&nbsp;Delhi</div>
      </Link>
      <a
        aria-label="Contact Zafran to place an order"
        href="#"
        data-frontend-action="delivery"
        onClick={onClose}
        className="dropdown-link w-inline-block"
      >
        <img
          src="/swiggy_logo.png"
          style={{
            width: 24,
            height: 24,
            objectFit: 'contain',
            marginRight: 8,
          }}
          alt="Swiggy"
        />
        <div>SWIGGY</div>
      </a>
    </nav>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isHamburgerDropdownOpen, setIsHamburgerDropdownOpen] = useState(false)
  const location = useLocation()

  const [prevPathname, setPrevPathname] = useState(location.pathname)

  // Reset menu and dropdowns during render when route changes
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname)
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsHamburgerDropdownOpen(false)
  }

  const closeAll = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsHamburgerDropdownOpen(false)
  }

  return (
    <div>
      <div
        data-animation="over-left"
        className="navbar3_component w-nav"
        data-easing2="ease"
        data-fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="dda6f055-9afd-5853-65cd-0f2a665fca0f"
        role="banner"
        data-duration={400}
      >
        <div className="navbar3_container">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className={`navbar3_menu-button w-nav-button${isMenuOpen ? ' w--open' : ''}`}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div className="menu-icon3">
              <div className="menu-icon3_line-top" />
              <div className="menu-icon3_line-middle" />
              <div className="menu-icon3_line-bottom" />
            </div>
          </button>
          <nav
            role="navigation"
            className={`navbar3_menu w-nav-menu${isMenuOpen ? ' w--open' : ''}`}
            data-nav-menu-open={isMenuOpen ? '' : undefined}
          >
            <Link
              to="/"
              onClick={closeAll}
              className="navbar3_logo-link-menu w-nav-brand"
            >
              <img
                loading="eager"
                src="/zafran-logo.png"
                alt="Zafran logo"
                className="navbar3_logo"
              />
            </Link>
            <NavLink to="/" end className={navLinkClass} onClick={closeAll}>
              Home
            </NavLink>
            <NavLink to="/about-us" className={navLinkClass} onClick={closeAll}>
              About Us
            </NavLink>
            <NavLink to="/catering" className={navLinkClass} onClick={closeAll}>
              Catering
            </NavLink>
            <NavLink
              to="/private-events"
              className={navLinkClass}
              onClick={closeAll}
            >
              Private Events
            </NavLink>
            <NavLink
              to="/contact-us"
              className={navLinkClass}
              onClick={closeAll}
            >
              Contact Us
            </NavLink>
            <div className="nav-buttons hamburger">
              <a
                href={PHONE_URL}
                className="button-2 is-navbar3-button is-secondary hide w-button"
              >
                reservations
              </a>
              <div
                data-hover="true"
                data-delay={0}
                className={`dropdown-button w-dropdown${isHamburgerDropdownOpen ? ' w--open' : ''}`}
                onMouseEnter={() => setIsHamburgerDropdownOpen(true)}
                onMouseLeave={() => setIsHamburgerDropdownOpen(false)}
              >
                <div
                  className={`dropdown-toggle w-dropdown-toggle${isHamburgerDropdownOpen ? ' w--open' : ''}`}
                  onClick={() => setIsHamburgerDropdownOpen((prev) => !prev)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="icon w-icon-dropdown-toggle" />
                  <div>DELIVERY</div>
                </div>
                <DeliveryLinks
                  isOpen={isHamburgerDropdownOpen}
                  onClose={closeAll}
                />
              </div>
              <a
                href="#"
                data-frontend-action="order"
                className="button-2 is-navbar3-button w-button"
              >
                ORDER&nbsp;NOW
              </a>
            </div>
          </nav>
          <Link
            to="/"
            role="button"
            className="navbar3_logo-link w-nav-brand"
            onClick={closeAll}
          >
            <img
              data-w-id="dda6f055-9afd-5853-65cd-0f2a665fca24"
              loading="lazy"
              alt="Zafran logo"
              src="/zafran-logo.png"
              className="navbar3_logo"
            />
          </Link>
          <div
            id="w-node-dda6f055-9afd-5853-65cd-0f2a665fca25-665fca0f"
            className="nav-buttons"
          >
            <a
              href={PHONE_URL}
              className="button-2 is-navbar3-button is-secondary hide w-button"
            >
              reservations
            </a>
            <div
              data-hover="true"
              data-delay={0}
              className={`dropdown-button w-dropdown${isDropdownOpen ? ' w--open' : ''}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                className={`dropdown-toggle w-dropdown-toggle${isDropdownOpen ? ' w--open' : ''}`}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                role="button"
                tabIndex={0}
              >
                <div className="icon w-icon-dropdown-toggle" />
                <div>DELIVERY</div>
              </div>
              <DeliveryLinks isOpen={isDropdownOpen} onClose={closeAll} />
            </div>
            <a
              href="#"
              data-frontend-action="order"
              className="button-2 is-navbar3-button w-button"
            >
              ORDER&nbsp;NOW
            </a>
          </div>
          <div
            className={`navbar3_menu-background${isMenuOpen ? ' w--open' : ''}`}
            style={isMenuOpen ? { display: 'block' } : undefined}
            onClick={closeAll}
          />
        </div>
      </div>
    </div>
  )
}
