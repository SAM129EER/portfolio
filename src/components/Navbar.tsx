import Link from "next/link";

const navItems = [
  { id: 1, title: "About", href: "/about" },
  { id: 2, title: "Projects", href: "/projects" },
  { id: 3, title: "Contact", href: "/contact" },
  { id: 4, title: "Blog", href: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-2">
      <div className="items-center rounded border border-neutral-300 px-3 py-1.5">
        <Link href={"/"}>Sameer Jangid</Link>
      </div>
      <div className="flex items-center border border-neutral-300 rounded gap-3 p-2 ">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
