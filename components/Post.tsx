//components/post
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import { TfiVideoClapper } from "react-icons/tfi";

export type PostProps = {
  videoSrc: JSX.Element;
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const [videoSrc, setVideoSrc] = useState<string | null>(null);


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`/api/createVideo?postId=${post.id}`);
        if (res.ok) {
          const videoData = await res.json();
          if (videoData.cloudinaryLink) {
            setVideoSrc(videoData.cloudinaryLink);
          }
        }
      } catch (error) {
        console.error("Error fetching video: ", error);
      }
    };

    fetchVideo();
  }, [post.id]);

  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>
        {post.title}
        {videoSrc && <TfiVideoClapper />}
      </h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />
      
      {videoSrc && <video src={videoSrc} controls />}
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;