import type { Todo } from "../models/Todo"
import { TodosDisplay } from "./TodosDisplay"

type TodoProps = {
  todos: Todo[]
}

export const TodosHandle = ({ todos }: TodoProps) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <TodosDisplay todo={t} />
          </li>
        ))}
      </ul>
    </div>
  )
}
