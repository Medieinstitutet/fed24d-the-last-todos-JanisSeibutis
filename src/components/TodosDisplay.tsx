import { useState, type ChangeEvent } from "react"
import type { Todo } from "../models/Todo"

type TodoProps = {
  todo: Todo
}

export const TodosDisplay = ({ todo }: TodoProps) => {
  const [isDone, setisDone] = useState(todo.isDone)

  const ToggleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
    setisDone(e.target.checked)
  }

  return (
    <>
      <p>{todo.todo}</p>
      <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => ToggleIsDone(e)}
      />
      <span>{todo.created_at.toISOString()}</span>
    </>
  )
}
