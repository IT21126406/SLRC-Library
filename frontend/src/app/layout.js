"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import SideNavMenu from "../components/SideNavMenu/SideNavMenu";
import Header from "../components/Header/Header";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define paths that don't require the layout
  const noLayoutPages = ["/login"];

  // Check if the current path should show the layout
  const showLayout = !noLayoutPages.includes(pathname);

  return (
    <html lang="en">
      <body>
        {showLayout && <Header />}
        <div className={showLayout ? "flex" : ""}>
          {showLayout && <SideNavMenu />}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
