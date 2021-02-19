//Style Components
import styled from 'styled-components';
//Movies Service
import MoviesService from '../MovieService';
//Component
import Movie from '../components/Movie';


function OurWork() {


    return (
        <WorkContainer>
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

const WorkContainer = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

