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
      <p className={`text-left  ${todo.isDone ? "done" : ""}`}>{todo.todo}</p>
      <TodoIsDoneToggle todos={todos} todo={todo} setTodos={setTodos} />
      <TodoDeleteBtn todos={todos} todo={todo} setTodos={setTodos} />
    </>
  )
}
