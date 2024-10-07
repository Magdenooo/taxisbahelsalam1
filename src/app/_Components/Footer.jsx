"use client"
import Link from 'next/link';

const Footer = () => {
  return (
    <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <h2 className="text-2xl font-semibold p-6 bg-yellow-400 text-yellow-900">موقعنا</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.5636338376745!2d48.07430871507567!3d29.257388282150305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE1JzI2LjYiTiA0OMKwMDQnMzUuNSJF!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
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
    </>

  );
};

export default Footer;