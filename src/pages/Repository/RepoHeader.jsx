const RepoHeader = ({
  repo,
  ownerName,
  isOwner,
  activeTab,
  onAddFile,
  onAddFolder,
  onUploadFiles,
  onToggleVisibility,
  onDeleteRepository,
}) => {
  if (!repo) return null;

  return (
    <div className="repo-header">
      <div className="repo-title">
        <div>
          <h2>{repo.name}</h2>
          <p className="repo-owner">
            Owner: {ownerName}
          </p>
        </div>
        <span className="repo-visibility">
          {repo.isPrivate ? "Private" : "Public"}
        </span>
      </div>
    </div>
  );
};

export default RepoHeader;
