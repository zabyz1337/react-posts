const BASE = process.env.REACT_APP_API_BASE_URL;
const RESOURCE = "post";
export async function getPosts({ page = 1, limit = 3 } = {}) {
  const res = await fetch(`${BASE}/${RESOURCE}?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error(`GET failed: ${res.status}`);
  return res.json();
}
export async function deletePost(id) {
  const res = await fetch(`${BASE}/${RESOURCE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`DELETE failed: ${res.status}`);
  return res.json();
}
