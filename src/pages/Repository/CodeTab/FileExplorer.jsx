import ExplorerHeader from "./ExplorerHeader";
import ExplorerRow from "./ExplorerRow";
import EmptyExplorer from "./EmptyExplorer";

function FileExplorer({
  items,
  onItemClick,
  onDeleteItem,
  canEdit,
}) {
  if (!items.length) {
    return <EmptyExplorer />;
  }

  return (
    <div className="repo-files">

      <ExplorerHeader />

      {items.map((item) => (
        <ExplorerRow
          key={item.name}
          item={item}
          onItemClick={onItemClick}
          onDeleteItem={onDeleteItem}
          canEdit={canEdit}
        />
      ))}

    </div>
  );
}

export default FileExplorer;