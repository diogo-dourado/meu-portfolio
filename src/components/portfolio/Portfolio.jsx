import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
    projetosPortfolio,
    gamesPortfolio,
    videosPortfolio,
    docsPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("projetos");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "projetos",
            title: "Meus projetos",
        },
        {
            id: "games",
            title: "Games",
        },
        {
            id: "videos",
            title: "Videos",
        },
        {
            id: "docs",
            title: "Documentações",
        }
    ];

    useEffect(()=>{

        switch(selected){
            case "projetos":
                setData(projetosPortfolio);
                break;
            case "games":
                setData(gamesPortfolio);
                break;
            case "videos":
                setData(videosPortfolio);
                break;
            case "docs":
                setData(docsPortfolio);
                break;
            default:
                setData(projetosPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                   <PortfolioList 
                   title={item.title} 
                   active={selected === item.id}
                   setSelected={setSelected}
                   id={item.id}
                   /> 
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
