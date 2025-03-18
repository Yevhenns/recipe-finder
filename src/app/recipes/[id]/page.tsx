import Image from "next/image";
import { fetchRecipeDetails } from "@/utils/recipesOperations";

type RecipeDetailsProps = Promise<{ id: string }>;

export default async function RecipeDetails(props: {
  params: RecipeDetailsProps;
}) {
  const { id } = await props.params;

  const recipeDetails = await fetchRecipeDetails(id);
  const { image, title, summary, extendedIngredients } = recipeDetails;

  return (
    <div
      className={`p-2 flex flex-col gap-2 justify-between max-w-2xl mx-auto w-full`}
    >
      <h1 className="text-center text-xl">Recipe details</h1>
      <h2 className="text-center">{title}</h2>
      <Image
        className="w-[400px] h-auto mx-auto"
        src={image}
        width={200}
        height={148}
        alt="item pic"
        priority
      />
      <h3>Summary:</h3>
      <div
        className="border-b-2 border-black"
        dangerouslySetInnerHTML={{ __html: summary }}
      />

      <h3>Ingredients:</h3>
      <ul className="list-disc pl-5">
        {extendedIngredients.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
