import styled from 'styled-components';
//Link Route
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <StyledNav>
            <h1 className="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">
                        1. About us
                    </Link>
                </li>
                <li>
                    <Link to="/work">
                        2. Our Work
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        3. Contact us
                    </Link>
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

`;