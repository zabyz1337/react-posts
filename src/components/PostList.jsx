import { useEffect, useState } from "react";
import { api } from "../api/client";
import Post from "./Post";
import styles from "../styles/PostList.module.css";

const LIMIT = 3;

export default function PostList({ refreshKey }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load(p) {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/post", {
        params: { page: p, limit: LIMIT },
      });
      const data = Array.isArray(res.data) ? res.data : [];
      setPosts(data);
      setHasNext(data.length === LIMIT);
    } catch (e) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(page);
  }, [page, refreshKey]);

  async function handleDelete(id) {
    try {
      await api.delete(`/post/${id}`);
      await load(page);
    } catch (e) {
      alert("Не удалось удалить пост");
    }
  }

  return (
    <section id="posts" className={styles.panel}>
      <h2 className={styles.title}>Список постов</h2>

      {loading && <div className={styles.state}>Loading…</div>}
      {error && <div className={styles.stateError}>{error}</div>}

      {!loading && !error && (
        <>
          <div className={styles.list}>
            {posts.map((p) => (
              <Post key={p.id} post={p} onDelete={handleDelete} />
            ))}
          </div>

          <div className={styles.bottom}>
            <button
              className={styles.nextBtn}
              onClick={() => setPage((x) => x + 1)}
              disabled={!hasNext}
            >
              Далее
            </button>
          </div>
        </>
      )}
    </section>
  );
}
