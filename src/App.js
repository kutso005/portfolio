import Aos from 'aos';
import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Main from './components/Main';
import Programms from './components/Programms';
import Projects from './components/Projects';
import Section from './components/section';
import Skills from './components/Skills';

function App() {
  Aos.init();
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Main/>
      <AboutMe/>
      <Programms/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
