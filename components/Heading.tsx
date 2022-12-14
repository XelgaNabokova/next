import { FC } from "react";

type HeadingProps = {
    tag?: string,
    text: string,
}

const Heading:FC<HeadingProps> = ({tag, text}) => {
    const Tag = tag || 'h1';
    return <Tag>{text}</Tag>
}

export default Heading;