"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      padding: "15px",
      background: "black",
      color: "white"
    }}>

      <Link href="/">Home</Link>
      <Link href="/snippets">Public Snippets</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>

    </div>
  )
}