import type { Todo } from "../models/Todo"
import { TodoIsDoneToggle } from "./TodoIsDoneToggle"
import { TodoDeleteBtn } from "./TodoDeleteBtn"

type TodoProps = {
  todo: Todo
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodoDisplay = ({ todo, todos, setTodos }: TodoProps) => {
  return (
    <>
      <span className="pb-2">
        {new Date(todo.created_at).toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </span>
      <div className="flex flex-row gap-5">
        <p className={`text-left  ${todo.isDone ? "done" : ""}`}>{todo.todo}</p>
        <TodoIsDoneToggle todos={todos} todo={todo} setTodos={setTodos} />
        <TodoDeleteBtn todos={todos} todo={todo} setTodos={setTodos} />
      </div>
    </>
  )
}
