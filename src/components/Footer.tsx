import { Link } from 'react-router-dom'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi+110001'

export default function Footer() {
  return (
    <>
      <div>
        <footer role="contentinfo" className="footer4_component">
          <div className="padding-global">
            <div className="container-large">
              <div className="w-layout-grid footer4_top-wrapper">
                <div className="w-layout-grid footer4_link-list">
                  <div className="w-layout-vflex footer-row">
                    <div className="text-color-white text-style-nowrap">
                      <span className="text_sub">LOCATION</span>
                    </div>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="footer4_link"
                    >
                      Connaught Place, New Delhi, Delhi 110001
                    </a>
                  </div>
                  <div className="w-layout-vflex footer-row">
                    <div className="text-color-white text-style-nowrap">
                      <span className="text_sub">PHONE</span>
                    </div>
                    <a href="tel:+919811045808" className="footer4_link">
                      +91 98110 45808
                    </a>
                  </div>
                  <div className="w-layout-vflex footer-row">
                    <div className="text-color-white text-style-nowrap">
                      <span className="text_sub">EMAIL</span>
                    </div>
                    <a
                      href="mailto:teamzafran@zafranrestaurant.com"
                      className="footer4_link"
                    >
                      teamzafran@zafranrestaurant.com
                    </a>
                  </div>
                </div>
                <div className="w-layout-grid footer4_social-list">
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                          fill="CurrentColor"
                        />
                      </svg>
                    </div>
                    <div className="link-text">Facebook</div>
                  </a>
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                          fill="CurrentColor"
                        />
                      </svg>
                    </div>
                    <div className="link-text">Instagram</div>
                  </a>
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                          fill="CurrentColor"
                        />
                      </svg>
                    </div>
                    <div className="link-text">X (formerly Twitter)</div>
                  </a>
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
                          fill="CurrentColor"
                        />
                      </svg>
                    </div>
                    <div className="link-text">Youtube</div>
                  </a>
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--carbon"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m8.509 15.185l5.06 2.467c.973.475.823 1.906-.228 2.168l-5.462 1.362c-.681.17-1.354-.3-1.434-.998a10 10 0 0 1 .456-4.33a1.16 1.16 0 0 1 1.608-.67M10.535 25.6l3.766-4.183c.724-.805 2.059-.265 2.02.817l-.196 5.627a1.16 1.16 0 0 1-1.353 1.104a10.1 10.1 0 0 1-4.033-1.632a1.16 1.16 0 0 1-.204-1.733m8.929-5.566l5.353 1.74c.666.216.991.97.69 1.602a10.1 10.1 0 0 1-2.677 3.43a1.16 1.16 0 0 1-1.724-.28l-2.984-4.775c-.574-.918.312-2.052 1.342-1.717m5.444-3.415l-5.411 1.552c-1.041.298-1.887-.866-1.282-1.764l3.149-4.667a1.16 1.16 0 0 1 1.727-.224a10 10 0 0 1 2.56 3.522a1.162 1.162 0 0 1-.743 1.581M12.264 3.489c-.974.26-1.903.605-2.782 1.024A1.16 1.16 0 0 0 8.98 6.14l5.289 9.16c.593 1.028 2.164.607 2.164-.58V4.143a1.16 1.16 0 0 0-1.248-1.158c-.97.077-1.947.243-2.921.504"
                        />
                      </svg>
                    </div>
                    <div className="link-text">Yelp</div>
                  </a>
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--carbon"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M16 2a14 14 0 0 0-5.1 27a13.2 13.2 0 0 1 0-4l1.65-7a5.05 5.05 0 0 1-.38-2c0-1.94 1.13-3.4 2.53-3.4a1.76 1.76 0 0 1 1.77 2c0 1.2-.76 3-1.16 4.66a2 2 0 0 0 2.08 2.53c2.48 0 4.4-2.63 4.4-6.41a5.53 5.53 0 0 0-5.85-5.7a6.06 6.06 0 0 0-6.32 6.08a5.42 5.42 0 0 0 1 3.19a.44.44 0 0 1 .1.4c-.11.44-.35 1.4-.39 1.59s-.21.31-.47.19c-1.75-.82-2.84-3.37-2.84-5.43c0-4.41 3.21-8.47 9.25-8.47c4.85 0 8.63 3.46 8.63 8.09c0 4.82-3 8.7-7.27 8.7a3.76 3.76 0 0 1-3.21-1.6l-.87 3.33a15.6 15.6 0 0 1-1.74 3.67A14.2 14.2 0 0 0 16 30a14 14 0 0 0 0-28"
                        />
                      </svg>
                    </div>
                    <div className="link-text">Pintrest</div>
                  </a>
                  <a href="#" className="footer4_social-link w-inline-block">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--tabler"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 3h10c.644 0 1.11.696.978 1.33l-1.984 9.859a1.014 1.014 0 0 1-1 .811H12.74c-.308 0-.6.141-.793.382l-4.144 5.25c-.599.752-1.809.331-1.809-.632V4c0-.564.44-1 1-1zm5 6h5"
                        />
                      </svg>
                    </div>
                    <div className="link-text">Foursquare</div>
                  </a>
                </div>
              </div>
              <div className="divider-horizontal" />
              <div className="w-layout-grid footer4_bottom-wrapper">
                <div
                  id="w-node-_8339bafa-a90b-c5b6-88ba-4ef0ec0bd84f-d97ac15d"
                  className="footer-links-left"
                >
                  <div className="footer4_credit-text">
                    © 2025 Zafran. All rights reserved.
                  </div>
                  <Link
                    aria-label="see privacy policy"
                    to="/privacy-policy"
                    className="footer4_legal-link"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    aria-label="see terms of service"
                    to="/terms-and-conditions"
                    className="footer4_legal-link"
                  >
                    Terms of Service
                  </Link>
                </div>
                <a
                  aria-label="visit developer github profile"
                  href="https://github.com/harshitttt077"
                  target="_blank"
                  rel="noreferrer"
                  className="agency-credit"
                >
                  SITE BY HARSHIT | MADE WITH FRAMER
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
