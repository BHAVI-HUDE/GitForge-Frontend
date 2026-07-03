import { FiFolder, FiFile, FiTrash2, FiMoreVertical } from "react-icons/fi";
import ExplorerMenu from "./ExplorerMenu";

function ExplorerRow({
  item,
  onItemClick,
  onDeleteItem,
  canEdit,
}) {

  return (

    <div className="explorer-row">

      {/* Name */}

      <div
        className="explorer-name"
        onClick={() => onItemClick(item)}
      >

        {item.type === "folder"
          ? <FiFolder />
          : <FiFile />
        }

        <span>{item.name}</span>

      </div>

      {/* Last Commit */}

      <div className="explorer-commit">

        {item.lastCommit || "Initial Commit"}

      </div>

      {/* Updated */}

      <div className="explorer-date">

        Today

      </div>

      {/* Actions */}

      <div className="explorer-actions">

    <ExplorerMenu
        item={item}
        canEdit={canEdit}
        onDelete={onDeleteItem}
    />

</div>

    </div>

  );

}

export default ExplorerRow;