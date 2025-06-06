import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"

type TodoProps = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodoForm = ({ todos, setTodos }: TodoProps) => {
  const [todoValue, setTodoValue] = useState("")

  const setNewTodoValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }

  const addTodo = (e: FormEvent) => {
    e.preventDefault()
    const newTodo = new Todo(todoValue)
    const newTodoList: Todo[] = [...todos, newTodo]
    setTodos(newTodoList)
    setTodoValue("")
  }

  return (
    <>
      <form className="flex pb-10 gap-5 justify-center">
        <input
          type="text"
          name="todo"
          placeholder="Add new todo"
          value={todoValue}
          onChange={setNewTodoValue}
          className=" max-w-full w-100 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          className="max-h-8 sm:max-h-10 px-3 py-1 self-center text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors "
          onClick={addTodo}
        >
          Add
        </button>
      </form>
    </>
  )
}
