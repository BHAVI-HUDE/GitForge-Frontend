function RepoStats({ items = [], issues = [], repo }) {
  const files = items.filter(i => i.type === "file").length;
  const folders = items.filter(i => i.type === "folder").length;

  return (
    <div className="repo-stats">

      <div className="repo-stat-card">
        <span className="repo-stat-label">Files : </span>
        <span className="repo-stat-value">{files}</span>
      </div>

      <div className="repo-stat-card">
        <span className="repo-stat-label">Folders : </span>
        <span className="repo-stat-value">{folders}</span>
        
      </div>

      <div className="repo-stat-card">
        <span className="repo-stat-label">Issues : </span>
        <span className="repo-stat-value">{issues.length}</span>
      </div>

      <div className="repo-stat-card">
        <span className="repo-stat-label">Visibility : </span>
        <span className="repo-stat-value">
          {repo.isPrivate ? "Private" : "Public"}
        </span>
      </div>

    </div>
  );
}

export default RepoStats;