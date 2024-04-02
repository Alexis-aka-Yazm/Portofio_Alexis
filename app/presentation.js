import "./presentation.css";
import Image from "next/image";


export default function Presentation() {
    return (
    <div className="Info_content">  
        <div className="presentation">
        <Image
            src="/pdp_noir.svg"
            alt="Photo"
            width={400}
            height={400}
            className="spiral"
        />

        <h1>
            Bonjour, <br />
            Je suis <span>Alexis</span> <br />Hazebrouck
        </h1>  
        </div>
        <div className="metier">
            <h2>
                <div className="ligne">
                    Actuellement étudiant en informatique.
                    <div className="barre1"></div>
                </div> 

                <div className="ligne">
                    J'aspire a devenir un web developpeur ou/et un web designer
                    <div className="barre2"></div>
                </div>

            </h2>
        </div>
    </div>
    );
}