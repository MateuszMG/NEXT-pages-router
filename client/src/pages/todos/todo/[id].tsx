import { axios } from "@/api/axiosInstance";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Todo } from "..";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array(3)
    .fill(1)
    .map((_, id) => ({ params: { id: id + "" } }));

  return { paths, fallback: true };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

interface TodoPageProps {
  todo?: Todo;
  error: string;
}

export const getStaticProps: GetStaticProps<TodoPageProps, Params> = async (
  context
) => {
  const res = await axios.get("/todo/" + context.params!.id);

  return {
    props: {
      todo: res.data?.todo || null,
      error: "Does not exist",
    },
  };
};

export default function TodoPage({
  error,
  todo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <>
      {todo ? (
        <div>
          <p>{todo.title}</p>
          <p>{todo.isDone + ""}</p>
          <button
            onClick={() =>
              router.push({ pathname: "/todos/editTodo", query: { ...todo } })
            }
          >
            Edit
          </button>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
}
