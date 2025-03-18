type Recipe = {
  id: number;
  image: string;
  imageType: "jpg";
  title: string;
};

type RecipeResponse = {
  results: Recipe[];
};

type SearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};
