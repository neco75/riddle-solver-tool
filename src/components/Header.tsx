import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="p-4 bg-blue-500 text-white text-center mb-4">
      <h1 className="text-2xl">
        <Link href="/" passHref>
          謎解き支援ツール
        </Link>
      </h1>
    </header>
  );
}

export default Header;
