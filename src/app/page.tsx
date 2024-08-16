import Link from "next/link";
import Image from "next/image";
import { links } from "@/app/__type";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-2xl font-bold p-2">ツール一覧</h1>
      <section className="flex flex-wrap justify-center gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <Link
              href={link.href}
              className="border-solid border-2 border-gray-300 p-2 rounded-lg"
              passHref
            >
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  position: "relative",
                }}
              >
                <Image src={link.src} alt={link.alt} fill objectFit="cover" />
              </div>
              <p className="mt-2 text-lg">{link.subText}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
