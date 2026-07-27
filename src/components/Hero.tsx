export default function Hero() {
    return (
        <div className="border rounded-lg h-100 flex flex-row gap-8">
            <div className="info border p-5 w-3/5">
                <p>Hi, I am Ryan Badenhorst</p>
                <p>I am a Front-end web developer located in Durban, South Africa</p>
                <p>I enjoy building responsive, accessible web applications with React and TypeScript.</p>

                <p>
                    Primary stack
                    React · TypeScript · JavaScript · HTML · CSS
                </p>

                <div>
                    <p>Github Icon</p>
                    <p>LinkedIn Icon</p>
                    <p>Email Icon</p>
                </div>

                <button>View my resume</button>
            </div>
            <div className="picture border"></div>
        </div>
    )
}