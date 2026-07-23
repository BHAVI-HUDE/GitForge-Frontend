import RepoBreadcrumb from "./RepoBreadcrumb";
import FileExplorer from "./FileExplorer";
import FileViewer from "./FileViewer/FileViewer";

const CodeTab = ({
  items,
  currentPath,
  fileView,
  onItemClick,
  onDeleteItem,
  onGoBack,
   canEdit,
   handleAddFile,
   handleUploadFiles,
}) => {
  return (
    <div className="repository-content">

    <RepoBreadcrumb
        currentPath={currentPath}
        onGoBack={onGoBack}
    />

    {fileView ? (
        <FileViewer
            file={fileView}
        />
    ) : (
        <FileExplorer
            items={items}
            onItemClick={onItemClick}
            onDeleteItem={onDeleteItem}
            canEdit={canEdit}
            onAddFile={handleAddFile}
            onUploadFiles={handleUploadFiles}
        />
    )}

</div>
  );
};

export default CodeTab;
