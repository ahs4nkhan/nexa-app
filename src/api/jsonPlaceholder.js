const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getJson(path) {
  const response = await fetch(`${BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error("Could not reach the Nexa API");
  }

  return response.json();
}

export function getUsers() {
  return getJson("/users");
}

export function getTodos(limit = 24) {
  return getJson(`/todos?_limit=${limit}`);
}
