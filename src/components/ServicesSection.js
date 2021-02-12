//Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//Styled
import styled from 'styled-components';
import { AboutContainer, Description, Image } from '../styles';

function ServicesSection() {
    return (
        <ServicesContainer>
            <Description>

                <h2>High <span>quality</span> services</h2>

                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Diaphrahm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit</p>
                    </Card>
                </Cards>

            </Description>

            <Image>
                <img src={home2} alt="home-image" />
            </Image>

        </ServicesContainer>
    );
}

const ServicesContainer = styled(AboutContainer)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const Card = styled.div`
    flex-basis: calc(50% - 20px);

    @media(max-width: 1050px) {
        flex-basis: calc(100% - 20px);    
    }
    

    .icon {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        h3 {
            margin-left: 0.5rem;
            padding: 0.5rem;
            background: #fff;
            color: #000;
        }


    }

`;

export default ServicesSection;
