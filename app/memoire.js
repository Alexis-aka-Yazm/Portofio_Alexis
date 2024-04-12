import "./memoire.css";

export default function Memoire() {
    return (
        <div className="Memoire">
            <h1>Mémoire :</h1>
            <div className="Question">
                <div className="Q1">
                    <h2>Quels sont les intérêts de NextJS pour un site eco-responsable ?</h2>

                    <ul>
                        <li>Tout d'abord, Next.js améliore les performances grâce au rendu côté serveur (SSR) et au pré-rendu statique (SSG), réduisant ainsi le temps de chargement des pages et la consommation d'énergie.</li>
                        <li>Deuxièmement, Next.js permet une optimisation efficace du contenu dynamique, évitant le chargement excessif de données inutiles.</li>
                        <li>Enfin, le rendu côté serveur de Next.js réduit la charge sur les appareils clients, prolongeant ainsi la durée de vie de la batterie et contribuant à une expérience utilisateur plus respectueuse de l'environnement.</li>
                    </ul>
                </div>
                <div className="Q2">
                    <h2>Quels sont bonne pratique utilisé dans ce site pour qui sois éco-responsable ?</h2>

                    <ul>
                        <li>llustrations personnelles : Les illustrations faites par vous-même réduisent la nécessité de télécharger des images externes, ce qui économise la bande passante et réduit l'empreinte carbone.</li>
                        <li>Absence d'animations : En évitant les animations complexes, le site conserve sa légèreté et minimise la consommation d'énergie des appareils des visiteurs.</li>
                        <li>Utilisation de Next.js : Le développement avec Next.js optimise les performances grâce au rendu côté serveur (SSR) et au pré-rendu statique (SSG), réduisant ainsi la charge des navigateurs et la consommation d'énergie.</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}
