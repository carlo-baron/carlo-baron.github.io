import { useState, useEffect, useRef } from 'react'
import './App.css'
import Lines from './components/Lines.tsx'
import Welcome from './components/Welcome.tsx'
import NavigationButtons from './components/NavigationBar.tsx'
import Header from './components/Header.tsx'
import PageContent from './components/PageContent.tsx'
import StatusLine from './components/StatusLine.tsx'
import CommandBar from './components/CommandBar.tsx'

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
