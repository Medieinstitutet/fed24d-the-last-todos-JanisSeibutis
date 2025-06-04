import { type ChangeEvent } from "react"
import type { Todo } from "../models/Todo"

type TodoProps = {
  todo: Todo
  todos: Todo[]
  updateTodo: (updatedTodo: Todo) => void
}

export const TodosDisplay = ({ todo, updateTodo, todos }: TodoProps) => {
  const UpdateIsDone = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const targetTodo = todos.find((todo) => {
      return todo.id === id
    })

    if (!targetTodo) return

    targetTodo.isDone = e.target.checked
    updateTodo(targetTodo)
  }

  return (
    <>
      <p className={todo.isDone ? "done" : ""}>{todo.todo}</p>
      <input type="checkbox" onChange={(e) => UpdateIsDone(e, todo.id)} />
      <span>{todo.isDone}</span>
    </>
  )
}
