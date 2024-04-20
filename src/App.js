import logo from "./logo.svg";
import "./App.css";
import Hero from "./componants/Hero/hero";
import Bio from "./componants/Bio/Bio";
import Skills from "./componants/Skills/Skills";
import Eductaion from "./componants/Education/Education";
import Footer from "./componants/Footer/footer";

import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
	return (
		<div className="App">
			<Hero />
      <Bio />
      <Skills />
      <Eductaion />
      <Footer />
		</div>
	);
}

export default App;
