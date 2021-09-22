import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact";
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Menu from "./components/menu/Menu";
import './app.scss'
import { useState } from 'react'

function App() {
    const [menuOpen, setMenuOpen] = useState(true);
    return (

        <div className='app' >
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <div className="footer">
                    <Contact />
                </div>
            </div>

        </div>
    );
}

export default App;