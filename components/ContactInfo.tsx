import { FC } from "react";
import styled from "@emotion/styled";
import Heading from "./Heading";
import { contactType } from "./types";

const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ContactInfoEmail = styled.div`
    display: flex;
    & > strong {
        margin-right: .5rem;
    }
`

type ContactInfoProps = {
    contact: contactType
}

const ContactInfo:FC<ContactInfoProps> = ({ contact }) => {
    const {name, email} = contact || {};

    if(!contact) {
        return <Heading tag='h2' text='Empty contact' />
    }

    return (
        <ContactInfoWrapper>
            <Heading tag='h2' text={name} />
           <ContactInfoEmail>
               <strong>Email: </strong>
               {email}
           </ContactInfoEmail>
        </ContactInfoWrapper>
    )
};
   
export default ContactInfo;