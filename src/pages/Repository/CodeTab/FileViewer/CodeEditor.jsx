import Editor from "@monaco-editor/react";

function CodeEditor() {
    return (
        <Editor
            height="80vh"
            defaultLanguage="java"
            defaultValue="// Hello GitForge"
            theme="vs-dark"
        />
    );
}

export default CodeEditor;