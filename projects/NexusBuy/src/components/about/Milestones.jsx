const Stat = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold mb-2">{number}</div>
    <div className="text-sm md:text-base opacity-90">{label}</div>
  </div>
);

const Milestones = () => (
  <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat number="10K+" label="Happy Customers" />
        <Stat number="500+" label="Products Available" />
        <Stat number="50+" label="Brand Partners" />
        <Stat number="24/7" label="Customer Support" />
      </div>
    </div>
  </section>
);

export default Milestones;
