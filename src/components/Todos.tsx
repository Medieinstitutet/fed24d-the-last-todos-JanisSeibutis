import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodosHandle } from "./TodosHandle"
import type { StoredTodo } from "../models/StoredTodo"
import { TodoForm } from "./TodoForm"

export const Todos = () => {
  const defaultTodos = [
    new Todo("Walk with the dog"),
    new Todo("Take out the trash"),
    new Todo("Shop presents for children"),
    new Todo("Relax, take a deep breath"),
    new Todo("This is a very long todo to check how text flows"),
  ]

  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initiates state and makes new Todo class objects from storage if any, else from default list
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
      <h1 className="text-3xl font-bold">Todos</h1>
      <TodoForm todos={todos} setTodos={reRenderTodos} />
      <TodosHandle todos={todos} setTodos={reRenderTodos} />
    </>
  )
}
