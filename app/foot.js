import "./foot.css";
import Image from "next/image";


export default function Foot() {
    return (
    <div className="foot">  
        
        <div className="foot_contact">
            <p>Telephone : 07 83 94 92 08</p>
            <p>Mail : alexishazebrouck503@gmail.com</p>
        </div>
        <div className="foot_sommaire">
            <a href="/">Accueil</a>
            <a href="/info">Info</a>
            <a href="/memoire">Mémoire</a>
        </div>
        <div className="foot_title">
            <Image
                src="/logo_bon.png"
                alt="Logo"
                width={70}
                height={75}
            />
            <h1>Portfolio Alexis</h1>
        </div>
    </div>
    );
}