function RepoStats({ items = [], issues = [], repo }) {
  const files = items.filter(i => i.type === "file").length;
  const folders = items.filter(i => i.type === "folder").length;

  return (
    <div className="repo-stats">

      <div className="repo-stat-card">
        <span className="repo-stat-value">{files}</span>
        <span className="repo-stat-label">Files</span>
      </div>

      <div className="repo-stat-card">
        <span className="repo-stat-value">{folders}</span>
        <span className="repo-stat-label">Folders</span>
      </div>

      <div className="repo-stat-card">
        <span className="repo-stat-value">{issues.length}</span>
        <span className="repo-stat-label">Issues</span>
      </div>

      <div className="repo-stat-card">
        <span className="repo-stat-value">
          {repo.isPrivate ? "Private" : "Public"}
        </span>
        <span className="repo-stat-label">Visibility</span>
      </div>

    </div>
  );
}

export default RepoStats;