export default function NavigationButtons({
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
