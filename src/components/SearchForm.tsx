import Form from "next/form";

export default function SearchForm() {
  return (
    <Form action="/recipes">
      <input name="query" />
      <input name="cuisine" />
      <input name="maxReadyTime" />
      <button type="submit">Next</button>
    </Form>
  );
}
