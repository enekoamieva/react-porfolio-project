//Style Components
import styled from 'styled-components';
//Link router
import { Link } from 'react-router-dom';

function Movie({ title, img, url }) {

    return (
        <MovieContainer>
            <h2>{title}</h2>
            <div className="line"></div>
            <Link to={url}>
                <img src={img} alt={title} />
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
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;