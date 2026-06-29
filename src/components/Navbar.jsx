/* Navbar — sticky top navigation with logo, links, and CTA buttons */
const logo = "https://www.figma.com/api/mcp/asset/6b4405a5-81fe-4c6e-b88e-603b3a25772e";

const navLinks = ["Home", "About", "Services", "Process"];

const Navbar = () => {
  return (
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1224px]">
      <div className="bg-white border border-[rgba(20,20,20,0.06)] rounded-2xl flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <div className="h-8 w-[116px] flex-shrink-0">
          <img src={logo} alt="Aiency" className="h-full w-full object-contain" />
        </div>

        {/* Centre nav links — hidden on mobile */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 font-inter text-[18px] leading-[1.56] tracking-[-0.72px]
                         text-[rgba(20,20,20,0.7)] hover:text-[#141414] capitalize transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block px-4 py-2 font-inter text-[18px] leading-[1.56]
                             tracking-[-0.72px] text-[rgba(20,20,20,0.7)] capitalize">
            Contact
          </button>
          <button className="bg-[#141414] text-white px-6 py-3 rounded-lg font-inter font-medium
                             text-[16px] leading-[1.56] tracking-[-0.64px] capitalize
                             hover:bg-[#222] transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
