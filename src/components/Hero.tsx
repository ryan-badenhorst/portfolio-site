import profilePicture from "../images/profile-picture.png";

export default function Hero() {
    return (
        <div id="hero" className="flex flex-row gap-5 mb-25">

            <div className="border p-5 flex-1">

                <div className="mb-8">
                    <p>Hi, I'm</p>
                    <h1 className="text-6xl font-bold">
                        Ryan Badenhorst
                    </h1>
                    <p className="text-3xl font-semibold">
                        Front-End Web Developer
                    </p>
                    <p>Durban, South Africa</p>
                </div>

                <div className="mb-8">
                    <p>
                        I enjoy building responsive, accessible web
                        applications with React and TypeScript.
                    </p>

                    <p>
                        Currently focused on creating polished user
                        interfaces while continually expanding my
                        front-end development skills.
                    </p>
                </div>

                <div className="mb-8">
                    <p>Primary Stack</p>
                    <p>
                        React · TypeScript · JavaScript · HTML · CSS
                    </p>
                </div>

                <div>
                    <button>View my resume</button>

                    <div>
                        <p>Github Icon</p>
                        <p>LinkedIn Icon</p>
                        <p>Email Icon</p>
                    </div>
                </div>

            </div>

            <div className="border flex-1 flex items-center justify-center">
                <img
                    src={profilePicture}
                    alt="Profile Picture"
                    className="w-100 h-100"
                />
            </div>

        </div>
    )
}