import Image from "next/image";
import Link from "next/link";

export default function RecipesList({ recipes }: { recipes: Recipe[] }) {
  return (
    <>
      {recipes.map(({ id, image, title }) => (
        <Link
          key={id}
          href={`/recipes/${id}`}
          className="flex flex-col justify-between border rounded-lg shadow-md overflow-hidden"
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
    </>
  );
}
