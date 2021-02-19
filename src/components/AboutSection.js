import home1 from '../img/home1.png';
import { AboutContainer, Description, Hide, Image } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation, fade, imgAnimation } from '../animation';
//Componentes
import Wave from './Wave';


function AboutSection() {



    return (
        <AboutContainer>
            <Description>

                <div>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >
                            We work to make
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </div>

                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have profesionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>

            <Image>
                <motion.img src={home1} alt="home-image" variants={imgAnimation} />
            </Image>

            <Wave />

        </AboutContainer>
    );
}

export default AboutSection;