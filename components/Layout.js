export default function Layout({ children, home }) {
  return (
    <>
      <header
        className="govuk-header "
        role="banner"
        data-module="govuk-header"
      >
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a
              href="/lost-stolen-recovered/records"
              className="govuk-header__link govuk-header__link--homepage"
            >
              <span className="govuk-header__product-name">
                HM Passport Office
              </span>
            </a>
          </div>
          <div className="govuk-header__content">
            <a
              href="/"
              className="govuk-header__link govuk-header__link--service-name"
            >
              LSR
            </a>
            <button
              type="button"
              className="govuk-header__menu-button govuk-js-header-toggle"
              aria-controls="navigation"
              aria-label="Show or hide navigation menu"
              aria-expanded="false"
            >
              Menu
            </button>
            <nav>
              <ul
                id="navigation"
                className="govuk-header__navigation govuk-header__navigation--end"
                aria-label="Navigation menu"
              >
                <li className="govuk-header__navigation-item">
                  <a
                    href="/lost-stolen-recovered/account"
                    className="govuk-header__link "
                  >
                    Roger Recovered
                  </a>
                </li>
                <li className="govuk-header__navigation-item">
                  <a
                    href="/lost-stolen-recovered/log-out"
                    className="govuk-header__link "
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="govuk-width-container ">
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
