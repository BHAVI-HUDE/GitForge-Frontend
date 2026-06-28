const RepoFileList = ({
  items,
  onItemClick,
  onDeleteItem,
  canEdit,
}) => {

  if (!items.length) {
    return (
      <div className="repo-empty">

        <div className="repo-empty-icon">
          📂
        </div>

        <h3>This folder is empty</h3>

        <p>
          Create a file or upload one to begin.
        </p>

      </div>
    );
  }

  return (
    <div className="repo-files">

      {items.map((item) => (

        <div
          key={item.name}
          className="repo-file-row"
        >

          <div
            className="file-info"
            onClick={() => onItemClick(item)}
          >

            <span className="file-icon">

              {item.type === "folder"
                ? "📁"
                : "📄"}

            </span>

            <span className="file-name">
              {item.name}
            </span>

          </div>

          <div className="file-actions">

            <span className="file-last-update">
              {item.lastCommit || "Recently"}
            </span>

            {canEdit && (

              <button
                className="danger"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteItem(item);
                }}
              >
                Delete
              </button>

            )}

          </div>

        </div>

      ))}

    </div>
  );
};

export default RepoFileList;