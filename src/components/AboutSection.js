import home1 from '../img/home1.png';
import { AboutContainer, Description, Hide, Image } from '../styles';

function AboutSection() {
    return (
        <AboutContainer>
            <Description>

                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>

                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>

                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>

                <p>Contact us for any photography or videography ideas that you have. We have profesionals with amazing skills.</p>
                <button>Contact us</button>
            </Description>

            <Image>
                <img src={home1} alt="home-image" />
            </Image>

        </AboutContainer>
    );
}

export default AboutSection;