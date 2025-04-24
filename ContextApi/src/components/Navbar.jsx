import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main
      className={`bg-[#242424] text-amber-50 flex items-center h-[8vh] justify-between px-4 md:px-8 lg:px-20 border-b-[0.2px]`}
    >
      <section>
        <h1 className="text-2xl">Context</h1>
      </section>
      <section className="flex gap-8 font-semibold tracking-wider">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </section>
    </main>
  );
}

export default Navbar;
