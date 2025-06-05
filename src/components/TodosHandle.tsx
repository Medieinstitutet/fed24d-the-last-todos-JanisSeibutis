import type { Todo } from "../models/Todo"
import { TodosDisplay } from "./TodosDisplay"

type TodoProps = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodosHandle = ({ todos, setTodos }: TodoProps) => {
  return (
    <>
      {/* Todos list */}
      <div className="todo-list">
        <ul>
          {todos
            .filter((t) => !t.isDone)
            .map((t) => (
              <li key={t.id}>
                <TodosDisplay todo={t} todos={todos} setTodos={setTodos} />
              </li>
            ))}
        </ul>
      </div>

      <h2>Completed todos</h2>

      {/* Completed Todos list */}
      <div className="completed-todo-list">
        <ul>
          {todos
            .filter((t) => t.isDone)
            .map((t) => (
              <li key={t.id}>
                <TodosDisplay todo={t} todos={todos} setTodos={setTodos} />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
