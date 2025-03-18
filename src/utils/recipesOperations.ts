const BASE_URL = "https://api.spoonacular.com";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchRecipes = async ({
  query,
  cuisine,
  maxReadyTime,
}: RecipesListSearchParams) => {
  const res = await fetch(
    `${BASE_URL}/recipes/complexSearch?query=${query}&cuisine=${cuisine}${
      maxReadyTime ? `&maxReadyTime=${maxReadyTime}` : ""
    }&apiKey=${API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data: RecipeResponse = await res.json();

  return data;
};

export const fetchRecipeDetails = async (recipeId: string) => {
  const res = await fetch(
    `${BASE_URL}/recipes/${recipeId}/information?apiKey=${API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data: RecipeDetails = await res.json();

  return data;
};
