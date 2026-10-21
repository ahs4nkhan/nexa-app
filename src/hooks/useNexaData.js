import { useEffect, useMemo, useState } from "react";
import { getUsers, getTodos } from "../api/jsonPlaceholder";

const STORAGE_KEY = "nexa-todos";
const PRIORITIES = ["low", "medium", "high"];

function readSavedTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (err) {
    return null;
  }
}

function useNexaData() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // load users from the API, and tasks from the browser (if saved) or the API
  useEffect(() => {
    async function load() {
      try {
        const saved = readSavedTodos();
        const [userList, todoList] = await Promise.all([
          getUsers(),
          saved ? Promise.resolve(saved) : getTodos(100),
        ]);
        setUsers(userList);
        setTodos(todoList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // save tasks in the browser every time they change
  useEffect(() => {
    if (loading || error) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      // storage can be blocked (private mode), the app still works without it
    }
  }, [todos, loading, error]);

  // turn raw API todos into tasks with an owner name and a priority
  const tasks = useMemo(() => {
    return todos.map((todo) => {
      const owner = users.find((user) => user.id === todo.userId);
      return {
        id: todo.id,
        title: todo.title,
        done: todo.completed,
        ownerId: todo.userId,
        ownerName: owner ? owner.name : "Unassigned",
        priority: todo.priority || PRIORITIES[todo.id % 3],
      };
    });
  }, [todos, users]);

  function toggleTask(id) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function addTask(title, ownerId, priority) {
    setTodos((current) => {
      const nextId = current.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
      return [{ id: nextId, userId: ownerId, title, completed: false, priority }, ...current];
    });
  }

  function editTask(id, title) {
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  }

  function deleteTask(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  // forget saved changes and load fresh tasks from the API again
  async function resetData() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      // ignore
    }
    setLoading(true);
    setError("");
    try {
      setTodos(await getTodos(100));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { users, tasks, loading, error, toggleTask, addTask, editTask, deleteTask, resetData };
}

export default useNexaData;
