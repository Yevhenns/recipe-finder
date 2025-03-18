import RecipesList from "@/components/RecipesList";
import { fetchRecipes } from "@/utils/recipesOperations";
import Link from "next/link";

export default async function Recipes({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const { query, cuisine, maxReadyTime } = params;

  const recipesData = await fetchRecipes({ query, cuisine, maxReadyTime });
  const recipes = recipesData.results;

  return (
    <div className="p-2">
      <h1 className="text-center mb-2 text-xl">Recipes Page</h1>
      <div className="p-2 grid grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
        {recipes.length === 0 && (
          <div className="text-center">
            <p>Nothing found</p>
            <Link className="underline hover:text-blue-500" href={"/"}>
              Go to home page
            </Link>
          </div>
        )}
        <RecipesList recipes={recipes} />
      </div>
    </div>
  );
}
