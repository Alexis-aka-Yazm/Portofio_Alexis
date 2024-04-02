import "./hobie.css";
import Image from "next/image";


export default function Hobie() {
    return (
    <div className="Info_hobie">  
        <div className="hobie">
            <Image
                src="/poids.svg"
                alt="Photo"
                width={400}
                height={400}
                className="poids"
            />
            <p>

            </p>
        </div>
        <div className="hobie">
        <Image
                src="/pdp_noir.svg"
                alt="Photo"
                width={400}
                height={400}
                className="spiral"
            />
            <p>
                
            </p>
        </div>        
        <div className="hobie">
        <Image
                src="/pdp_noir.svg"
                alt="Photo"
                width={400}
                height={400}
                className="spiral"
            />
            <p>
                
            </p>
        </div>
        <div className="hobie">
        <Image
                src="/pdp_noir.svg"
                alt="Photo"
                width={400}
                height={400}
                className="spiral"
            />
            <p>
                
            </p>
        </div>
    </div>
    );
}