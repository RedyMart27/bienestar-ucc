import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Logo />

        {/* Escritorio */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLinks />
          <UserMenu />
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Menú móvil */}
      {open && (
        <div className="lg:hidden border-t bg-white">

          <div className="px-6 py-5 space-y-5">

            <NavLinks />

            <UserMenu />

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;