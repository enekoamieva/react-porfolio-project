//Global Styles
import GlobalStyle from './components/GlobalStyle';
//Components
import Nav from './components/Nav';
import ScrollTop from './components/ScrollTop';
//Pages
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import MovieDetail from './pages/MovieDetail';
//Router
import { Route, Switch, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';


function App() {

    //Necesitamos los valores de USELOCATION para poder hacer transiciones de EXIT en las diferentes páginas
    const location = useLocation();

    return (

        <div className="App">

            <GlobalStyle />
            <Nav />

            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
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
            </AnimatePresence>

            <ScrollTop />

        </div>
    );
}

export default App;
