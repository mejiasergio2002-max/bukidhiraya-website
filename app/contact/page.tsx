import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-stone-100 py-20">
        <div className="section-container">
          <h1 className="heading-1 mb-6">Contact Us</h1>
          <p className="body-text max-w-2xl">
            Have questions about our products or services? We&apos;re here to help you grow your agricultural business. Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-12 md:py-24">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-8 tracking-tight">Send Us an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-stone-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-stone-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-stone-700">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition-all bg-white"
                >
                  <option value="">Select a topic</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="service-inquiry">Service Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-stone-700">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full shadow-lg shadow-emerald-700/20 py-4"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="heading-2">Contact Information</h2>
              <p className="body-text mb-10">
                Our team is ready to assist you with any inquiries regarding our agricultural products, trading services, or partnership opportunities.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+1 (555) 123-4567</p>
                    <p className="text-stone-400 text-sm mt-1">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">info@bukidharaya.com</p>
                    <p className="text-stone-400 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Office Address</h3>
                    <p className="text-stone-600">123 Business Avenue, Suite 100</p>
                    <p className="text-stone-600">City Name, State, Country</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Global Presence</h3>
                    <p className="text-stone-600">Supplying products to markets across Southeast Asia and beyond.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-100 aspect-video rounded-3xl border border-stone-200 overflow-hidden relative flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-10 w-10 text-stone-400 mx-auto mb-4" />
                <p className="text-stone-500 font-medium">Interactive Map Placeholder</p>
                <p className="text-stone-400 text-sm mt-1">Visit our headquarters</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
                alt="Map representation" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-900 text-white py-20 text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Looking for a Partnership?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            We&apos;re always open to discussing new business opportunities and strategic agricultural ventures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:partnership@bukidharaya.com" className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors">
              Email Partnership Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
