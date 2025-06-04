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

  const updateTodo = (updatedTodo: Todo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    )
  }

  return (
    <>
      <h1>Todos</h1>
      <TodosHandle todos={todos} updateTodo={updateTodo} />
    </>
  )
}
