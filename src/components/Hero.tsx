export default function Hero() {
    return (
        <div className="flex flex-row gap-10 mb-25 h-screen">
            <div className="info border p-5 w-1/2">
                <p>Hi, I'm</p>
                <p>Ryan Badenhorst</p>
                <p>Front-End Web Developer</p>
                <p>Durban, South Africa</p>
                <p>I enjoy building responsive, accessible web applications with React and TypeScript.</p>
                <p>Currently focused on creating polished user interfaces while continually expanding my front-end development skills.</p>

                <p>
                    Primary stack
                    React · TypeScript · JavaScript · HTML · CSS
                </p>

                <button>View my resume</button>

                <div>
                    <p>Github Icon</p>
                    <p>LinkedIn Icon</p>
                    <p>Email Icon</p>
                </div>
            </div>
            <div className="picture border w-1/2"></div>
        </div>
    )
}