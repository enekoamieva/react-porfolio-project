//Global Styles
import GlobalStyle from './components/GlobalStyle';
//Components
import Nav from './components/Nav';
//Pages
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import MovieDetail from './pages/MovieDetail';
//Router
import { Route, Switch } from 'react-router-dom';


function App() {
    return (

        <div className="App">

            <GlobalStyle />
            <Nav />

            <Switch>
                <Route path="/" exact>
                    <About />
                </Route>

                <Route path="/work" exact>
                    <OurWork />
                </Route>

                <Route path="/work/:id">
                    <MovieDetail />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

            </Switch>

        </div>
    );
}

export default App;
