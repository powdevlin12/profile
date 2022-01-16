import './assets/css/App.css';
import Introduce from './components/Introduce';
import Project from './components/Project';
import React, { useState } from 'react';
import Contact from './components/Contact';
function App() {
  const [isIntro, setIsIntro] = useState(true);
  const [isContact, setIsContact] = useState(false);
  return (
    <div className="container">
      <div className="blur-bg"></div>
      <div className="App">
        <div className="avatar">
          <div className="avatar-img">
          </div>
          <p className='avatar-name'>Trần Thư Đạt</p>
          <p className='avatar-school'>Học Viện Công Nghệ Bưu Chính Viễn Thông</p>
          <button className='avatar-contact' onClick={()=>setIsContact(true)}>Liên hệ</button>
        </div>
        <div className="overview">
          <div className="navbar">
            <ul className='navbar-list'>
              <li className='navbar-item' onClick={() => setIsIntro(true)}>
                Giới thiệu
              </li>
              <li className='navbar-item' onClick={() => setIsIntro(false)}>
                Dự án
              </li>
            </ul>
          </div>
          <div>
            {isIntro === true ? <Introduce /> : <Project />}
          </div>
        </div>
        {isContact && <div className="cover_contact" onClick={()=>setIsContact(false)}>
        </div> }
        {isContact && <div className="contact">
              <Contact></Contact>
        </div>}
      </div>
    </div>
  );
}

export default App;
