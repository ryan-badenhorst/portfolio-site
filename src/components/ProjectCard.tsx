import PokemonNuzlockeTracker from "../images/pokemon-nuzlocke-tracker.jpg"

export default function ProjectCard() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 h-40 rounded-lg bg-blue-500">
                Top Section
            </div>

            <div className="h-40 rounded-lg bg-green-500">
                Bottom Left
            </div>

            <div className="h-40 rounded-lg bg-yellow-500">
                Bottom Right
            </div>
        </div>
    )
}