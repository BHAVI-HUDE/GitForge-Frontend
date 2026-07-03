import { FiArrowLeft, FiFolder } from "react-icons/fi";

function RepoBreadcrumb({
  currentPath,
  onGoBack,
}) {

  return (

    <div className="repo-breadcrumb">

      <div className="breadcrumb-left">

        {currentPath && (

          <button
            className="breadcrumb-back"
            onClick={onGoBack}
          >
            <FiArrowLeft />
          </button>

        )}

        <FiFolder />

        <span>

          {currentPath || "root"}

        </span>

      </div>

    </div>

  );

}

export default RepoBreadcrumb;