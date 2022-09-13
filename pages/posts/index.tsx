import { FC } from "react";
import Head from 'next/head';
import Link from 'next/link';
import styled from "@emotion/styled";
import Heading from "../../components/Heading";
import { postType } from "../../components/types";

const PostsList = styled.ul`
    display: flex;
    flex-direction: column;
`
const PostsItem = styled.li`
    font-size: 1.2rem;
    margin: 0.3rem;
    padding: 0.5rem;
    border: 1px solid #d94821;
    cursor: pointer;
    &:hover {
        background: #d94821;
        color: #fff;
    }
    & > a {
        display: inline-block;
        width: 100%;
    }
`

type PostsTypeProps = {
    posts: [postType],
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
}

const Posts:FC<PostsTypeProps> = ({ posts }) => (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text='Post list'/>
        <PostsList>
            {posts && posts.map(({ id, title }) => (
                <PostsItem key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                </PostsItem>
            ))}
        </PostsList>
    </>
);
   
export default Posts;