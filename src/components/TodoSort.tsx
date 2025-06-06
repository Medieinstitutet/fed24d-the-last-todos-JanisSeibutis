import { useState } from "react"
import type { Todo } from "../models/Todo"

type TodoProps = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodoSort = ({ todos, setTodos }: TodoProps) => {
  const [ascending, setAscending] = useState(false)

  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => {
      const timeA = new Date(a.created_at).getTime()

      const timeB = new Date(b.created_at).getTime()

      return ascending ? timeA - timeB : timeB - timeA
    })

    setTodos(sorted)
    setAscending(!ascending)
  }

  return (
    <>
      <button onClick={() => sortTodos()}>Sort by date</button>
    </>
  )
}
