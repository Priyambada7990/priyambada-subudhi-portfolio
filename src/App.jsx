import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-gray-50'>
      <div id="about"></div>
      <Navbar />
      <div className="sections-container">
        <section>
          <About />
        </section>
        <div className="mb-10 w-full" id="education"></div>
        <div className='bg-white flex flex-col justify-center'>
          <section>
            <Education />
          </section>
          <div className="border-t-2 border-gray-350 mb-8 w-full" id="experience"></div>
          <section>
            <Experience />
          </section>
        </div>
        <div className="mb-10 w-full" id="publications"></div>
        <section>
          <Publications />
        </section>
        <div className='bg-white'>
          <section id="awards">
            <Awards />
          </section>
        </div>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
