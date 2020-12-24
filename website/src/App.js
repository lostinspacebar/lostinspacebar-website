import './App.css';
import TextCycler from './components/TextCycler';

function App() {
    const interests = ['an engineer', 'a developer', 'a designer', 'a backpacker', 'a runner', 'a backpacker', 'a snowboarder', 'an archer']
    return (
        <div id="main-container">
            <header>
                <h1>
                    <a class="main-logo" href="/" title="LOST.IN.SPACEBAR 2020"><span class="hidden">LOST.IN.SPACEBAR</span></a>
                </h1>
                <p class="brief">
                    <b>Hello! My name is Aditya Gaddam.<br />I'm <TextCycler choices={interests} />.</b><br />
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
