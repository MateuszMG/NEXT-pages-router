import { axios } from "@/api/axiosInstance";
import { useRouter } from "next/router";

export default function EditTodoPage() {
  const router = useRouter();
  console.log("router.query.id", router.query);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      isDone: e.target.isDone.checked,
    };

    axios.put("/todo/" + router.query.id, data).then((res: any) => {
      console.log("res", res);
    });
  };

  if (!router.query.id) {
    setTimeout(() => {
      router.push({ pathname: "/todos" });
    }, 1500);

    return (
      <div>
        <h1>Lack of data</h1>
      </div>
    );
  }

  return (
    <main>
      <h1>Add todo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="title" defaultValue={router.query.title} />
        <input
          type="text"
          name="description"
          defaultValue={router.query.description}
        />
        <input
          type="checkbox"
          name="isDone"
          defaultChecked={!!router.query.isDone}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
