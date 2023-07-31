//pages/index.tsx
import React from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
import { start } from "repl";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const start = context.query.start ? parseInt(context.query.start as string) : 0;
  const end = context.query.end ? parseInt(context.query.end as string) : 3;

  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    skip: start,
    take: end - start,
  });
  return {
    props: { feed },
  };
};


type Props = {
  feed: PostProps[];
};



const Blog: React.FC<Props> = (props) => {

  const [start, setStart] = React.useState(0);
  const [feed, setFeed] = React.useState(props.feed);
  const [hasMorePosts, setHasMorePosts] = React.useState(true);
  const [pageInput, setPageInput] = React.useState("");
  const [pageLocation, setPageLocation] = React.useState(0)
  /*probably there is a calculation to find cur page 
  (somthing like: "start - end  / 4")
  but I just couldn't find it...
  */

  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts?start=${start}&end=${start +10}`);
      const data = await response.json();
      const response1 = await fetch(`/api/posts?start=${start+10}&end=${start +11}`);
      const data1 = await response1.json();
      setFeed(data.posts);
      setHasMorePosts(data.posts.length > 9 && data1.posts.length > 0)
    };
    fetchPosts();
  }, [start, start + 10]);

  const handlePrevClick = () => {
    if (start - 10 >= 0) {
      setStart(start - 10);
      setPageLocation(pageLocation - 1)
    }
  };
  
  const handleNextClick = () => {
    setStart(start + 10);
    setPageLocation(pageLocation + 1)
  };

  const handleJumpToPage = () => {
    const newPage = parseInt(pageInput, 10) ;
    if (newPage >= 0) {
      setStart(newPage * 10);
      setPageLocation(newPage);
    }
  };
  

  return (
    <Layout>
<div className="page">
      <h1>Public Feed</h1>
      <div className="content">
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <div className="button-container">
          <button onClick={handlePrevClick} disabled = {pageLocation === 0}>Previous</button>
          <span>{pageLocation}</span>
          <button onClick={handleNextClick} disabled={!hasMorePosts}>Next</button>
          <label htmlFor="jumpTo">Jump to page:</label>
          <input
            id="jumpTo"
            type="number"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            min="0"
          />
          <button onClick={handleJumpToPage}>Go</button>
        </div>
      </div>
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
        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          justify-content: space-between;
        }
        
        .content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        
      `}</style>
    </Layout>
  );
};

export default Blog;
