function StatsCard({ title, value }) {
  return (
    <div className="stats-card">
      <p className="stats-title">{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default StatsCard;