import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
    margin: 2rem 1rem;
`

type LayoutProps = {
    children: ReactNode,
}

const Layout:FC<LayoutProps> = ({ children }) => (
    <>
        <Header/>
            <Container>
                {children}
            </Container>
        <Footer/>
    </>

);

export default Layout;
