import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Skills from './components/Skills/Skills';
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Works />
      <Skills />
      <Contacts/>
    </div>
  );
}

export default App;