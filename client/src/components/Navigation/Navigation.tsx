import Link from "next/link";
import styles from "./Navigation.module.css";

const path = [
  "/todos",
  "/todos/todo/5",
  "/todos/addTodo",
  "/todos/editTodo",
  "/photo",
];

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      {path.map((path) => (
        <Link key={path} href={path}>
          {path}
        </Link>
      ))}
    </div>
  );
};
