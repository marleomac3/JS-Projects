import './WaveBackground.css'

export default function WaveBackground() {
    return (
        <>
        <div id="ocean" className="ocean absolute">
            <div className='wave'></div>
            <div className='wave'></div>
        </div>
        </>
    );
}