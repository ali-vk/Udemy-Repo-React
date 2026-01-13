import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts";
// import componentsImg from "./assets/Components.png";
import { EXAMPLES } from "./data";
import Examples from "./components/Examples";

function App() {
  // let tabContent = 'Please click a button';

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;


