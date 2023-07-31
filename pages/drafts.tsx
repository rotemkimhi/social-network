//pages/drafts.tsx
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { useSession, getSession } from "next-auth/react";
import prisma from '../lib/prisma'

import jwt from 'jsonwebtoken';
import cookie from 'cookie';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

interface UserPayload extends jwt.JwtPayload {
  email: string;
  id: number;
  username: string;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const parsedCookies = cookie.parse(req.headers.cookie || '');
  const token = parsedCookies.auth;
  let user: UserPayload | undefined;;

  try {
    user = jwt.verify(token, 'abc') as UserPayload; 
  } catch (error) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  
  return {
    props: { drafts },
  };
};
type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  
  const [session, setUserData] = useState<User | null>(null);
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
  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchData = async () => {
  //     const res = await fetch("/api/auth/user");
  //     const data = await res.json();
  //     if (isMounted) {
  //       setUserData(res.ok ? data : null);
        
  //     }
  //   };
  //   fetchData();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  if (!session) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page">
        <h1>My Draftssss</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Drafts;
