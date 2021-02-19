//Styled
import styled from 'styled-components';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


function Contact() {
    return (
        <ContactContainer variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>Contact</h1>
        </ContactContainer>
    );
}

export default Contact;

const ContactContainer = styled(motion.div)`
    background: #fff;
`;
