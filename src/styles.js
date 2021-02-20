import { motion } from 'framer-motion';
//Styled
import styled from 'styled-components';

//Styled Components
export const AboutContainer = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;

    @media(max-width: 1200px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;

    h2 {
        font-weight: lighter;
    }

    @media(max-width: 1200px) {
        padding: 0;
        margin-bottom: 4rem;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hiden;
`;