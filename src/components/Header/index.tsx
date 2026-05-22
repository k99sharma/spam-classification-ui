function Header() {
  const imgSrc: string = "/header.png";

  return (
    <div className="header flex flex-col items-center justify-center">
      <div className="header__icon mb-8">
        <img width={80} height={80} src={imgSrc} alt="header icon" />
      </div>

      <div className="text-3xl font-semibold">AI-Powered Spam Detection</div>
    </div>
  );
}

export default Header;
