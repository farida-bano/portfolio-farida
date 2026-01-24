"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import { NavbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="border-b border-b-hoverColor/10 sticky top-0 z-50 bg-bodyColor" role="banner">
      <Container className="flex items-center justify-between py-5">
        <Logo title="Farida" subtitle="." />
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          <ul className="flex items-center gap-7 m-0 p-0 list-none">
            {NavbarData?.map((item) => (
              <li key={item?.title} className="m-0 p-0">
                <Link
                  href={item?.link}
                  className={`:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                    pathname === item?.link && "text-hoverColor"
                  }`}
                  aria-current={pathname === item?.link ? "page" : undefined}
                >
                  {item?.title}
                  <span
                    className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                      pathname === item?.link
                        ? "translate-x-0"
                        : "-translate-x-[105%]"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
            <li className="m-0 p-0">
              <Link
                href={"/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
                aria-label="Download resume (PDF)"
              >
                Hire me
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="inline-flex md:hidden relative"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          <Menu className="hover:text-hoverColor hoverEffect cursor-pointer" aria-hidden="true" />
        </button>
      </Container>
      <div className="md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
