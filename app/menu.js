import Image from "next/image";
import "./menu.css";

export default function Menu() {
    return (
        <div className="Menu">
          <div className="Menu_title">
            <Image
              src="/logo_bon.png"
              alt="Logo"
              width={70}
              height={75}
            />
            <h1>Portfolio Alexis</h1>
          </div>
          <div className="Menu_links">
            <a href="/">Accueil</a>

            <a href="/info">Info</a>
            
            <a href="/memoire">Mémoire</a>
          
          </div>
        </div>
    );
  }