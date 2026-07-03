import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function DropdownMenu({
  label,
  icon,
  children,
  className = "",
  iconOnly = false,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className={`dropdown ${className}`}
      ref={menuRef}
    >
      <button
  className={`dropdown-btn ${iconOnly ? "icon-only" : ""}`}
  onClick={() => setOpen(!open)}
>
  {icon}

  {!iconOnly && <span>{label}</span>}

  {!iconOnly && <FiChevronDown />}
</button>

      {open && (
        <div className="dropdown-menu">
          {children}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;