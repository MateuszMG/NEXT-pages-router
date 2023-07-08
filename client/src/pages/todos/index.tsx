import { axios } from "@/api/axiosInstance";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface Todo {
  id: string;
  title: string;
  descrption: string;
  isDone: boolean;
}

export default function TodosPage() {
  const router = useRouter();
  const [todos, setTodos] = useState([]);

  const handleDelete = (id: string) => {
    axios.delete("/todo/" + id).then((res: any) => {
      console.log("res", res);
      setTodos(res.data.todos);
    });
  };

  const handleMarkAsDone = (id: string) => {
    axios.patch("/todo/" + id).then((res: any) => {
      console.log("res", res);
      setTodos(res.data.todos);
    });
  };

  useEffect(() => {
    axios.get("/todos").then((res: any) => {
      console.log("res", res);
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <div>
      {todos.map((todo: Todo) => (
        <div key={todo.id} style={{ display: "flex", gap: "12px" }}>
          <p>{todo.title}</p>
          <p>{todo.isDone + ""}</p>

          <button
            onClick={() =>
              router.push({ pathname: "/todos/editTodo", query: { ...todo } })
            }
          >
            Edit
          </button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleMarkAsDone(todo.id)}>
            Mark as {todo.isDone ? "undone" : "done"}
          </button>
          <button
            onClick={() => router.push({ pathname: "/todos/todo/" + todo.id })}
          >
            Go to ={">"}
          </button>
        </div>
      ))}
    </div>
  );
}
