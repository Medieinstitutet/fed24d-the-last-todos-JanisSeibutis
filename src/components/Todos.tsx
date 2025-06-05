import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodosHandle } from "./TodosHandle"
import type { StoredTodo } from "../models/StoredTodo"
import { TodoForm } from "./TodoForm"

export const Todos = () => {
  const defaultTodos = [
    new Todo("Todo one"),
    new Todo("Todo two"),
    new Todo("Todo three"),
    new Todo("Todo four"),
    new Todo("Todo five"),
  ]
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos)

        return parsedTodos.map((t: StoredTodo) => {
          const todo = new Todo(t.todo)
          todo.id = t.id
          todo.isDone = t.isDone
          todo.created_at = new Date(t.created_at)
          return todo
        })
      } catch {
        return defaultTodos
      }
    }
    return defaultTodos
  })

  const reRenderTodos = (newTodos: Todo[]) => {
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  return (
    <>
      <h1>Todos</h1>
      <h2>Add New ToDo</h2>
      <TodoForm todos={todos} setTodos={reRenderTodos} />
      <TodosHandle todos={todos} setTodos={reRenderTodos} />
    </>
  )
}
