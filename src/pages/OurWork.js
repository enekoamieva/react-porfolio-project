//Style Components
import styled from 'styled-components';
//Movies Service
import MoviesService from '../MovieService';
//Component
import Movie from '../components/Movie';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, slider, sliderContainer } from '../animation';


function OurWork() {

    return (
        <WorkContainer variants={pageAnimation} initial="hidden" animate="show" exit="exit">

            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            {
                MoviesService.map(movieItem =>
                    <Movie
                        title={movieItem.title}
                        img={movieItem.img}
                        url={movieItem.url}
                        key={movieItem.title}
                    />
                )
            }
        </WorkContainer>
    );
}

export default OurWork;

const WorkContainer = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: #fff;
    
    @media(max-width: 1200px) {
        padding: 2rem 2rem;
    }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 12%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb; 
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff; 
`;

const Frame4 = styled(Frame1)`
    background: #8effa0; 
`;