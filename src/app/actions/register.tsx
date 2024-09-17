// src/app/register/page.tsx
import { useState } from "react";
import { registerUser } from "./action";  // Import the server action

export default function Register() {
  const [error, setError] = useState<string | null>(null);

  return (
    <form action={registerUser} method="post">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
