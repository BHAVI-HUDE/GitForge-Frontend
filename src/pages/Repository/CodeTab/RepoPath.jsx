const RepoPath = ({ currentPath, onGoBack }) => {
  return (
    <div className="repo-breadcrumb">

      <div className="breadcrumb-left">

        {currentPath && (
          <button
            className="breadcrumb-back"
            onClick={onGoBack}
          >
            ←
          </button>
        )}

        <span className="breadcrumb-path">
          📁 {currentPath || "root"}
        </span>

      </div>

    </div>
  );
};

export default RepoPath;