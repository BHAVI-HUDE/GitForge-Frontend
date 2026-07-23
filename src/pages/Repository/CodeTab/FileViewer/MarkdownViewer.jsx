function MarkdownViewer({ file }) {
  return (
    <div className="file-viewer">

      <div className="file-viewer-header">
        <h3>{file.name}</h3>
      </div>

      <pre className="file-content">
        {file.content}
      </pre>

    </div>
  );
}

export default MarkdownViewer;