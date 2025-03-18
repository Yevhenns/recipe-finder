type Recipe = {
  id: number;
  image: string;
  imageType: "jpg";
  title: string;
};

type RecipeResponse = {
  results: Recipe[];
};

type RecipesListSearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};

type Ingredient = {
  id: number;
  name: string;
};

type RecipeDetails = {
  id: number;
  title: string;
  extendedIngredients: Ingredient[];
  image: string;
  imageType: "jpg";
  summary: string;
};
