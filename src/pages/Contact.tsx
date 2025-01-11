const Contact = () => {
  return (
    <div className="bg-[#231F20] text-white min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Reach Out To Us Today</h1>
      <p className="text-center max-w-lg mb-8">
        Want to get in touch with us? Feel free to send an email, give us a call, 
        or reach out to us on our social media platforms below.
      </p>

      {/* Contact Info Section */}
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Email Us</h2>
          <p className="text-gray-300">contact@uplift11sports.com</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p className="text-gray-300">+234 812 345 6789</p>
          <p className="text-gray-300">+90 530 123 4567</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-6 mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.243 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.243 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.243-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.243-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.797 0 8.353.015 7.052.072 5.757.13 4.6.371 3.604 1.367 2.607 2.364 2.366 3.522 2.308 4.817.015 8.353 0 8.797 0 12c0 3.204.015 3.646.072 4.948.058 1.296.3 2.453 1.296 3.449s2.152 1.238 3.448 1.296C8.353 23.985 8.797 24 12 24s3.646-.015 4.948-.072c1.296-.058 2.453-.3 3.449-1.296s1.238-2.152 1.296-3.448C23.985 15.646 24 15.204 24 12c0-3.204-.015-3.646-.072-4.948-.058-1.296-.3-2.453-1.296-3.449s-2.152-1.238-3.448-1.296C15.646.015 15.204 0 12 0z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.91 9.91 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.388 4.482c-4.09-.205-7.72-2.166-10.148-5.144a4.822 4.822 0 0 0-.665 2.475 4.92 4.92 0 0 0 2.19 4.1 4.898 4.898 0 0 1-2.23-.616v.061a4.92 4.92 0 0 0 3.946 4.827 4.934 4.934 0 0 1-2.224.084 4.92 4.92 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.512 14.01-14.009 0-.213-.005-.426-.014-.637A10.01 10.01 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="mailto:contact@uplift11sports.com"
              className="text-gray-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
