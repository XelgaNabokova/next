import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "@emotion/styled";

const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    margin: 1rem;
`

const NavbarImage = styled.div`
    margin-right: 1rem;
`

const NavbarList = styled.div`
    display: flex;
    align-items: center;
    & > a {
        color: #000;
        border: 1px solid #d94821;
        border-radius: 3px;
        padding: 0.5rem;
        margin-right: 1rem;
        cursor: pointer;
        &:hover, &.active {
            background: #d94821;
            color: #fff;
        }
    }
`

const Navbar = () => {
    const { pathname } = useRouter();

    const navigation = [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'Posts', path: '/posts'},
        {id: 3, title: 'Contacts', path: '/contacts'},
    ]

    return (
        <NavbarWrapper>
            <NavbarImage>
                <Image src='/fox.png' width='50px' height='50px' alt='Logo'/>
            </NavbarImage>
            <NavbarList>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? 'active': null}>{title}</a>
                    </Link>
                ))}
            </NavbarList>
        </NavbarWrapper>
    )
};
 
export default Navbar;