//pages\profile.tsx
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client"

const Profile: React.FC = () => {
    
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); 

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await fetch("/api/auth/user");
  //     const user = await res.json();
  //     setUserData(user);
  //   };
  //   fetchUser();
  // }, []);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/user");
      const user = await res.json();
      setUserData(user);
      setIsLoading(false);  // Update loading state once user data is fetched
    };
    fetchUser();
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (!userData) return <p>You must be logged in to view this page</p>;

  return (
    <div>
      <h2>Your Profile</h2>
      {userData && (
        <ul>
          <li>Name: {userData.name}</li>
          <li>Email: {userData.email}</li>
          <li>Username: {userData.username}</li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
