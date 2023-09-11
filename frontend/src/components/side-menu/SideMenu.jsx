// SideMenu.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSideMenu } from "../../utils/system-state/systemSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  const isSideMenuOpen = useSelector((state) => state.modal.isSideMenuOpen);

  const handleCloseSideMenu = () => {
    dispatch(closeSideMenu());
  };

  return (
    <div className={`side-menu bg-opacity-100 ${isSideMenuOpen ? "open" : ""}`}>
      <div className="menu-content">
        {/* Your menu items and content here */}
      </div>
      <button className="close-button" onClick={handleCloseSideMenu}>
        Close Menu
      </button>
    </div>
  );
};

export default SideMenu;
