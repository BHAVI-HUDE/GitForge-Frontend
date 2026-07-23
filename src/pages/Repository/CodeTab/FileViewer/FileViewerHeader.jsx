import { FiEdit2, FiFile } from "react-icons/fi";

function FileViewerHeader({ file, fileType, onEdit }) {
  return (
    <div className="file-viewer-header">
      <div className="file-viewer-info">
        <FiFile className="file-icon" />

        <div>
          <h3>{file.name}</h3>
          <span>{fileType}</span>
        </div>
      </div>

      <button className="edit-btn" onClick={onEdit}>
        <FiEdit2 />
        Edit
      </button>
    </div>
  );
}

export default FileViewerHeader;