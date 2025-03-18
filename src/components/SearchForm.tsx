import Form from "next/form";

const input = `p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`;

export default function SearchForm() {
  return (
    <Form
      action="/recipes"
      className="flex flex-col justify-center gap-4 max-w-md mx-auto w-full p-4 border rounded-lg shadow-md"
    >
      <div className="flex flex-col">
        <label htmlFor="query">Recipe</label>
        <input
          className={input}
          id="query"
          name="query"
          type="text"
          placeholder="Search for recipes"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="cuisine">Meal Type</label>
        <select
          id="cuisine"
          name="cuisine"
          className="cursor-pointer p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
        >
          <option value="">Choose cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="maxReadyTime">Max Ready Time (mins)</label>
        <input
          className={input}
          id="maxReadyTime"
          name="maxReadyTime"
          type="number"
          placeholder="Max time"
        />
      </div>

      <button
        className="cursor-pointer mt-2 p-2 bg-blue-500 text-white rounded transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="submit"
      >
        Next
      </button>
    </Form>
  );
}
