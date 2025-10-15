const ValueCard = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurValues = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ValueCard
          icon="🚀"
          title="Innovation"
          description="Constantly evolving to bring you the latest trends and technologies"
        />
        <ValueCard
          icon="💎"
          title="Quality"
          description="Curating only the best products from trusted suppliers"
        />
        <ValueCard
          icon="🤝"
          title="Trust"
          description="Building lasting relationships through transparency and reliability"
        />
      </div>
    </div>
  </section>
);

export default OurValues;
