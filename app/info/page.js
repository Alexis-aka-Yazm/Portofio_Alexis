import Menu from "../menu.js";
import Presentation from "../presentation.js";
import Hobie from "../hobie.js"
import Skills from "../skills.js"
import Foot from "../foot.js"


export default function Info() {
    return (
        <div className="Info">
            <Menu />
            <Presentation />
            <Hobie />
            <Skills />
            <Foot />
        </div>
    );
}
