import Emoji from "./Emoji";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between py-4 z-10">
      <p className="text-xl font-bold text-hero-button tracking-tighter">
        a
        <Emoji src="present" className="mx-1" />
        for gres
      </p>
    </nav>
  );
};

export default Navbar;
