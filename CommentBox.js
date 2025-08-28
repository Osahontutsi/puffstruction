import React, { useState } from "react";

export default function CommentBox() {
  const [comments, setComments] = useState([]);

  const addComment = (c) => {
    setComments([...comments, c]);
  };

  return (
    <div>
      <h3>Comment Box</h3>
      <input type="text" id="cmt" placeholder="Write a comment..." />
      <button onClick={() => addComment(document.getElementById("cmt").value)}>
        Post
      </button>

      <ul>
        {comments.map((c, i) => (
          // ⚠️ Stored XSS
          <li key={i} dangerouslySetInnerHTML={{ __html: c }} />
        ))}
      </ul>
    </div>
  );
}
