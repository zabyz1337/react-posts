import { useState } from "react";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import styles from "./styles/App.module.css";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PostList refreshKey={refreshKey} />
        <PostForm onCreated={() => setRefreshKey((x) => x + 1)} />
      </main>
    </div>
  );
}
