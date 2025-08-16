"use client";

import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Starter page for your Next.js app" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "14px 0" }}>🚀 Next.js App</h1>

        <p style={{ fontSize: "1.2rem" }}>
          This is your clean Next.js page — ready to build on.
        </p>

        <p style={{ marginTop: "24px" }}>
          Edit <code>app/page.tsx</code> to get started.
        </p>
      </main>
    </div>
  );
}
