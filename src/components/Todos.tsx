import { useState } from "react"
import { Todo } from "../models/Todo"

export const Todos = () => {
  const [Todos, setTodos] = useState<Todo[]>([])
  return (
    <>
      <h1>Todos</h1>
    </>
  )
}
