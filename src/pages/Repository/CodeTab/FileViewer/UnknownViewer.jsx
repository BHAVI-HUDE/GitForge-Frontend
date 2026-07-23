function UnknownViewer({ file }) {
  return (
    <div className="file-viewer">

      <h2>{file.name}</h2>

      <p>
        This file type cannot be previewed yet.
      </p>

    </div>
  );
}

export default UnknownViewer;