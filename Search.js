import React from "react";

export default function Search() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  return (
    <div>
      <p>Search results for: 
        {/* Reflected without encoding */}
        <span dangerouslySetInnerHTML={{ __html: query }} />
      </p>
    </div>
  );
}
