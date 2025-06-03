import { v4 as uuidv4 } from "uuid"

export class Todo {
  id: string
  todo: string
  isDone: boolean
  created_at: Date
  constructor(todo: string, isDone: boolean) {
    this.id = uuidv4()
    this.todo = todo
    this.isDone = isDone
    this.created_at = new Date()
  }
}
