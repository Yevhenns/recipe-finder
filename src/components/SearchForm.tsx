"use client";

import Form from "next/form";
import { useState } from "react";

const input = `p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`;

export default function SearchForm() {
  const [formData, setFormData] = useState({
    query: "",
    cuisine: "",
    maxReadyTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkIsFormFilled = () => {
    return formData.query.trim() || formData.cuisine || formData.maxReadyTime
      ? true
      : false;
  };

  return (
    <Form
      action="/recipes"
      className="flex flex-col justify-center gap-4 max-w-md mx-auto w-full p-4 border rounded-lg shadow-md"
    >
      <div className="flex flex-col">
        <label htmlFor="query">Recipe</label>
        <input
          className={input}
          maxLength={50}
          id="query"
          name="query"
          type="text"
          placeholder="Search for recipes"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="cuisine">Cuisine</label>
        <select
          id="cuisine"
          name="cuisine"
          className="cursor-pointer p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
          onChange={handleChange}
        >
          <option value="">Choose cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="maxReadyTime">Max Ready Time (minutes)</label>
        <input
          className={input}
          id="maxReadyTime"
          min={1}
          name="maxReadyTime"
          type="number"
          placeholder="Max ready time"
          onChange={handleChange}
        />
      </div>

      <button
        className={`cursor-pointer mt-2 p-2 bg-blue-500 text-white
          rounded transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400
          disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-default`}
        type="submit"
        disabled={!checkIsFormFilled()}
      >
        Next
      </button>
    </Form>
  );
}
