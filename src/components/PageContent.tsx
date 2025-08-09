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

export default function PageContent({selected}:{selected:string}){
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
