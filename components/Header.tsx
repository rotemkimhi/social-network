
//components/Header.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}



const Header: React.FC = () => {

  const handleLogout = async () => {

    alert('log out');
    const expiredCookie = cookie.serialize('auth', '', {
      httpOnly: false,
      sameSite: 'strict',
      expires: new Date(0),
      path: '/',
    });
  
    document.cookie = expiredCookie;
    setUserData(null);
    
    
  }

  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

    const [userData, setUserData] = useState<User | null>(null);
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("/api/auth/user");
        const data = await res.json();
        if (res.ok) {
          setUserData(data);
        } else {
          setUserData(null);
        }
      };
      fetchData();
    }, []);
    

//   let left = (
//     <div className="left">
//       <Link href="/" >Feed</Link>
//     </div>
//   );

//   let right = null;

//   if (!userData) {
//     right = (
//       <div className="right">
//         <Link href="/signup">Sign Up</Link>
//         <Link href="/login">Log In</Link>
//       </div>
//     );
//   }

//   if (userData) {
//     left = (
//       <div className="left">
//         <Link href="/" >Feed</Link>
//       </div>
//     );
//     right = (
//       <div className="right">
//         <p>
//           {userData.name} ({userData.email})
//         </p>
//         <Link href="/create">New Post</Link>
//         <button onClick={handleLogout}>Log Out</button>
//       </div>
//     );
//   }

//   return (
//     <nav>
//       {left}
//       {right}
//     </nav>
//   );
// };

// export default Header;

let left = (
  <div className="left">
    <Link href="/" legacyBehavior>
      <a className="bold" data-active={isActive("/")}>
        Feed
      </a>
    </Link>
    <style jsx>{`
      .bold {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: #000;
        display: inline-block;
      }

      .left a[data-active="true"] {
        color: gray;
      }

      a + a {
        margin-left: 1rem;
      }
    `}</style>
  </div>
);

let right = null;


if (!userData) {
  right = (
    <div className="right">
      <Link href="/login" legacyBehavior>
        <a data-active={isActive("/signup")}>Log in</a>
      </Link>
      <Link href="/signup" legacyBehavior>
        <a data-active={isActive("/signup")}>Sign up</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

if (userData) {
  left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <Link href="/drafts" legacyBehavior>
        <a data-active={isActive("/drafts")}>My drafts</a>
      </Link>
      <Link href="/userInfo" legacyBehavior>
        <a data-active={isActive("/userInfo")}>profile page</a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
  right = (
    <div className="right">
      <p>
        {userData.name} ({userData.email})
      </p>
      <Link href="/create" legacyBehavior>
        <button>
          <a>New post</a>
        </button>
      </Link>
      <button onClick={() => handleLogout()}>
        <a>Log out</a>
      </button>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        p {
          display: inline-block;
          font-size: 13px;
          padding-right: 1rem;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }

        button {
          border: none;
        }
      `}</style>
    </div>
  );
}

return (
  <nav>
    {left}
    {right}
    <style jsx>{`
      nav {
        display: flex;
        padding: 2rem;
        align-items: center;
      }
    `}</style>
  </nav>
);
};

export default Header;
