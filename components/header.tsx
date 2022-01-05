import Link from 'next/link'

const Header = () => {
  return (
    <nav className="bg-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8"
                  src="https://cdn-eaoki.nitrocdn.com/IpMfDArfOdfAfriedYgHzeIcXKJqfxaG/assets/static/optimized/rev-f0da983/wp-content/uploads/2021/10/Favicon-V1.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-dark hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                    aria-current="page"
                  >
                    Charts
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
                  >
                    Tokens
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                
                
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/*
        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
      */}
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
      */}
                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-dark hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              aria-current="page"
            >
              Charts
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
            >
              Tokens
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md text-dark hover:bg-gray-700 hover:text-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
  )
}

export default Header
