import Converter from './Converter'

function Hero() {
    return (
        <div className="Hero Center Column">
            <div className="Header Center Column">
                <h1>Convert Me</h1>
                <p>The easiest way to convert units</p>
            </div>
            <Converter />
        </div>
    )
}

export default Hero