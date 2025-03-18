import { fetchRecipes } from "@/utils/recipesOperations";
import Image from "next/image";
import Link from "next/link";

export default async function Recipes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const { query, cuisine, maxReadyTime } = params;

  const recipes = await fetchRecipes({ query, cuisine, maxReadyTime });

  return (
    <div>
      <h1>Recipes Page</h1>
      {recipes.map(({ id, image, title }) => (
        <Link key={id} href={`/recipes/${id}`}>
          <div>
            <h2>{title}</h2>
            <Image
              src={image}
              width={200}
              height={148}
              alt="item pic"
              priority
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
