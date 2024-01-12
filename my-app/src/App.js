import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";

function App() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 45, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const scrollIt = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  //pro-1
  const elements = [
    {
      id: "html-card",
      ref: useRef(null),
      initialTransform: "translateX(-60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "css-card",
      ref: useRef(null),
      initialTransform: "translateX(60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "js-card",
      ref: useRef(null),
      initialTransform: "translateX(60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "react-card",
      ref: useRef(null),
      initialTransform: "translateX(-60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "amazon",
      ref: useRef(null),
      initialTransform: "translateX(-60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "chatty",
      ref: useRef(null),
      initialTransform: "translateX(60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "friend-port",
      ref: useRef(null),
      initialTransform: "translateX(-60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "tictactoe",
      ref: useRef(null),
      initialTransform: "translateX(60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "clock",
      ref: useRef(null),
      initialTransform: "translateX(-60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
    {
      id: "calculator",
      ref: useRef(null),
      initialTransform: "translateX(60%)",
      visibleTransform: "translateX(0%)",
      initialOpacity: "0",
      visibleOpacity: "1",
      threshold: 0.3,
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    if (windowWidth > 475) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const { target } = entry;
            const { initialTransform, visibleTransform, initialOpacity, visibleOpacity } = elements.find((e) => e.ref.current === target);

            if (entry.isIntersecting) {
              target.style.transform = visibleTransform;
              target.style.opacity = visibleOpacity;
            } else {
              target.style.transform = initialTransform;
              target.style.opacity = initialOpacity;
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: elements.map((e) => e.threshold),
        }
      );

      elements.forEach((element) => {
        if (element.ref.current) {
          observer.observe(element.ref.current);
        }
      });

      return () => {
        elements.forEach((element) => {
          if (element.ref.current) {
            observer.unobserve(element.ref.current);
          }
        });
      };
    } else {
      elements.forEach((element) => {
        console.log(element.id);
        document.getElementById(element.id).style.transform = "translateX(0%)";
        document.getElementById(element.id).style.opacity = 1;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const text = `Hello! I am `;
  const typingSpeed = 70;
  const [displayText, setDisplayText] = useState("");
  const [go, setGo] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalId);
        setGo(true);
      }
    }, typingSpeed);
  }, [text, typingSpeed]);

  const text2 = `Saqib`;
  const [displayText2, setDisplayText2] = useState("");

  useEffect(() => {
    if (go) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setDisplayText2(text2.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > text2.length) {
          clearInterval(intervalId);
          setGo2(true);
        }
      }, typingSpeed);
    }
  }, [go, text2, typingSpeed]);

  const text3 = `I'm a Web Developer.`;
  const [displayText3, setDisplayText3] = useState("");
  const [go2, setGo2] = useState(false);

  useEffect(() => {
    if (go2) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setDisplayText3(text3.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > text3.length) {
          clearInterval(intervalId);
        }
      }, typingSpeed);
    }
  }, [go2, text3, typingSpeed]);

  return (
    <>
      <header>
        <nav>
          <a href="/">
            <img src="img\Screenshot_20230503-190452.jpg" alt="logo" loading="lazy" />
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  scrollIt("project-container");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  scrollIt("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="intro">
          <div className="img-container">
            <img src="img/Avatar.png" alt="" loading="lazy" />
            <div className="name-arrow">
              <svg width="122" height="118" viewBox="0 0 122 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.4098 82.3962C22.4098 82.3962 22.4097 82.3963 22.5406 82.4697C22.612 82.6016 22.612 82.6016 22.612 82.6016L22.6194 82.5976L22.6419 82.5855L22.7304 82.5382C22.8083 82.4967 22.9232 82.436 23.071 82.3588C23.3665 82.2044 23.7933 81.9845 24.3184 81.7225C25.3686 81.1985 26.8109 80.5067 28.3798 79.8349C29.9492 79.1628 31.6423 78.5121 33.1948 78.0693C34.753 77.6248 36.1485 77.3961 37.1322 77.5499L37.1785 77.2535C36.1259 77.089 34.6764 77.3347 33.1125 77.7808C31.5429 78.2285 29.8369 78.8846 28.2617 79.5591C26.6859 80.2339 25.2381 80.9284 24.1844 81.4541C23.6575 81.717 23.229 81.9378 22.932 82.0929C22.9252 82.0964 22.9185 82.0999 22.9118 82.1034C22.9569 82.0199 23.0076 81.9253 23.0634 81.8204C23.3077 81.3614 23.6489 80.7059 24.0373 79.9196C24.8138 78.3475 25.78 76.2499 26.5355 74.1525C27.2892 72.0603 27.8407 69.9487 27.7722 68.356C27.7379 67.5586 27.5475 66.871 27.1285 66.3832C26.7048 65.8901 26.0675 65.6243 25.1923 65.6328L25.1952 65.9328C26.0048 65.9249 26.5483 66.1683 26.9009 66.5787C27.2582 66.9946 27.4396 67.6049 27.4725 68.3689C27.5383 69.8989 27.0053 71.9631 26.2533 74.0508C25.5031 76.1333 24.5424 78.2197 23.7684 79.7867C23.3815 80.5699 23.0416 81.2227 22.7986 81.6795C22.677 81.9079 22.5797 82.0873 22.5128 82.2096C22.4794 82.2707 22.4535 82.3175 22.4361 82.3489L22.4163 82.3845L22.4098 82.3962ZM22.5406 82.4697L22.612 82.6016L22.1564 82.8481L22.4098 82.3962L22.5406 82.4697Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.8032 46.1122C47.9197 53.0561 36.4217 62.8131 29.4708 74.0643L29.7261 74.2219C36.6424 63.0267 48.0951 53.3023 60.9455 46.3763C73.7959 39.4504 88.03 35.3303 100.5 35.3303V35.0303C87.9696 35.0303 73.6867 39.1684 60.8032 46.1122Z"
                  fill="white"
                />
              </svg>
              <div className="name">
                <span>{displayText}</span>
                <span style={{ color: "#7127BA" }}>{displayText2}</span>
              </div>
            </div>
          </div>
          <div className="img-discription">
            <span
              style={{
                textDecorationLine: "underline",
                fontSize: "17px",
              }}
            >
              A Developer who
            </span>
            <br />

            <span className="head-cover">
              Judges a book <br />
              by its{" "}
              <span style={{ color: "#7127BA" }}>
                <div className="oval"></div>cover
              </span>
              ...
            </span>
            <br />
            <span style={{ fontSize: "14px" }}>Because if the cover does not impress you what else can?</span>
          </div>
        </div>

        <div className="para-1">
          <p>
            <span style={{ fontSize: "50px", lineHeight: "46px" }}>{displayText3}</span>
            <br />
            Currently, I'm working at
            <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noreferrer" style={{ color: "#00b22d" }}>
              {" "}
              Fiverr
            </a>
            ,
          </p>
        </div>

        <div className="para-2">
          I specialize in creating custom websites using HTML, CSS, and JavaScript. With a meticulous approach, I work closely with clients to
          understand their unique businesses, brand, and goals. By combining your vision with my technical expertise, I can create websites that not
          only have visually stunning designs but are also functional, user-friendly, and responsive across all devices. My goal is to deliver an
          exceptional online presence that engages your target audience and helps you achieve your digital objectives.
        </div>

        <div className="work-details">Work Experience</div>
        <div className="up">
          <Tilt options={defaultOptions}>
            <div key={elements[0].id} id={elements[0].id} ref={elements[0].ref} className="card">
              <img src="img/icons/Html logo.png" alt="" loading="lazy" />
              <div className="details">
                <h3>HTML5:</h3>
                <p>
                  Proficient in creating the structure and layout of web pages using HTML, ensuring proper content hierarchy and semantic markup for
                  enhanced accessibility and search engine optimization.
                </p>
                <button>
                  <a target="_blank" rel="noreferrer" href="https://html.com/">
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </Tilt>

          <Tilt options={defaultOptions}>
            <div key={elements[1].id} id={elements[1].id} ref={elements[1].ref} className="card">
              <img src="img/icons/Css logo.png" alt="" loading="lazy" />
              <div className="details">
                <h3>CSS3:</h3>
                <p>
                  Skilled in applying CSS styles and design principles to create visually appealing and responsive websites, leveraging selectors,
                  flexbox, grid, and animations for a captivating user experience.
                </p>
                <button>
                  <a target="_blank" rel="noreferrer" href="https://web.dev/learn/css/">
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="dow">
          <Tilt options={defaultOptions}>
            <div key={elements[2].id} id={elements[2].id} ref={elements[2].ref} className="card">
              <img src="img/icons/javascript logo.png" alt="" loading="lazy" />
              <div className="details">
                <h3>JAVASCRIPT:</h3>
                <p>
                  Experienced in JavaScript, enabling dynamic and interactive web functionality, including event handling, DOM manipulation, AJAX, and
                  utilizing libraries and frameworks for efficient development.
                </p>
                <button>
                  <a target="_blank" rel="noreferrer" href="https://www.javascript.com/">
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div key={elements[3].id} id={elements[3].id} ref={elements[3].ref} className="card">
              <img src="img/icons/react logo.png" alt="" loading="lazy" />
              <div className="details">
                <h3>REACT:</h3>
                <p>
                  Experienced in React, I specialize in crafting modular, responsive interfaces. Proficient in state management and API integration, I
                  deliver dynamic web applications with a focus on user experience.
                </p>
                <button>
                  <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="experience">
          <div className="para-3">
            I have successfully completed numerous projects, including personal endeavors and collaborations with clients on{" "}
            <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noreferrer" style={{ color: "#00b22d" }}>
              Fiverr
            </a>
            . I take pride in my work, and you can explore a selection of these projects{" "}
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                scrollIt("project-container");
              }}
            >
              Here
            </a>
            .
          </div>
        </div>

        <div className="project-container" id="project-container">
          <h3>Featured Projects</h3>

          <a target="_blank" rel="noreferrer" href="https://amazon-clone-saqib.netlify.app/">
            <div key={elements[4].id} id={elements[4].id} ref={elements[4].ref} className="project">
              <h4>Amazon Clone</h4>
              <div className="pro-detail">
                <p>
                  I have developed a feature-rich Amazon clone website that incorporates essential functionalities such as a seamless cart option, ad
                  posting capabilities, and user account management using Firebase's robust database and authentication services.{" "}
                  <span className="link">Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
                </p>
                <img
                  style={{
                    boxShadow: "-6px -6px 13px #ffffff69",
                  }}
                  src="img/Amazon-clone.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://chatty-saqib.netlify.app/">
            <div key={elements[5].id} id={elements[5].id} ref={elements[5].ref} className="project">
              <h4>Chatty</h4>
              <div className="pro-detail">
                <p>
                  Chatty is a react based web app that allows you to have casual conversations with friends and family or anyone for that matter.
                  Chatty is a great way to stay connected with your loved ones, no matter where they are in the world. It uses firesbase for
                  Authentication, Database and Storage purposes <span className="link">Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
                </p>
                <img
                  style={{
                    boxShadow: "-6px -6px 13px #ffffff69",
                  }}
                  src="img/Chatty.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://mtouseef-portfolio.netlify.app/">
            <div key={elements[6].id} id={elements[6].id} ref={elements[6].ref} className="project">
              <h4>Friend Portfolio</h4>
              <div className="pro-detail">
                <p>
                  I have designed a captivating portfolio showcasing my friend's expertise as a game developer. The portfolio includes a
                  Firebase-integrated database, allowing him to effortlessly upload and showcase his impressive projects to demonstrate his skills and
                  creativity in the gaming industry. <span className="link">Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
                </p>
                <img style={{ boxShadow: "-6px -6px 13px #9400c680" }} src="img/Friend-project.png" alt="" loading="lazy" />
              </div>
            </div>
          </a>
          <h3>Others Projects</h3>

          <a target="_blank" rel="noreferrer" href="https://msntictactoe.netlify.app/">
            <div key={elements[7].id} id={elements[7].id} ref={elements[7].ref} className="project">
              <h4>Tic Tac Toe</h4>
              <div className="pro-detail">
                <p>
                  I have crafted a dynamic Tic Tac Toe game that provides an engaging experience for two players. With its intuitive interface and
                  smooth gameplay, this project showcases my ability to design and develop interactive games that entertain and challenge players.{" "}
                  <span className="link">Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
                </p>
                <img src="img/TicTacToe pic.png" alt="" loading="lazy" />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://saqibsaqib123.github.io/Clock/">
            <div key={elements[8].id} id={elements[8].id} ref={elements[8].ref} className="project">
              <h4>Clock</h4>
              <div className="pro-detail">
                <p>
                  I have crafted a visually stunning analogue clock that elegantly displays the current time. Experience the timeless charm of a
                  traditional clock with this captivating and functional design. <span className="link">Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
                </p>
                <img src="img/Clock.png" alt="" loading="lazy" />
              </div>
            </div>
          </a>

          <a target="_blank" rel="noreferrer" href="https://saqibsaqib123.github.io/Calculator/">
            <div key={elements[9].id} id={elements[9].id} ref={elements[9].ref} className="project">
              <h4>Calculator</h4>
              <div className="pro-detail">
                <p>
                  A React-based web app calculator is a simple and easy-to-use calculator that is built with the React JavaScript library. It allows
                  users to perform basic and advanced calculations, such as addition, subtraction, multiplication, division, and more.{" "}
                  <span className="link">Click&nbsp;to&nbsp;View&nbsp;{">"}</span>
                </p>
                <img src="img/Calculator.png" alt="" loading="lazy" />
              </div>
            </div>
          </a>
        </div>

        <div className="contact" id="contact">
          <span>Contact Me</span>
          <p>If you want to discuss any thing related to web development dont't hesitate to contact me.</p>

          <div className="logos">
            <a href="https://www.fiverr.com/share/pAR6Eo" target="_blank" rel="noopener noreferrer">
              <img src="img/icons/fiverr-logo.png" alt="" />
            </a>
            <a href="mailto:muhammadsaqib8379@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="img/icons/email-logo.png" alt="" style={{ borderRadius: 0 }} />
            </a>
            <a href="https://www.linkedin.com/in/saqib-web-dev/" target="_blank" rel="noopener noreferrer">
              <img src="img/icons/linkledn-logopng.png" alt="" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
