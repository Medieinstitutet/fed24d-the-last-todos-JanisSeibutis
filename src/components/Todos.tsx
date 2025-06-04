import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodosHandle } from "./TodosHandle"

export const Todos = () => {
  const defaultTodos = [
    new Todo("Todo one"),
    new Todo("Todo two"),
    new Todo("Todo three"),
    new Todo("Todo four"),
    new Todo("Todo five"),
  ]
  const [todos, setTodos] = useState<Todo[]>(defaultTodos)

  const reRenderTodos = (todos: Todo[]) => {
    setTodos(todos)
  }

  return (
    <>
      <h1>Todos</h1>
      <TodosHandle todos={todos} setTodos={reRenderTodos} />
    </>
  )
}
