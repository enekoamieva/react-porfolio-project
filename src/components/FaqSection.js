//Styled
import styled from 'styled-components';
import { AboutContainer } from '../styles';

function FaqSection() {
    return (
        <FaqContainer>
            <h2>Any Questions <span>FAQ</span></h2>

            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>Diferent Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                </div>
            </div>
            <div className="faq-line"></div>

            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                </div>
            </div>
            <div className="faq-line"></div>

        </FaqContainer>
    );
}

export default FaqSection;

const FaqContainer = styled(AboutContainer)`

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0;

        p {
            padding: 1rem 0;
        }
    }

`;