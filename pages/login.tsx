  //pages\login.tsx
  import { useState } from "react";
  import { useRouter } from "next/router";

  const Login: React.FC = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push("/");
        
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleInputChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Log In</button>
      </form>
    );
  };

  export default Login;
