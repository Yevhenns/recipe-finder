const BASE_URL = "https://api.spoonacular.com";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchRecipes = async ({
  query,
  cuisine,
  maxReadyTime,
}: SearchParams) => {
  const res = await fetch(
    `${BASE_URL}/recipes/complexSearch?query=${query}&cuisine=${cuisine}${
      maxReadyTime ? `&maxReadyTime=${maxReadyTime}` : ""
    }&apiKey=${API_KEY}`
  );

  const { results }: RecipeResponse = await res.json();

  return results;
};
