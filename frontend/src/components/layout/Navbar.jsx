import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <header className="w-full bg-white shadow-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Logo />

        <NavLinks />

        <UserMenu />

      </div>

    </header>
  );
}

export default Navbar;