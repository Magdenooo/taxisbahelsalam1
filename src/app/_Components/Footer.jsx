"use client"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>Mohammed Tahous Nasser Bin Tahous ST</p>
            <p>Sabah El-Salem</p>
            <p>Mubark El_Kaber</p>
            <p>Phone: 99974240</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <ul>
              <li>
                <Link href="#" className="hover:text-gray-600">
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;