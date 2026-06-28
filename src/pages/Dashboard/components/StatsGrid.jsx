import StatsCard from "./StatsCard";

function StatsGrid({ repoCount }) {
  return (
    <section className="stats-grid">
      <StatsCard
        title="Repositories"
        value={repoCount}
      />

      <StatsCard
        title="Issues"
        value="0"
      />

      <StatsCard
        title="Files"
        value="0"
      />

      <StatsCard
        title="Storage"
        value="0 MB"
      />
    </section>
  );
}

export default StatsGrid;