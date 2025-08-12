function Header({ signOut, currentTab }) {
  return (
    <div className="relative top-0 w-full bg-gray-100 h-[100px] shadow-sm">
      <p>{currentTab}</p>
    </div>
  );
}

export default Header;
