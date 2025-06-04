import type { Todo } from "../models/Todo"
import { TodosDisplay } from "./TodosDisplay"

type TodoProps = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodosHandle = ({ todos, setTodos }: TodoProps) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <TodosDisplay todo={t} todos={todos} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  )
}
