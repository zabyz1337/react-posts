import { useForm } from "react-hook-form";
import { api } from "../api/client";
import styles from "../styles/PostForm.module.css";
import avatar from "../assets/avatar.png";

export default function PostForm({ onCreated }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onSubmit" });

  async function onSubmit(values) {
    await api.post("/post", {
      title: values.title,
      text: values.text,
    });

    reset();
    onCreated?.();
  }

  return (
    <section id="create" className={styles.panel}>
      <h2 className={styles.title}>Написать пост</h2>

      <div className={styles.box}>
        <div className={styles.avatarWrap}>
          <img className={styles.avatar} src={avatar} alt="User" />
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>
            Заголовок
            <input
              className={styles.input}
              {...register("title", {
                required: "Введите заголовок",
                minLength: 2,
              })}
            />
            {errors.title && (
              <div className={styles.error}>{errors.title.message}</div>
            )}
          </label>

          <label className={styles.label}>
            Текст поста
            <textarea
              className={styles.textarea}
              placeholder="Введите текст..."
              rows={5}
              {...register("text", { required: "Введите текст", minLength: 5 })}
            />
            {errors.text && (
              <div className={styles.error}>{errors.text.message}</div>
            )}
          </label>

          <div className={styles.actions}>
            <button
              className={styles.publishBtn}
              type="submit"
              disabled={isSubmitting}
            >
              Публикация
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
