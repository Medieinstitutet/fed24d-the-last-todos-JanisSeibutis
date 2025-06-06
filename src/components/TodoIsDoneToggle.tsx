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

  const UpdateIsDone = (id: string, isDone: boolean) => {
    const targetTodo = todos.find((todo) => {
      return todo.id === id
    })

    if (!targetTodo) return

    targetTodo.isDone = isDone
    updateTodo(targetTodo)
  }

  return (
    <>
      {!todo.isDone ? (
        <input
          type="checkbox"
          name="isDone"
          className="ml-auto min-w-4 min-h-4 sm:w-5 sm:h-5 self-center"
          checked={todo.isDone}
          onChange={(e) => UpdateIsDone(todo.id, e.target.checked)}
        />
      ) : (
        <button
          className="max-h-5 px-2 self-center ml-auto bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={() => UpdateIsDone(todo.id, !todo.isDone)}
        >
          Undo
        </button>
      )}
    </>
  )
}
