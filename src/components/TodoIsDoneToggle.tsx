import type { ChangeEvent } from "react"
import type { Todo } from "../models/Todo"

type TodoProps = {
  todos: Todo[]
  todo: Todo
  setTodos: (todos: Todo[]) => void
}

export const TodoIsDoneToggle = ({ todo, todos, setTodos }: TodoProps) => {
  const updateTodo = (updatedTodo: Todo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    )
  }
  //-------
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
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => UpdateIsDone(e, todo.id)}
      />
    </>
  )
}
