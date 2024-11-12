"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AddTopicStyles.module.css"; // Assuming you created a CSS module for component-specific styles

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={styles.input}
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={styles.input}
        type="text"
        placeholder="Topic Description"
      />

      <button type="submit" className={styles.button}>
        Add Topic
      </button>
    </form>
  );
}
