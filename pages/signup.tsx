//pages\signup.tsx
import { useState } from "react";
import { useRouter } from "next/router";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", username: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleInputChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleInputChange} />
      <input name="username" placeholder="Username" onChange={handleInputChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
