function Navbar() {
  const icon: string = "/icon_24.png";

  return (
    <div className="navbar flex items-center">
      <div className="navbar__icon">
        <img src={icon} alt="Icon" />
      </div>

      <div className="navbar__label ml-2 text-sm font-semibold"></div>
    </div>
  );
}

export default Navbar;
