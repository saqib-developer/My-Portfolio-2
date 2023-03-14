import './App.css';
import { useEffect } from 'react'

function App() {

  const scrollIt = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header>
        <nav>
          <a href='/' onClick={(event) => { event.preventDefault(); }}><img src="img/IMG-20220530-WA0134_2.jpg" alt="logo" /></a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href='/' onClick={(event) => { event.preventDefault(); scrollIt('project-container'); }} >Projects</a></li>
            <li><a href='/' onClick={(event) => { event.preventDefault(); scrollIt('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="intro">
          <div className="img-container"><img src="img/Avatar.png" alt="" />
            <div className="name-arrow">
              <svg width="122" height="118" viewBox="0 0 122 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M22.4098 82.3962C22.4098 82.3962 22.4097 82.3963 22.5406 82.4697C22.612 82.6016 22.612 82.6016 22.612 82.6016L22.6194 82.5976L22.6419 82.5855L22.7304 82.5382C22.8083 82.4967 22.9232 82.436 23.071 82.3588C23.3665 82.2044 23.7933 81.9845 24.3184 81.7225C25.3686 81.1985 26.8109 80.5067 28.3798 79.8349C29.9492 79.1628 31.6423 78.5121 33.1948 78.0693C34.753 77.6248 36.1485 77.3961 37.1322 77.5499L37.1785 77.2535C36.1259 77.089 34.6764 77.3347 33.1125 77.7808C31.5429 78.2285 29.8369 78.8846 28.2617 79.5591C26.6859 80.2339 25.2381 80.9284 24.1844 81.4541C23.6575 81.717 23.229 81.9378 22.932 82.0929C22.9252 82.0964 22.9185 82.0999 22.9118 82.1034C22.9569 82.0199 23.0076 81.9253 23.0634 81.8204C23.3077 81.3614 23.6489 80.7059 24.0373 79.9196C24.8138 78.3475 25.78 76.2499 26.5355 74.1525C27.2892 72.0603 27.8407 69.9487 27.7722 68.356C27.7379 67.5586 27.5475 66.871 27.1285 66.3832C26.7048 65.8901 26.0675 65.6243 25.1923 65.6328L25.1952 65.9328C26.0048 65.9249 26.5483 66.1683 26.9009 66.5787C27.2582 66.9946 27.4396 67.6049 27.4725 68.3689C27.5383 69.8989 27.0053 71.9631 26.2533 74.0508C25.5031 76.1333 24.5424 78.2197 23.7684 79.7867C23.3815 80.5699 23.0416 81.2227 22.7986 81.6795C22.677 81.9079 22.5797 82.0873 22.5128 82.2096C22.4794 82.2707 22.4535 82.3175 22.4361 82.3489L22.4163 82.3845L22.4098 82.3962ZM22.5406 82.4697L22.612 82.6016L22.1564 82.8481L22.4098 82.3962L22.5406 82.4697Z"
                  fill="white" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M60.8032 46.1122C47.9197 53.0561 36.4217 62.8131 29.4708 74.0643L29.7261 74.2219C36.6424 63.0267 48.0951 53.3023 60.9455 46.3763C73.7959 39.4504 88.03 35.3303 100.5 35.3303V35.0303C87.9696 35.0303 73.6867 39.1684 60.8032 46.1122Z"
                  fill="white" />
              </svg>
              <div className="name">
                <span>Hello! I am </span><span style={{ color: '#7127BA' }}>Saqib</span>
              </div>
            </div>
          </div>
          <div className="img-discription">
            <span style={{ textDecorationLine: 'underline', fontSize: '17px' }}>A Developer who</span><br />

            <span className="head-cover">Judges a book <br />
              by its<span style={{ color: '#7127BA' }}>
                <div className="oval"></div>cover
              </span>...</span><br />
            <span style={{ fontSize: '14px' }}>Because if the cover does not impress you what else can?</span>
          </div>
        </div>

        <div className="para-1">
          <p><span style={{ fontSize: '50px', lineHeight: '46px' }}>I'm a Web Developer.</span><br />Currently, I'm working at
            <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noreferrer" style={{ color: '#00b22d' }}>Fiverr</a>,
          </p>
        </div>

        <div className="para-2">I specialize in creating custom websites using HTML, CSS, and JavaScript. My process
          involves working closely with you to understand your business, brand, and goals, and creating a website that
          not only looks great but is also functional, user-friendly and responsive.</div>

        <div className="work-details">Work Experience</div>
        <div className="up">
          <div className="card">
            <img src="img/icons/Html logo.png" alt="" />
            <div className="details">
              <h3>HTML5:</h3>
              <p>I have solid understanding about HTML. I
                have created many projects using it some are mentioned <a href='/'
                  onClick={(event) => { event.preventDefault(); scrollIt('project-container'); }} >Here</a>.</p>
              <button><a target="_blank" rel="noreferrer" href="https://html.com/">Learn More</a></button>
            </div>
          </div>

          <div className="card">
            <img src="img/icons/Css logo.png" alt="" />
            <div className="details">
              <h3>CSS3:</h3>
              <p>I have a great understanding of CSS, and am able to effectively style my HTML pages. Some
                projects that use it are mentioned <a href='/' onClick={(event) => { event.preventDefault(); scrollIt('project-container'); }} >Here</a>.</p>
              <button><a target="_blank" rel="noreferrer" href="https://web.dev/">Learn More</a></button>
            </div>
          </div>
        </div>
        <div className="dow">
          <div className="card">
            <img src="img/icons/javascript logo.png" alt="" />
            <div className="details">
              <h3>JAVASCRIPT:</h3>
              <p>I have recently learned it but am able to develop dynamic and interactive web applications.
                Projects using it are mentioned <a href='/' onClick={(event) => { event.preventDefault(); scrollIt('project-container'); }} >Here</a>.</p>
              <button><a target="_blank" rel="noreferrer" href="https://www.javascript.com/">Learn More</a></button>
            </div>
          </div>

          <div className="card">
            <img src="img/icons/react logo.png" alt="" />
            <div className="details">
              <h3>REACT:</h3>
              <p>I have just learned React and can create functional based Components with no problem. Some
                projects that use it are mentioned <a href='/' onClick={(event) => { event.preventDefault(); scrollIt('project-container'); }} >Here</a>.</p>
              <button><a target="_blank" rel="noreferrer" href="https://reactjs.org/">Learn More</a></button>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="para-3">
            I'm currently working on <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noreferrer"
              style={{ color: '#00b22d' }}>Fiverr</a>. I have created many projects of my own and some projects for my
            firends.
            Some are mentioned <a href='/' onClick={(event) => { event.preventDefault(); scrollIt('project-container'); }} >Here</a>.
          </div>
        </div>

        <div className="project-container" id="project-container">
          <h3>Featured Projects</h3>
          <a target="_blank" rel="noreferrer" href="https://msntictactoe.netlify.app/">
            <div id='pro-1' className="project">
              <h4>TicTacToe</h4>
              <div className="pro-detail">
                <p>Just a simple game that I really was inspired as a kid. Other than making it fully functional
                  i
                  really paid attention to the look of it. Have a try.</p>
                <img src="img/TicTacToe pic.png" alt="" />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://saqibsaqib123.github.io/Clock/">
            <div className="project">
              <h4>Clock</h4>
              <div className="pro-detail grp-2">
                <p>An analogue clock that shows current time. It can also be converted to digital clock.</p>
                <img style={{ right: '-15px', boxShadow: '4px -6px 20px 0px #0084ff' }} src="img/Clock.png" alt="" />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://saqibsaqib123.github.io/Quadratic-Equations/">
            <div className="project">
              <h4>Quadartic Equation</h4>
              <div className="pro-detail">
                <p>This was my dream to make an Quadartic Calculator so I gave it a try. It is not full ready
                  and is in development will be ready soon.</p>
                <img src="img/Quadratic Equ.png" alt="" />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://mtouseef-portfolio.netlify.app/">
            <div className="project">
              <h4>Friend Portfolio</h4>
              <div className="pro-detail grp-2">
                <p>My friend who is a Game Developer asked me to make a Portfolio of his own to showcase his
                  projects and skills.</p>
                <img style={{ right: '-15px', boxShadow: '4px -6px 20px 0px #9e00ff' }} src="img/Friend-project.png"
                  alt="" />
              </div>
            </div>
          </a>

        </div>

        <div className="contact" id="contact">
          <span>Contact Me</span>
          <p>If you want to discuss any thing related to web development dont't hesitate to contact me.</p>
          <div className="logos">
            <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noopener noreferrer"><img
              src="img/icons/fiverr-logo.png" alt="" /></a>
            <a href="mailto:muhammadsaqib8379@gmail.com" target="_blank" rel="noopener noreferrer"><img
              src="img/icons/email-logo.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/muhammad-saqib-nawaz-868871257/" target="_blank"
              rel="noopener noreferrer"><img src="img/icons/linkledn-logopng.png" alt="" /></a>
          </div>
        </div>
      </main>
    </ >
  );
}

export default App;
