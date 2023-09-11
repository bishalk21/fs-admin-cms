import { Link } from "react-router-dom";
const Header = () => {
  return (
    <navbar className="flex justify-between items-center p-10 pb-0">
      <Link to="/">
        <i className="fa-solid fa-caret-down"></i> Admin CMS
      </Link>
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
