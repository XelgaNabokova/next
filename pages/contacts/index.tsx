import { FC, useEffect, useState } from "react";
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from "@emotion/styled";
import Heading from "../../components/Heading";
import { contactType } from "../../components/types";
import contactsStore from "../../store/contactsStore";
import { observer } from "mobx-react-lite";


const ContactsTitle = styled.div`
    display: flex;
    align-items: center;
    & > h1 {
        margin-right: 1rem;
    }
`

const ContactsButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: bisque;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`

const ContactsForm = styled.form`
    & > input {
        width: 100%;
        font-size: 1.2rem;
        margin: 0.3rem;
        padding: 0.5rem;
        border: 1px solid #d94821;
    }
`

const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
`

const ContactsItem = styled.li`
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

type ContactsTypeProps = {
    contacts: [contactType],
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
}

const Contacts:FC<ContactsTypeProps> = observer(({ contacts }) => {
    const [value, setValue] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        contactsStore.getContacts(contacts);
    }, [contacts])

    const handleSubmit = (e) => {
        e.preventDefault();
        contactsStore.addContacts(value);
        setValue('');
        setIsActive(false);
    }

    return (
        <>
            <Head><title>Contacts</title></Head>
            <ContactsTitle>
                <Heading text='Contacts list'/>
                <ContactsButton onClick={() => setIsActive(!isActive)}>+</ContactsButton>
            </ContactsTitle>
            <ContactsList>
                {isActive ? 
                    <ContactsForm onSubmit={(e) => handleSubmit(e)}>
                        <input onChange={(e) => setValue(e.target.value)}/> 
                    </ContactsForm>
                    : null
                }
                {contactsStore.contacts.map(({ id, name }) => (
                    <ContactsItem key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </ContactsItem>
                ))}
                {/* {contacts && contacts.map(({ id, name }) => (
                    <ContactsItem key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </ContactsItem>
                ))} */}
            </ContactsList>
        </>
    )
});
   
export default Contacts;