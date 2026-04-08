import { Target, Eye, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Quality Assurance', description: 'We maintain the highest standards in all our agricultural products and services.', icon: Award },
    { title: 'Sustainable Growth', description: 'Focusing on long-term ecological and business sustainability.', icon: Target },
    { title: 'Community Support', description: 'Empowering local farmers and agricultural communities through fair trade.', icon: Users },
    { title: 'Innovation', description: 'Applying modern techniques to traditional agricultural processes.', icon: Eye },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-stone-100 py-20">
        <div className="section-container">
          <h1 className="heading-1 mb-6">About Us</h1>
          <p className="body-text max-w-2xl">
            Bukidharaya Trading Ltd Services is a leader in agricultural business development, dedicated to creating and supporting ventures that thrive.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000&auto=format&fit=crop" 
                alt="Agricultural landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="heading-2">Our Background</h2>
            <p className="body-text mb-6">
              Founded with a passion for agriculture and business, Bukidharaya Trading Ltd Services has grown into a versatile trading and services hub. We recognized early on that the gap between rural production and urban/global markets could be bridged through professional management and strategic product development.
            </p>
            <p className="body-text">
              Today, we specialize in a wide range of agricultural products, from coconut derivatives to sustainable crab farming. Our role is to create the infrastructure and support systems that allow these businesses to scale and succeed in competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-emerald-900 text-white py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-emerald-800/50 p-10 rounded-3xl border border-emerald-700">
              <div className="bg-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-emerald-50 text-lg leading-relaxed">
                To empower agricultural businesses through innovative trading solutions, sustainable product development, and comprehensive support services that create value for both producers and consumers.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-10 rounded-3xl border border-emerald-700">
              <div className="bg-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-emerald-50 text-lg leading-relaxed">
                To be the leading catalyst for agricultural transformation, recognized globally for our commitment to quality, sustainability, and the professionalization of agricultural trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2">Our Core Values</h2>
            <p className="body-text max-w-2xl mx-auto">
              These principles guide every decision we make and every partnership we form.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="bg-stone-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-700">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Support Focus */}
      <section className="bg-stone-50">
        <div className="section-container text-center">
          <h2 className="heading-2">Creating & Supporting Businesses</h2>
          <p className="body-text max-w-3xl mx-auto mb-10">
            We don&apos;t just trade products; we build the businesses behind them. Our comprehensive approach ensures that agricultural ventures have the technical, financial, and strategic support they need to thrive in today&apos;s economy.
          </p>
          <div className="inline-flex items-center space-x-2 text-emerald-700 font-bold text-lg">
            <span>Building the future of agriculture, together.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
