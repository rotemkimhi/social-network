//pages/p/[id].tsx
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../lib/prisma'
import { useSession } from "next-auth/react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  let videoSrc = null;

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: post ?? { author: { name: "Me" } }
  };
};

async function publishPost(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/")
}

async function deletePost(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/")
}

const Post: React.FC<PostProps> = (props) => {

  
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const result = await fetch(`/api/createVideo?postId=${props.id}`);
        if (result.ok) {
          const vidData = await result.json();
          if (vidData.cloudinaryLink) {
            setVideoSrc(vidData.cloudinaryLink);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideo();
  }, [props.id]);

  const [user, setUserData] = useState<User | null>(null);
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

  const userHasValidSession = Boolean(user);
  const postBelongsToUser = user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={props.content} />
        {videoSrc && <video src={videoSrc} controls />}
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(props.id)}>Publish</button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button onClick={() => deletePost(props.id)}>Delete</button>
        )}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;
