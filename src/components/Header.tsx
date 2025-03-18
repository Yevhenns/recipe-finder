import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-4 items-center p-2 border-b-2 border-black">
      <Link href={"/"}>
        <Image
          src="/logo.webp"
          width={100}
          height={148}
          alt="item pic"
          priority
        />
      </Link>
      <h2 className="text-xl">Recipe finder</h2>
    </header>
  );
}
