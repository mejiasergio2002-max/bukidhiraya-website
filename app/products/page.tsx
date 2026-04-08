import { ArrowRight, ShoppingBag, TrendingUp, Globe, Briefcase, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      title: 'Coconut',
      description: 'Premium quality whole coconuts sourced from sustainable farms. Our coconuts are known for their size, juice quality, and thick meat.',
      potential: 'Ideal for industrial food processing, retail distribution, and direct export. High demand in global culinary and health sectors.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1550147760-44c9966d6bc7?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Coconut Copra',
      description: 'Dried coconut meat produced through controlled dehydration processes. We ensure low moisture content and high oil yield.',
      potential: 'Essential raw material for coconut oil production, cosmetics, and biodiesel industries. Reliable supply for large-scale processors.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Coconut Husks',
      description: 'Processed and raw coconut husks, available in various forms including fiber, chips, and dust (cocopeat).',
      potential: 'High demand in the horticultural industry for potting mixes, erosion control, and sustainable manufacturing materials.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1590779033100-9f60702a053b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Crab Farming',
      description: 'Professionally managed crab production focusing on high-quality species like mud crabs. We support sustainable aquaculture practices.',
      potential: 'Supplying premium seafood markets, restaurants, and international distributors. Focus on size, meat quality, and survival rates.',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Other Agri Products',
      description: 'A curated selection of high-quality agricultural commodities including seasonal fruits, grains, and specialty crops.',
      potential: 'Flexible supply chains and market-responsive product sourcing for diverse industrial and consumer needs.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-stone-100 py-20">
        <div className="section-container">
          <h1 className="heading-1 mb-6">Our Products</h1>
          <p className="body-text max-w-2xl">
            We offer a diverse range of premium agricultural products, each meticulously sourced and processed to meet international quality standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-12 md:py-20">
        <div className="section-container">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={product.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-emerald-700">
                    <product.icon className="h-8 w-8" />
                  </div>
                  <h2 className="heading-2">{product.title}</h2>
                  <p className="body-text mb-6">
                    {product.description}
                  </p>
                  <div className="bg-stone-50 border-l-4 border-emerald-700 p-6 rounded-r-xl mb-8">
                    <h3 className="font-bold text-stone-900 mb-2">Business & Supply Potential</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {product.potential}
                    </p>
                  </div>
                  <Link href="/contact" className="btn-primary">
                    Inquire for Supply
                  </Link>
                </div>
                <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-stone-50 border-t border-stone-200 py-20">
        <div className="section-container text-center">
          <h2 className="heading-2">Custom Product Inquiries</h2>
          <p className="body-text max-w-2xl mx-auto mb-10">
            Need something specific that isn&apos;t listed here? We specialize in sourcing and developing agricultural products tailored to your business needs.
          </p>
          <Link href="/contact" className="btn-secondary flex-inline items-center">
            Speak to Our Product Team <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
