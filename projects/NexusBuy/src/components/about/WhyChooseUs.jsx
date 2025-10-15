const Feature = ({ icon, title, text }) => (
  <div className="text-center p-6">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const WhyChooseUs = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose NEXUSBUY?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Feature
          icon="🚚"
          title="Fast Shipping"
          text="Free delivery on orders over $50"
        />
        <Feature
          icon="↩️"
          title="Easy Returns"
          text="30-day hassle-free return policy"
        />
        <Feature
          icon="🔒"
          title="Secure Payment"
          text="100% safe and encrypted transactions"
        />
        <Feature
          icon="⭐"
          title="Quality Guarantee"
          text="Premium products with warranty"
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
