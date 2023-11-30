export async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await response.json()
}

import axios from "axios";


export function http() {
    const http = axios.create({
        baseURL: "http://localhost:3000/",
        headers: {
            "Content-type": "application/json"
        }
    })
    const getTasks = () => {
        return http.get('/get-tasks')
    }
    const createTask = (data) => {
        return http.post('/create-task', data)
    }
    const toggleTask = (id) => {
        return http.post('/toggle-task', { id })
    }
    const deleteTask = (id) => {
        return http.post('/toggle-task', { id })
    }
    return { getTasks, createTask, toggleTask, deleteTask }
}

