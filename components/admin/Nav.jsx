import { ADMIN_NAVIGATION_OPTIONS, CUSTOMER_NAVIGATION_OPTIONS } from "@utils/constants";

const Nav = ({ currentNav, setCurrentNav, role }) => {

  const handleLogout = () => {
    localStorage.clear()
    if (role === "customer") {
      window.location.href = "/CustomerLogin";
    }
    else {
      window.location.href = "/login";
    }
  }
  return (
    <div className="flex flex-row justify-between items-center bg-sky-400 px-[48px]">
      <div className="flex items-center gap-x-2">
      {Object.values(role === 'Customer' ? CUSTOMER_NAVIGATION_OPTIONS :  ADMIN_NAVIGATION_OPTIONS).map((nav) => (
        <p
          key={nav.label}  className={`py-[16px] px-[16px] cursor-pointer hover:text-white hover:bg-sky-500 text-lg h-full ${
            currentNav === nav.name ? "text-white bg-sky-500" : "text-gray-700"
          }`}
          onClick={() => setCurrentNav(nav.name)}
        >
          {nav.label}
        </p>
      ))}
      </div>
      <p onClick={handleLogout} className="text-lg hover:text-white cursor-pointer hover:bg-sky-500 py-[16px] px-[16px]">Logout</p>
    </div>
  );
};

export default Nav;
