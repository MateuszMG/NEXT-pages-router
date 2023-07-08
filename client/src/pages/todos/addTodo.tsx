import { axios } from "@/api/axiosInstance";

export default function AddTodoPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      isDone: e.target.isDone.checked,
    };

    axios.post("/todo", data).then((res: any) => {
      console.log("res", res);
    });
  };

  return (
    <main>
      <h1>Add todo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <input type="checkbox" name="isDone" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
