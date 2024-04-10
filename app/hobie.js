import "./hobie.css";
import Image from "next/image";


export default function Hobie() {
    return (
    <div className="Info_hobie">  

        <h2>Mes hobbies :</h2>
        
        <div className="hobie">
            <Image
                src="/poid.svg"
                alt="Photo"
                width={160}
                height={160}
                className="poids"
            />
            <p>
                La musculation est une activité que j'apprécie particulièrement. 
                Elle me permet de me défouler et de me sentir bien dans mon corps.
                J'en pratique depuis 2 ans.
            </p>
        </div>
       
        <div className="hobie">
        <Image
                src="/musique.svg"
                alt="Photo"
                width={120}
                height={120}
                className="musique"
            />
            <p>
                Ecouter de la musique fais partie de mes activités favorites pour me détendre. 
                J'adore écouté de la musique en travaillant ou en écouté seul pour analysé les paroles et comprendre le sens de la chanson.
            </p>
        </div>
        <div className="hobie">
        <Image
                src="/pc.svg"
                alt="Photo"
                width={180}
                height={180}
                className="musique"
            />
            <p>
                J'aime également jouer au jeux vidéo. 
                Cela me permet de me détendre et de m'amuser.
            </p>
        </div>
    </div>
    );
}