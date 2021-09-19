import "./topbar.scss"
import {LocalPhoneOutlined, Mail, WhatsApp} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Diogo Dourado</a>
                    <div className="itemContainer">
                        <LocalPhoneOutlined className="icon"/>
                        <span>+55 81 98680 0915</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>diogodourado@msn.com</span>
                    </div>
                    <div className="itemContainer">
                        <WhatsApp className="icon"/>
                        <span><a href="https://api.whatsapp.com/send?phone=5581986800915&text=Entrar%20em%20contato%20com%20Diogo%20Dourado." className="whatsapp">WhatsApp</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
