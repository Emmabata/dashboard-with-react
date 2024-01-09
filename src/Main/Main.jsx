import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Main.css"
import Header from "../Components/HeaderTemplate/Header";
import Content from "../Content/content";



const Main = () => {

    const {DarkTheme} = useContext(ThemeContext)
    return ( 
        <div className={`main ${DarkTheme && "dark"}`}>
            <Header/>
            <Content/>
        </div>

    );
}

export default Main;