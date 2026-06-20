import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#002C60] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-base mb-3">Filters</h3>
            <div className="flex gap-4 text-sm text-gray-300">
              <Link href="/?category=All" className="hover:text-white">
                All
              </Link>
              <Link href="/?category=Electronics" className="hover:text-white">
                Electronics
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">About Us</h3>
            <ul className="space-y-1.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-white" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 text-sm text-gray-400">
          © 2024 American
        </div>
      </div>
    </footer>
  );
}
