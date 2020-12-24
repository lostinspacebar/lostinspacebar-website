import './App.css';
import TextCycler from './components/TextCycler';

function App() {
    const interests = ['\'m an engineer', '\'m a developer', '\'m a designer', ' like to sleep in the woods', ' make my own gear', ' like to run long distances', ' like to bike in the dirt and rain', ' like to snowboard', ' am ok at archery']
    return (
        <div id="main-container">
            <header>
                <h1>
                    <a class="main-logo" href="/" title="LOST.IN.SPACEBAR 2020"><span class="hidden">LOST.IN.SPACEBAR</span></a>
                </h1>
                <p class="brief">
                    <b>Hello! My name is Aditya Gaddam.<br />I<TextCycler choices={interests} />.</b><br />
                     You can download my <a href="/files/resume_aditya_gaddam_2020.pdf" title="Download Resume (PDF)">resume here</a>.
                </p>
            </header>
            <main>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default App;
