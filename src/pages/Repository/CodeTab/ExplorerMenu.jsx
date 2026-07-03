import {
  FiMoreVertical,
  FiEdit,
  FiDownload,
  FiTrash2,
  FiCopy,
  FiInfo,
  FiFolder,
} from "react-icons/fi";

import DropdownMenu from "../../../components/ui/DropdownMenu";

function ExplorerMenu({
  item,
  canEdit,
  onDelete,
}) {
  return (
    <DropdownMenu
      icon={<FiMoreVertical />}
      iconOnly
      className="explorer-menu"
    >
      <button
        className="dropdown-item"
        onClick={() => console.log("Open")}
      >
        <FiFolder />
        <span>Open</span>
      </button>

      <button
        className="dropdown-item"
        onClick={() => console.log("Copy Path")}
      >
        <FiCopy />
        <span>Copy Path</span>
      </button>

      <button
        className="dropdown-item"
        onClick={() => console.log("Download")}
      >
        <FiDownload />
        <span>Download</span>
      </button>

      <button
        className="dropdown-item"
        onClick={() => console.log("Properties")}
      >
        <FiInfo />
        <span>Properties</span>
      </button>

      {canEdit && (
        <>
          <div className="dropdown-divider" />

          <button
            className="dropdown-item"
            onClick={() => console.log("Rename")}
          >
            <FiEdit />
            <span>Rename</span>
          </button>

          <button
            className="dropdown-item"
            onClick={() => onDelete(item)}
          >
            <FiTrash2 />
            <span>Delete</span>
          </button>
        </>
      )}
    </DropdownMenu>
  );
}

export default ExplorerMenu;