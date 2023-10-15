import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-center mt-5">
        <NavLink className="mr-6 text-lg font-semibold" to="/addcoffee">
          <li>Add Coffee</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/updatecoffee">
          <li>Update Coffee</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/signup">
          <li>SignUp</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/signin">
          <li>SignIn</li>
        </NavLink>
        <NavLink className="mr-6 text-lg font-semibold" to="/users">
          <li>Users</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
