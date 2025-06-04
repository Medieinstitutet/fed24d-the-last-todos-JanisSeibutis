import type { Todo } from "../models/Todo"
import { TodosDisplay } from "./TodosDisplay"

type TodoProps = {
  todos: Todo[]
  updateTodo: (updatedTodo: Todo) => void
}

export const TodosHandle = ({ todos, updateTodo }: TodoProps) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <TodosDisplay todo={t} updateTodo={updateTodo} todos={todos} />
          </li>
        ))}
      </ul>
    </div>
  )
}
