import Image from "next/image";
import Link from "next/link";

export default function RecipesList({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
      {recipes.map(({ id, image, title }) => (
        <Link
          key={id}
          href={`/recipes/${id}`}
          className={`flex flex-col justify-between border rounded-lg
            shadow-md overflow-hidden transition hover:scale-105`}
        >
          <div className="p-2">
            <h2>{title}</h2>
          </div>
          <Image
            src={image}
            width={312}
            height={231}
            alt="item pic"
            priority
            className="w-full h-auto"
          />
        </Link>
      ))}
    </div>
  );
}
