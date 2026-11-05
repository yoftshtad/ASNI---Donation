import './Stats.css';

const stats = [
  { number: '500+', label: 'Students Sponsored' },
  { number: '12', label: 'Schools Supported' },
  { number: '100%', label: 'Donation Transparency' },
  { number: '2015', label: 'Year Founded' },
];

function Stats() {
  return (
    <section className="stats-wrapper">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;