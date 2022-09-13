import Head from "next/head";
import { FC } from "react";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../components/types";

type PostTypeProps = {
    post: postType,
}


export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post: data },
    }
}

const Post:FC<PostTypeProps> = ({ post }) => {
    return (
        <>
            <Head><title>Post</title></Head>
            <PostInfo post={post}/>
        </>
    )
};
   
export default Post;