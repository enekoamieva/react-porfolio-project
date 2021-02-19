//Style Components
import styled from 'styled-components';
//Link router
import { Link } from 'react-router-dom';
//Animations
import { motion } from 'framer-motion';
import { fade, imgAnimation, lineAnimation } from '../animation';

function Movie({ title, img, url }) {

    return (
        <MovieContainer>
            <motion.h2 variants={fade}>{title}</motion.h2>
            <motion.div className="line" variants={lineAnimation}></motion.div>
            <Link to={url}>
                <Hide>
                    <motion.img variants={imgAnimation} src={img} alt={title} />
                </Hide>
            </Link>
        </MovieContainer>
    );
}

export default Movie;

const MovieContainer = styled.div`
    padding-bottom: 10rem;

    h2 {
        padding: 1rem 0;
    }

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;