import PokemonNuzlockeTracker from "../images/pokemon-nuzlocke-tracker.jpg"

export default function ProjectCard() {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2 flex items-center justify-center p-5 text-4xl font-bold text-indigo-900">
                Pokemon Nuzlocke Tracker
            </div>

            <div className="">
                <img src={PokemonNuzlockeTracker} alt="Pokemon Nuzlocke Tracker App sections" />
            </div>

            <div className="p-5">
                Info and links here
            </div>
        </div>
    )
}