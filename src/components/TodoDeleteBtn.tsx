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
      <button
        className="max-h-5 sm:max-h-7 px-2 self-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center "
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </>
  )
}
