import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSideMenu } from "../../utils/system-state/systemSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleOpenSideMenu = () => {
    dispatch(openSideMenu());
  };
  return (
    <navbar className="flex justify-between items-center p-10 pb-0">
      <div>
        <span onClick={handleOpenSideMenu}>
          <i className="fa-solid fa-caret-down"></i>
        </span>
        <Link to="/">Admin CMS</Link>
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        <Link to="/admin-register">
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
        </Link>
        <Link to="/admin-register">
          <i className="fa-solid fa-user-plus"></i> Register
        </Link>
      </div>
    </navbar>
  );
};

export default Header;
