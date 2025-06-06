import type { Todo } from "../models/Todo"
import { TodoDisplay } from "./TodoDisplay"
import { TodoSort } from "./TodoSort"

type TodoProps = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodosHandle = ({ todos, setTodos }: TodoProps) => {
  return (
    <>
      <TodoSort todos={todos} setTodos={setTodos} />

      {/* Todos list */}
      <div className="min-w-full p-1">
        <ul className="flex flex-col gap-3">
          {todos
            .filter((t) => !t.isDone)
            .map((t) => (
              <li
                key={t.id}
                className="flex flex-col sm:text-lg  text-sm border-b-2 p-3"
              >
                <TodoDisplay todo={t} todos={todos} setTodos={setTodos} />
              </li>
            ))}
        </ul>
      </div>

      {todos.some((t) => t.isDone) && <h2 className="mt-4">Completed todos</h2>}

      {/* Completed Todos list */}
      <div className="completed-todo-list min-w-full p-1">
        <ul>
          {todos
            .filter((t) => t.isDone)
            .map((t) => (
              <li
                key={t.id}
                className="flex flex-col  sm:text-lg  text-sm border-b-2 p-3"
              >
                <TodoDisplay todo={t} todos={todos} setTodos={setTodos} />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
