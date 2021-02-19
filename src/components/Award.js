//Style Components
import styled from 'styled-components';

function Award({ title, description }) {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default Award;

const AwardStyle = styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }
`;