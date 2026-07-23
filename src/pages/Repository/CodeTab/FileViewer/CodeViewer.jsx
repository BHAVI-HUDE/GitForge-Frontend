import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import FileViewerHeader from "./FileViewerHeader";
import getLanguage from "../../../../utils/getLanguage";

function CodeViewer({ file }) {
  if (!file) return null;

  const language = getLanguage(file.name);

  return (
    <div className="file-viewer">
      <FileViewerHeader
        file={file}
        fileType={language.toUpperCase()}
        onEdit={() => {}}
      />

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          borderRadius: 0,
          minHeight: "500px",
          fontSize: "14px",
        }}
      >
        {file.content || ""}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeViewer;