//pages/create.tsx
import React, {useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { CgSpinner } from  "react-icons/cg";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { data: session, status } = useSession();  
  const [loading, setLoading] = useState<boolean>(false);
  // let email = session?.user?.email;
  const titleRef = useRef<HTMLInputElement>(null);

  const [userData, setUserData] = useState<User | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/auth/user");
  //     const data = await res.json();
  //     if (res.ok) {
  //       setUserData(data);
  //     } else {
  //       setUserData(null);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    let isMounted = true; 
    const fetchData = async () => {
      if (!userData) { 
        const res = await fetch("/api/auth/user");
        const data = await res.json();
        if (res.ok) {
          if (isMounted) setUserData(data); 
        } else {
          if (isMounted) setUserData(null);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false; 
    }
  }, []); 

  let email = userData?.email;

  const uploadFile = async () => {
    if (!file) return null;

    const formData = new FormData();
    formData.append('inputFile', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    return data.url;
  };

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const videoUrl = await uploadFile();
      const body = { title, content, email };
      //check why post need session!
      const response = await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      //await Router.push("/drafts");

      const videoResponse = await fetch(`/api/createVideo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: email,
          dateUploaded: new Date(),
          postId: responseData.id, 
          cloudinaryLink: videoUrl
        }),
      });
      if (videoResponse.ok) {
        await Router.push("/drafts");
      } else {
        console.error("Error saving video metadata");
      }
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false); 
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      if (e.target.files.length) {
        setFile(e.target.files[0]);
      }
    }
  };

  useEffect(() => {
    if(titleRef.current){
      titleRef.current.focus();
    }
  },[]);

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            ref = {titleRef}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input
            type="file" 
            accept="video/*" 
            onChange={onFileChange}
          />
          <input disabled={!content || !title} type="submit" value="Create" />
          {loading && <CgSpinner/>}
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
        .loading-icon {
          animation: spin 1s infinite linear;
          font-size: 24px;
          margin-left: 0.5rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;


