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
      <form>
        <input type="text" value={todoValue} onChange={setNewTodoValue} />
        <button onClick={addTodo}>Add ToDo</button>
      </form>
    </>
  )
}
