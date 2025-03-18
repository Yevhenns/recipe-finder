import Image from "next/image";
import { fetchRecipeDetails } from "@/utils/recipesOperations";

export default async function RecipeDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const recipeDetails = await fetchRecipeDetails(id);
  const { image, title, summary, extendedIngredients } = recipeDetails;
  console.log(recipeDetails);

  return (
    <div>
      <h1 className="text-center mb-2 text-xl">Recipe details</h1>
      <h2>{title}</h2>
      <Image src={image} width={200} height={148} alt="item pic" priority />
      <h3>Summary</h3>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <h3>Ingredients</h3>
      <ul>
        {extendedIngredients.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
