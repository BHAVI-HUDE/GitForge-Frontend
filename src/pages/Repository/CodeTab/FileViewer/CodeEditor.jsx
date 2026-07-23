import { useState } from "react";
import Editor from "@monaco-editor/react";
import getLanguage from "../../../../utils/getLanguage";

function CodeEditor({ file, onCancel, updateFileContent }) {
  const [content, setContent] = useState(file.content || "");
  console.log(updateFileContent);
  const handleSave = async () => {
  try {
    await updateFileContent(file.path, content);

    alert("File saved successfully!");

    onCancel();
  } catch (err) {
    alert(err.message || "Failed to save file");
  }
};

  const language = getLanguage(file.name);

  return (
    <>
     <div style={{ marginBottom: "10px" }}>
      
  <button onClick={handleSave}>Save</button>

  <button
    onClick={onCancel}
    style={{ marginLeft: "10px" }}
  >
    Cancel
  </button>
</div>
      <Editor
        height="80vh"
        language={language}
        value={content}
        theme="vs-dark"
        onChange={(value) => setContent(value || "")}
      />
    </>
  );
}

export default CodeEditor;