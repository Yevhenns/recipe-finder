import { fetchRecipes } from "@/utils/recipesOperations";
import Image from "next/image";

export default async function Recipes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const { query, cuisine, maxReadyTime } = params;

  const recipes = await fetchRecipes({ query, cuisine, maxReadyTime });
  console.log(recipes);

  return (
    <div>
      {recipes.map(({ id, image, title }) => (
        <div key={id}>
          <Image src={image} width={200} height={148} alt="item pic" priority />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
