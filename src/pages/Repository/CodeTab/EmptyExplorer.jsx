import { FiFolderPlus, FiUpload } from "react-icons/fi";

function EmptyExplorer({
  canEdit,
  onAddFile,
  onUploadFiles,
}) {
  return (
    <div className="empty-explorer">

      <div className="empty-icon">
        <FiFolderPlus />
      </div>

      <h2 className="empty-title">
        This folder is empty
      </h2>

      <p className="empty-description">
        Start building your repository by creating a new file,
        creating a folder, or uploading an existing project.
      </p>

      {canEdit ? (
        <div className="empty-actions">

          <button
            className="primary-btn"
            onClick={onAddFile}
          >
            <FiFolderPlus />
            <span>Create File</span>
          </button>

          <button
            className="secondary-btn"
            onClick={onUploadFiles}
          >
            <FiUpload />
            <span>Upload Files</span>
          </button>

        </div>
      ) : (
        <p className="empty-note">
          You have read-only access to this repository.
        </p>
      )}

    </div>
  );
}

export default EmptyExplorer;