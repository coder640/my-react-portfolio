"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  console.error(error); // Optional: log errors to console for debugging

  return (
    <html>
      <body>
        <Error statusCode={500} title="Something went wrong" />
      </body>
    </html>
  );
}
