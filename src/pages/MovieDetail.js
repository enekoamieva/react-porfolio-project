//State
import { useState, useEffect } from 'react';
//Style Components
import styled from 'styled-components';
//Link router
import { useHistory } from 'react-router-dom';
//Movies State
import MovieService from '../MovieService';
//Components
import Award from '../components/Award';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

function MovieDetail() {

    const history = useHistory();
    const historyUrl = history.location.pathname;

    //State
    const [movies, setMovies] = useState(MovieService);
    const [movie, setMovie] = useState({});
    const [changeState, setChangeState] = useState(false)


    //Use Effect
    useEffect(() => {
        const movieFind = movies.find(movieItem =>
            movieItem.url === historyUrl
        )
        setMovie(movieFind);
        setChangeState(true);
    }, [])

    console.log(movie.awards);


    return (

        <MovieDetailContainer variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.img} alt={movie.title} />
            </HeadLine>


            <Awards>
                {changeState && (
                    movie.awards.map(awardItem =>
                        <Award
                            title={awardItem.title}
                            description={awardItem.description}
                            key={awardItem.title}
                        />
                    )
                )

                }
            </Awards>



        </MovieDetailContainer >

    );
}

export default MovieDetail;


const MovieDetailContainer = styled(motion.div)`
    color: #fff;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;
`;