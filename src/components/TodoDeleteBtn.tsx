import type { Todo } from "../models/Todo"

type TodoProps = {
  todos: Todo[]
  todo: Todo
  setTodos: (todos: Todo[]) => void
}

export const TodoDeleteBtn = ({ todo, todos, setTodos }: TodoProps) => {
  const deleteTodo = (deletedTodo: Todo) => {
    setTodos(todos.filter((todos) => todos.id !== deletedTodo.id))
    console.log(deletedTodo)
  }
  //-------
  const removeTodo = (id: string) => {
    const deletedTodo = todos.find((todo) => {
      return todo.id === id
    })

    if (!deletedTodo) return

    deleteTodo(deletedTodo)
  }

  return (
    <>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </>
  )
}
