import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-emerald-700" />
              <span className="font-bold text-lg text-stone-900 tracking-tight">
                Bukidharaya <span className="text-emerald-700">Trading</span>
              </span>
            </Link>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
              Bukidharaya Trading Ltd Services is a trading and services company that creates and supports businesses for agricultural products and related industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-stone-900 font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-stone-600 hover:text-emerald-700 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-stone-600 hover:text-emerald-700 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-stone-600 hover:text-emerald-700 transition-colors">Our Products</Link></li>
              <li><Link href="/services" className="text-stone-600 hover:text-emerald-700 transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-stone-900 font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-stone-600 hover:text-emerald-700 transition-colors">Sourcing</Link></li>
              <li><Link href="/services" className="text-stone-600 hover:text-emerald-700 transition-colors">Trading</Link></li>
              <li><Link href="/services" className="text-stone-600 hover:text-emerald-700 transition-colors">Product Development</Link></li>
              <li><Link href="/services" className="text-stone-600 hover:text-emerald-700 transition-colors">Business Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-stone-900 font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-700" />
                <span className="text-stone-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-700" />
                <span className="text-stone-600 text-sm">info@bukidharaya.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-700" />
                <span className="text-stone-600 text-sm">123 Business Avenue, Suite 100, City Name</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-sm">
            © {currentYear} Bukidharaya Trading Ltd Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
