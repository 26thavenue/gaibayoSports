const Footer = () => {
  return (
    <div className="bg-[#231F20] py-8 px-12 w-full">
      <div className="bg-[#D3D3D3] w-full px-8 rounded-md py-12">
        {/* Logo and Title */}
        <div className="flex gap-3 items-center mb-8">
          <img
            src="/GAIBAYO_SPORT_LOGO__NEW__page-0001__1_-removebg-preview.png"
            alt="logo"
            className="h-[100px] w-[100px] object-cover"
          />
          <h1 className="text-2xl font-semibold">Gaibayo Sports</h1>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral-400 mb-8"></div>

        {/* Content: Links and Social Icons */}
        <div className="flex justify-between flex-wrap">
          {/* Links Section */}
          <div className="flex flex-col gap-2 text-lg">
            <a href="#about" className="hover:text-gray-700">About Us</a>
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#contact" className="hover:text-gray-700">Contact Us</a>
          </div>

          {/* Social Icons Section */}
          <div className="flex gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 2h-8.5A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:info@gaibayosports.com"
              className="hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M12 12.713 1.481 6.084C1.802 5.82 2.226 5.676 2.667 5.676h18.666c.441 0 .865.144 1.186.408L12 12.713zM22.332 7.58 12 13.815 1.668 7.58v8.744c0 .661.482 1.2 1.074 1.2h18.516c.592 0 1.074-.539 1.074-1.2V7.58z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M19.633 7.897c.014.202.014.404.014.607 0 6.185-4.709 13.317-13.317 13.317A13.251 13.251 0 0 1 0 19.212c.348.04.682.054 1.04.054a9.404 9.404 0 0 0 5.826-2.01 4.698 4.698 0 0 1-4.39-3.267c.304.04.608.067.926.067.435 0 .87-.054 1.276-.162a4.692 4.692 0 0 1-3.76-4.604v-.06a4.707 4.707 0 0 0 2.127.597 4.69 4.69 0 0 1-1.454-6.268 13.31 13.31 0 0 0 9.665 4.903 5.291 5.291 0 0 1-.115-1.074 4.692 4.692 0 0 1 8.117-3.207 9.266 9.266 0 0 0 2.981-1.14 4.683 4.683 0 0 1-2.063 2.586 9.335 9.335 0 0 0 2.694-.733 10.037 10.037 0 0 1-2.342 2.435z" />
              </svg>
            </a>

            {/* Phone */}
            <a href="tel:+1234567890" className="hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M6.62 10.79a15.565 15.565 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 .95-.26 11.58 11.58 0 0 0 3.62.58 1 1 0 0 1 1 1v3.58a1 1 0 0 1-1 1A16.93 16.93 0 0 1 2 6a1 1 0 0 1 1-1h3.58a1 1 0 0 1 1 1 11.58 11.58 0 0 0 .58 3.62 1 1 0 0 1-.26.95l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p>© 2025 Gaibayo Sports</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
