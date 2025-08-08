import { useState, useEffect, useRef } from 'react'
import './App.css'

function Line({ number, isActive, onMouseEnter }: { number: number, isActive: boolean, onMouseEnter: () => void }) {
    return (
        <div className="line" onMouseEnter={onMouseEnter}>
            <p className="line-num">{number}</p>
            <div className={`highlight ${isActive ? 'active' : ''}`}>
                <div className="cursor"></div>
            </div>
        </div>
    );
}

function Lines({selected, isStart}:{selected: string; isStart:boolean}): JSX.Element {
    const [lineCount, setLineCount] = useState<number>(0);
    const [activeLineIndex, setActiveLineIndex] = useState<number>(0);

    useEffect(() => {
        const lineHeight = 24;
        const mainEl = document.querySelector('main');

        const calcLines = () => {
            const contentHeight = mainEl?.scrollHeight || document.body.scrollHeight;

            let targetParts = Math.floor((contentHeight + lineHeight) / lineHeight);
            if (targetParts % 2 !== 0) targetParts -= 1;

            setLineCount(targetParts);
            setActiveLineIndex(0);
        }
        calcLines();

        const resizeObserver = new ResizeObserver(calcLines);
        resizeObserver.observe(mainEl);

        window.addEventListener('resize', calcLines); 
        return () => {
            window.removeEventListener('resize', calcLines);
            resizeObserver.disconnect();
        }
    }, [selected, isStart]);

    const lines = [];
    for (let i = 0; i < lineCount; i++) {
        lines.push(
            <Line
                key={i}
                number={i + 1}
                isActive={i === activeLineIndex}
                onMouseEnter={() => setActiveLineIndex(i)} />
        );
    }

    return (
        <div className="lines">
            {lines}
        </div>
    );
}

function Welcome() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [topOffset, setTopOffset] = useState<number>(0);

    useEffect(() => {
        const calcTop = () => {
            const wrapper = wrapperRef.current;
            const lineHeight = 24;

            if (wrapper) {
                const mainHeight = document.querySelector('main')?.clientHeight || window.innerHeight;
                const wrapperHeight = wrapper.clientHeight;

                const rawTop = (mainHeight - wrapperHeight) / 2;
                const snappedTop = Math.round(rawTop / lineHeight) * lineHeight;

                setTopOffset(snappedTop);
            }
        }

        calcTop();
        window.addEventListener('resize', calcTop);
        return () => window.removeEventListener('resize', calcTop);
    }, []);

    return (
        <div 
        className="wrapper welcome"
        ref={wrapperRef}
        style={{top: `${topOffset}px`}}
        >
            <div className="head">Carlo's Portfolio v0.1.0</div>
            <div className="command">
                <span>type: :help<span>&lt;Enter&gt;</span></span>
                <span>type: i<span>&lt;Enter&gt;</span></span>
                <span>type: q<span>&lt;Enter&gt;</span></span>
                <span>type: resume<span>&lt;Enter&gt;</span></span>
            </div>
            <div className="desc">
                <p>if you're new!</p>
                <p>to view</p>
                <p>to exit</p>
                <p>download resume</p>
            </div>
        </div>
    );
}

function NavigationButtons({
        selected,
        setSelected,
    }:{
        selected: string;
        setSelected: React.Dispatch<React.SetStateAction<string>>;
    }){


    return(
        <nav>
            <button 
            className={selected === "home" ? 'selected' : ''}
            onClick={() => setSelected("home")}
            >(1) Home</button>

            <button 
            className={selected === "projects" ? 'selected' : ''}
            onClick={() => setSelected("projects")}
            >(2) Projects</button>

            <button 
            className={selected === "about" ? 'selected' : ''}
            onClick={() => setSelected("about")}
            >(3) About</button>
        </nav>
    );
}

function Header() {
    return (
        <>
            <div className="banner">
                <pre className="my-name">
{` ██████╗ █████╗ ██████╗ ██╗      ██████╗ 
██╔════╝██╔══██╗██╔══██╗██║     ██╔═══██╗
██║     ███████║██████╔╝██║     ██║   ██║
██║     ██╔══██║██╔══██╗██║     ██║   ██║
╚██████╗██║  ██║██║  ██║███████╗╚██████╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝
`}
                </pre>
                <div className="my-title">"Student Developer"</div>
                <div className="self-intro">I’m a student working toward becoming a software engineer, with an interest in both front-end and back-end development for web and other systems. I enjoy tackling challenges, thinking through problems carefully, and collaborating with others to find effective solutions.</div>
            </div>
        </>
    );
}

function Home(){
   return(
    <div className="home page-content">
        <section>
            <h1>Welcome to carlo.dev</h1>
            <p className="filler">=======================================</p>
            <p>Hi there! I'm glad you're here.</p>
            <p>
                This site is my personal space to explore and share my work as a student
                developer. I'm passionate about full-stack development and systems programming.
            </p>
        </section>

        <section>
            <h1>📌 Quick Stats</h1>
            <p className="filler">=======================================</p>
            <ul>
                <li>Projects: 2 active</li>
                <li>Current Task: Writing this portfolio</li>
                <li>Last Updated: August 2025</li>
            </ul>
        </section>

        <section>
            <h1>🚀 Current Goals</h1>
            <p className="filler">=======================================</p>
            <ul>
                <li>✅ Finish building this portfolio site</li>
                <li>📝 Publish my social media app</li>
                <li>📦 Try deploying more projects</li>
                <li>🔍 Learn MERN stack</li>
            </ul>
        </section>
    </div>
   ); 
}

function Projects(){
   return(
    <div className="projects page-content">
        <section>
            <h1>🛠️ Projects</h1>
            <p>
                Here are some of the personal projects I've built to learn,
                explore, and apply different technologies.
            </p>
        </section>
            <p className="filler">=======================================</p>
        <section>
            <h1>📂 Active Projects</h1>
            <ul>
                <li>
                    <strong>todo-app/</strong><br />
                    A minimalist task manager using React and Tailwind CSS<br />
                    GitHub: <em>TBA</em>
                </li>
                <li>
                    <strong>rantals/</strong><br />
                    A social media platform dedicated for dev blogs<br />
                    GitHub: <em>TBA</em>
                </li>
            </ul>
        </section>
            <p className="filler">=======================================</p>
        <section>
            <h1>🧠 Tech Stack</h1>
            <ul>
                <li><strong>Languages:</strong> JavaScript & TypeScript, Python, C#, PHP</li>
                <li><strong>Frameworks:</strong> React, Node.js, Express.js</li>
                <li><strong>Tools:</strong> Git, Neovim, Google, ChatGPT</li>
            </ul>
        </section>
    </div>
   ); 
}

function About() {
    return (
        <div className="about page-content">
            <section>
                <h1>👋 About Me</h1>
                <p>
                    I enjoy working across the stack and continuously learning
                    new technologies. 
                </p>
            </section>
            <p className="filler">=======================================</p>
            <section>
                <h1>🧰 Skills Summary</h1>
                <ul>
                    <li>Problem solving</li>
                    <li>Collaboration and communication</li>
                    <li>Systems thinking</li>
                    <li>Attention to detail</li>
                </ul>
            </section>
                <p className="filler">=======================================</p>
            <section>
                <h1>🎓 Education</h1>
                <ul>
                    <li>B.S. in Information Technology @ Centro Escolar University</li>
                    <li>Expected Graduation: 2028</li>
                </ul>
            </section>
                <p className="filler">=======================================</p>
            <section>
                <h1>📄 Resume</h1>
                <p>
                    <a href="" download>Download Resume</a> (or type :open resume.pdf)
                </p>
            </section>
                <p className="filler">=======================================</p>
            <section>
                <h1>🌐 Socials</h1>
                <span>
                
                </span>
            </section>
        </div>
    );
}

function PageContent({selected}:{selected:string}){
    function pageToLoad(){
        switch(selected){
            case "home":
                return <Home/>
            case "projects":
                return <Projects/>
            case "about":
                return <About/>
            default: 
                return <div></div>
        }
    }
    return(
        <>
            <div className="content">
                {pageToLoad()}
            </div>
        </>
    );
}

function StatusLine(){
    return(
        <span className="status-line">
            <span className="left">
                <span>Normal</span>
                <span>Main</span>
                <span>/home</span>
            </span>
            <span className="right">
                <span>100%</span>
                <span>1:1</span>
            </span>
        </span>
    );
}

function CommandBar(){
    return(
        <div className="command-listen"></div>
    );
}

function App() {
    const [isStart, setIsStart] = useState<boolean>(true);
    const [selected, setSelected] = useState<string>("home");

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'i') {
                setIsStart(false);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <>
            <main>
                {isStart ? (<Welcome />) : 
                    (
                        <div className="wrapper">
                            <Header />
                            <NavigationButtons
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <PageContent 
                                selected={selected}
                            />
                        </div>
                    )
                }
                <Lines selected={selected} isStart={isStart}/>
            </main>
            <StatusLine />
            <CommandBar />
        </>
    );
}

export default App;
