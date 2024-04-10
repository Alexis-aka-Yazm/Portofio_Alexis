import "./memoire.css";

export default function Memoire() {
    return (
        <div className="Memoire">
            <h1>Mémoire :</h1>
            <div className="Question">
                <div className="Q1">
                    <h2>Quels sont les intérêts de NextJS pour un site eco-responsable ?</h2>

                    <ul>
                        <li>L'optimisation des performances</li>
                        <li>L'optimisation du contenu dynamique</li>
                        <li>Le rendu côté serveur</li>
                    </ul>
                </div>
                <div className="Q2">
                    <h2>Quels sont bonne pratique utilisé dans ce site pour qui sois éco-responsable ?</h2>

                    <ul>
                        <li>J'ai fais les illustration faite par moi même</li>
                        <li>Je n'ai pas mis d'animation</li>
                        <li>Je l'ai fais en NextJS</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}
