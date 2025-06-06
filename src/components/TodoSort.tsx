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
      <button
        className="max-h-8 sm:max-h-10 px-3 py-1 self-center text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={() => sortTodos()}
      >
        Sort by date
      </button>
    </>
  )
}
