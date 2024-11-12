"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../app/globals.css"; // Import the global styles

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="input"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="input"
        type="text"
        placeholder="Topic Description"
      />

      <button type="submit" className="button">
        Update Topic
      </button>
    </form>
  );
}
