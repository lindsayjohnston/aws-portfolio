import styles from './App.module.scss';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
       <Menu />
       <Home />
       <Projects />
       <About />
       <Contact />
    </div>
  );
}

export default App;
