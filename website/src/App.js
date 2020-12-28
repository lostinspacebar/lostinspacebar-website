import './App.css';
import React from 'react';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomePage from './components/HomePage';
import TextCycler from './components/TextCycler';
import ProjectListPage from './components/ProjectListPage';

function App() {
    const interests = ['\'m an engineer', '\'m a developer', '\'m a designer', ' like to sleep in the woods', ' make my own gear', ' like to run in the rain', ' like to bike in the dirt', ' like to snowboard', '\'m ok at archery']
    return (
        <BrowserRouter>
        <div id="main-container">
            <header>
                <h1>
                    <Link className="main-logo" to="/" title="LOST.IN.SPACEBAR 2020"><span className="hidden">LOST.IN.SPACEBAR</span></Link>
                </h1>
                <p className="brief">
                    <b>Hello! My name is Aditya Gaddam.<br />I<TextCycler choices={interests} />.</b><br />
                     You can download my <a href="/files/resume_aditya_gaddam_2020.pdf" title="Download Resume (PDF)">resume here</a>.
                </p>
            </header>
            <main>
                <Route render={({location}) => {
                    return (
                        <TransitionGroup className="main-content-transition-group">
                            <CSSTransition key={location.key} timeout={600} classNames="content-transition">
                                <div className="main-content-transition-container">
                                    <Switch location={location}>
                                        <Route path="/projects" component={ProjectListPage} />
                                        <Route path="/" component={HomePage} />
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    );
                }} />
            </main>
            <footer>
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;
