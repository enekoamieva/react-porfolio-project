//Styled
import styled from 'styled-components';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';


function Contact() {
    return (
        <ContactContainer variants={pageAnimation} initial="hidden" animate="show" exit="exit">

            <Title>
                <Hide>
                    <motion.h1 variants={titleAnimation}>Get in touch.</motion.h1>
                </Hide>
            </Title>

            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <a><h2>Send us A Message</h2></a>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <a><h2>Send us An Email</h2></a>
                </Social>
            </Hide>
            <Hide>
                <Social variants={titleAnimation}>
                    <Circle />
                    <a><h2>Social Media</h2></a>
                </Social>
            </Hide>

        </ContactContainer>
    );
}

export default Contact;

const ContactContainer = styled(motion.div)`
    background: #fff;
    color: #353535;
    min-height: 90vh;
    padding: 5rem 10rem;

    
    @media(max-width: 1200px) {
        padding: 2rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    h2 {
        margin: 2rem;
        @media(max-width: 1200px) {
            font-size: 2.8rem;
        }
    }
`;