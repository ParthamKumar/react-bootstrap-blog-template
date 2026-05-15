import '../styles/components-css/mainslideshow.css';

function MainSlideShow() {
    const heroSectionStyle = {
        backgroundImage: 'url(/image/images/home.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };

    return (
        <div className="hero-section" style={heroSectionStyle}>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">ArguMint</h1>
                    <h2 className="hero-subtitle">Picture the Point</h2>
                    <p className="hero-description">
                        Transform arguments into compelling visual narratives. ArguMint bridges formal logic and visual cognition, 
                        using AI-powered image generation to enhance argument clarity, resonance, and influence in the digital age.
                    </p>
                </div>
                <div className="hero-visual">
                    <div className="hero-gradient"></div>
                </div>
            </div>
        </div>
    );
}

export default MainSlideShow;
