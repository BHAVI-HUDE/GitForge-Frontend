import {
  FiGitBranch,
  FiUpload,
  FiDownload,
  FiSettings,
  FiFilePlus,
  FiFolderPlus,
  FiSearch,
} from "react-icons/fi";

import DropdownMenu from "../../components/ui/DropdownMenu";

function RepoToolbar({
  repo,
  isOwner,
  onAddFile,
  onAddFolder,
  onUploadFiles,
  onToggleVisibility,
  onDeleteRepository,
}) {
  return (
    <div className="repo-toolbar">

      {/* LEFT */}

      <div className="repo-toolbar-left">

        <DropdownMenu
          label="main"
          icon={<FiGitBranch />}
        >

          <button className="dropdown-item">
            main
          </button>

        </DropdownMenu>

      </div>

      {/* CENTER */}

      <div className="repo-toolbar-center">

        <div className="repo-search">

          <FiSearch />

          <input
            type="text"
            placeholder="Search files..."
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="repo-toolbar-right">

        {isOwner && (

          <DropdownMenu
            label="Add"
            icon={<FiFilePlus />}
          >

            <button
              className="dropdown-item"
              onClick={onAddFile}
            >
              <FiFilePlus />
              New File
            </button>

            <button
              className="dropdown-item"
              onClick={onAddFolder}
            >
              <FiFolderPlus />
              New Folder
            </button>

          </DropdownMenu>

        )}

        {isOwner && (

          <button
            className="toolbar-btn"
            onClick={onUploadFiles}
          >
            <FiUpload />

            Upload
          </button>

        )}

        <DropdownMenu
          label="Clone"
          icon={<FiDownload />}
        >

          <button className="dropdown-item">
            Copy HTTPS URL
          </button>

          <button className="dropdown-item">
            Download ZIP
          </button>

        </DropdownMenu>

        {isOwner && (

          <DropdownMenu
            label="Settings"
            icon={<FiSettings />}
          >

            <button
              className="dropdown-item"
              onClick={onToggleVisibility}
            >
              Make {repo.isPrivate ? "Public" : "Private"}
            </button>

            <div className="dropdown-divider" />

            <button
              className="dropdown-item"
              onClick={onDeleteRepository}
            >
              Delete Repository
            </button>

          </DropdownMenu>

        )}

      </div>

    </div>
  );
}

export default RepoToolbar;