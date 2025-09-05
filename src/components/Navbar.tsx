"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  subItem?: NavItem[];
}

const NavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "SPMB", href: "/spmb" },
  { label: "Komunitas", href: "/community" },
  { label: "Galeri", href: "/galery" },
  { label: "BISCLife", href: "/bisc-life" },
  { label: "BISCNews", href: "/bisc-news" },
  { label: "BISCPress", href: "/bisc-press" },
  { label: "BISCjenjang", href: "/bisc-", subItem: [{ label: "sd", href: "/bisc-/sd" }] },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex bg-[#067ADD] rounded-full w-full lg:w-3/4 py-3 justify-evenly items-center">
      {NavItems.map((nav) => (
        <>
          <Link key={nav.label} href={nav.href}>
            <span className={`${pathname == nav.href ? "text-white hover:text-[#31A2FF]" : "text-[#31A2FF] hover:text-white"} font-semibold flex gap-1  uppercase`}>
              {nav.label}
              {nav.subItem && <ChevronDown />}
            </span>
          </Link>
        </>
      ))}
    </nav>
  );
}
