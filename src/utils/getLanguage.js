const languageMap = {
  js: "javascript",
  jsx: "jsx",
  ts: "typescript",
  tsx: "tsx",

  html: "html",
  css: "css",

  json: "json",

  md: "markdown",

  java: "java",

  c: "c",
  cpp: "cpp",

  py: "python",

  php: "php",

  go: "go",

  rs: "rust",

  sql: "sql",

  xml: "xml",

  txt: "text",
};

export default function getLanguage(filename) {
  const extension = filename.split(".").pop().toLowerCase();

  return languageMap[extension] || "text";
}