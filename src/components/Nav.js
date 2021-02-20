import styled from 'styled-components';
import { motion } from 'framer-motion';
//Link Route
import { Link, useLocation } from 'react-router-dom';

function Nav() {

    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1 className="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">
                        1. About us
                    </Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to="/work">
                        2. Our Work
                    </Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/work' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to="/contact">
                        3. Contact us
                    </Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
}

export default Nav;

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    .logo {
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        font-weight: 1.8rem;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        list-style-type: none;

        li {
            padding-left: 10rem;
            position: relative;
        }
    }

    
    @media(max-width: 1200px) {
        flex-flow: column wrap;
        padding: 1rem 0;

        ul {
            padding: 1rem;
            justify-content: space-around;
            width: 100%;

            li {
                padding: 0;
            }
        }
    }

`;

const Line = styled(motion.div)`
    position: absolute;
    bottom: -80%;
    left: 55%;
    width: 0;
    height: 0.3rem;
    background: #23d997;

    @media(max-width: 1200px) {
        left: 0;
    }
`;