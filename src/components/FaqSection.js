//Styled
import styled from 'styled-components';
import { AboutContainer } from '../styles';
import { AnimateSharedLayout } from 'framer-motion';

import Toggle from './Toggle';
import { fade } from '../animation';
//Use Scroll Hook
import { UseScrollHook } from './UseScrollHook';

function FaqSection() {

    const [element, controls] = UseScrollHook();

    return (
        <FaqContainer variants={fade} animate={controls} initial='hidden' ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>

            <div className="faqs">

                <AnimateSharedLayout>
                    <Toggle title='How Do I Start?'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                        </div>
                    </Toggle>


                    <Toggle title='Daily Schedule'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                        </div>
                    </Toggle>

                    <Toggle title='Diferent Payment Methods'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                        </div>
                    </Toggle>

                    <Toggle title='What products do you offe'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel delectus omnis facere perspiciatis placeat, aspernatur nihil dicta adipisci, cumque sunt illum, quae ullam tempora ipsa! Maiores dolore excepturi exercitationem!</p>
                        </div>
                    </Toggle>
                </AnimateSharedLayout>

            </div>

        </FaqContainer>
    );
}

export default FaqSection;

const FaqContainer = styled(AboutContainer)`

    span {
                        display: block;
    }

    h2 {
                        padding - bottom: 2rem;
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