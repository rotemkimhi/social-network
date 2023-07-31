//pages/useInfo.tsx
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { useSession, getSession } from "next-auth/react";
import prisma from '../lib/prisma'
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const userInfo = () => {

    interface User {
        id: number;
        name: string;
        email: string;
        username: string;
        password: string;
      }
      
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


  return (
    <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        maxWidth: '800px',
        margin: '50px auto',
        padding: '40px',
        background: '#f8f8f8',
      }}
    >
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '30px',
        }}
      >
        User Profile
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
        }}
        >
            <p style={{ margin: '10px 0' }}><strong>Name:</strong> {userData?.name}</p>
            <p style={{ margin: '10px 0' }}><strong>Username:</strong> {userData?.username}</p>
            <p style={{ margin: '10px 0' }}><strong>Email:</strong> {userData?.email}</p>
            <p style={{ margin: '10px 0' }}><strong>Id:</strong> {userData?.id}</p>
        </div>
      </div>
    </Layout>
  );

}

export default userInfo;

