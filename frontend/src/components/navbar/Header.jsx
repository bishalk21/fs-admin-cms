import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openSideMenu } from "../../utils/system-state/systemSlice";
import { logoutUserAction } from "../../pages/admin-login/admin-reducer-action/adminUserAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminUsers } = useSelector((state) => state.adminUsers);

  const handleOpenSideMenu = () => {
    dispatch(openSideMenu());
  };

  const handleOnLogout = () => {
    dispatch(logoutUserAction());
    navigate("/");
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
        {adminUsers?._id ? (
          <>
            <Link to="/admin-login">
              <i className="fa-solid fa-user"></i> Profile
            </Link>
            <Link to="/" onClick={handleOnLogout}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/admin-login">
              <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
            </Link>
            <Link to="/admin-register">
              <i className="fa-solid fa-user-plus"></i> Register
            </Link>
          </>
        )}
      </div>
    </navbar>
  );
};

export default Header;
