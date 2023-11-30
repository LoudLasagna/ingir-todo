import { getTodos, http } from "./api.js";
export function getTasks() {
  return new Promise((resolve) => {
    let tasks = localStorage.getItem('tasks')
    if (!tasks) {
      http().getTasks().then((response) => {// getTodos().then((response) => {
        console.log(response.data)
        localStorage.setItem('tasks', JSON.stringify(response.data))
          resolve(response)
        })
      }
    else resolve(JSON.parse(tasks))
  })
}

export function setTasks(data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}
