import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-4 bg-blue-500 text-white text-center mt-4">
      <p className="text-sm">
        <Link href="/">謎解き支援ツール</Link>
      </p>
      <p className="text-sm p-2">
        連絡先 :{" "}
        <a
          href="https://x.com/ocen_UoA30C2"
          target="_blank"
          className="text-white hover:text-blue-300"
        >
          X(Twitter)
        </a>
      </p>
    </footer>
  );
}

export default Footer;
