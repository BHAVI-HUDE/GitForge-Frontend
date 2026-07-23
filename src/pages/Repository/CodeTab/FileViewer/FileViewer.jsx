import { useState } from "react";

import CodeViewer from "./CodeViewer";
import CodeEditor from "./CodeEditor";
import MarkdownViewer from "./MarkdownViewer";
import ImageViewer from "./ImageViewer";
import PdfViewer from "./PdfViewer";
import UnknownViewer from "./UnknownViewer";

function FileViewer({ file }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!file) return null;

  console.log("FileViewer received:", file);

  const extension = file.name.split(".").pop().toLowerCase();

  const codeExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx",
    "css",
    "html",
    "json",
    "xml",
    "txt",
    "java",
    "cpp",
    "c",
    "py",
    "php",
    "go",
    "rs",
    "sql",
    "env",
  ];

  const imageExtensions = [
    "png",
    "jpg",
    "jpeg",
    "gif",
    "svg",
    "webp",
  ];

  if (extension === "md") {
    return <MarkdownViewer file={file} />;
  }

  if (imageExtensions.includes(extension)) {
    return <ImageViewer file={file} />;
  }

  if (extension === "pdf") {
    return <PdfViewer file={file} />;
  }

  if (codeExtensions.includes(extension)) {
    if (isEditing) {
      return (
        <CodeEditor
          file={file}
          onCancel={() => setIsEditing(false)}
        />
      );
    }

    return (
      <CodeViewer
        file={file}
        onEdit={() => setIsEditing(true)}
      />
    );
  }

  return <UnknownViewer file={file} />;
}

export default FileViewer;