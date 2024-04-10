import "./skills.css";
import Image from "next/image";


export default function Skills() {
    return (
    <div className="Info_skills">  

        <h2>Ce que je sais faire :</h2>
        
        <div className="skills">
            <Image
                src="/rond.svg"
                alt="Photo"
                width={10}
                height={10}
                className="point"
            />
            <p>
                Dev web : HTML, CSS, JS, React, Next.js, Node.js
            </p>
        </div>
       
        <div className="skills">
        <Image
                src="/rond.svg"
                alt="Photo"
                width={10}
                height={10}
                className="point"
            />
            <p>
                Dev : Python, Java, C, SQL
            </p>
        </div>
        <div className="skills">
        <Image
                src="/rond.svg"
                alt="Photo"
                width={10}
                height={10}
                className="point"
            />
            <p>
            Les bases du design
            </p>
        </div>
        <div className="skills">
        <Image
                src="/rond.svg"
                alt="Photo"
                width={10}
                height={10}
                className="point"
            />
            <p>
            Les bases du réseau
            </p>
        </div>
        <div className="skills">
        <Image
                src="/rond.svg"
                alt="Photo"
                width={10}
                height={10}
                className="point"
            />
            <p>
            Les bases du design
            </p>
        </div>
        
    </div>
    );
}