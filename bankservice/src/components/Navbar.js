import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h2>Navbar</h2>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default Navbar;
