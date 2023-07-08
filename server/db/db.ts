export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

class TodosDB {
  todos: Todo[];

  constructor() {
    this.todos = Array(10)
      .fill(1)
      .map((_, i) => this.createTodo(i));
  }

  getMany() {
    return this.todos;
  }

  findOneById(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  add(newTodo: Omit<Todo, "id">) {
    this.todos.push({
      ...newTodo,
      id: Date.now().toString(),
    });
  }

  update(newTodo: Todo) {
    this.todos = this.todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo
    );
  }

  delete(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  private createTodo = (number: number) => ({
    id: number.toString(),
    title: "title: " + number,
    description: "description:" + number,
    isDone: !!(number % 2),
  });
}

export const todosDB = new TodosDB();
