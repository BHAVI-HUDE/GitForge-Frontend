import "./PdfViewer.css";

export default function PdfViewer({ file }) {
  return (
    <div className="pdf-viewer-container">
      <iframe
        src={file.url}
        title={file.name}
        className="pdf-viewer"
      />
    </div>
  );
}