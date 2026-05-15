import '../styles/components-css/maincontent.css';
import SDImage from './gallery/stable_diffusion_35_medium_vertical_flow.svg';

function MainContent() {
    return (
        <div className="main-content">
            {/* Problem Statement Section */}
            <div className="content-section">
                <div className="section-header">
                    <h2 className="section-title">The Problem</h2>
                    <div className="section-line"></div>
                </div>
                <div className="problem-container">
                    <div className="problem-text">
                        <p>
                            In digital discourse, arguments are traditionally confined to text—dense, logical frameworks that often fail 
                            to resonate with the general public. Yet images have historically served as potent mediums for expressing meaning 
                            and facilitating rapid comprehension in ways that bypass cognitive load.
                        </p>
                        <p>
                            <strong>The Core Challenge:</strong> How can imagery effectively represent the essential elements of an argument 
                            to enhance its clarity, resonance, and influence? Traditional text-to-image models struggle with abstract argumentative 
                            claims like "Celebrity culture distorts personal values"—they lack the context to infer appropriate visual representations.
                        </p>
                        <p>
                            ArguMint solves this by developing an AI system that understands argumentative intent and generates 
                            contextually relevant images that serve as visual premises for textual claims.
                        </p>
                    </div>
                </div>
            </div>

            {/* Project Overview Section */}
            <div className="content-section">
                <div className="section-header">
                    <h2 className="section-title">Project Overview</h2>
                    <div className="section-line"></div>
                </div>
                <div className="info-container">
                    <div className="info-item-text">
                        <h3>What is ArguMint?</h3>
                        <p>
                            ArguMint: Picture the Point is an end-to-end AI pipeline that transforms abstract argumentative claims into 
                            contextually and aesthetically resonant images. It participates in the Touché 2025 evaluation campaign at CLEF 
                            (Conference and Labs of the Evaluation Forum), seeking to advance the intersection of computational argumentation and visual communication.
                        </p>
                        <h4>Core Research Objectives:</h4>
                        <ul className="objectives-list">
                            <li><strong>Parameter-Efficient Fine-Tuning:</strong> Optimize Stable Diffusion 3.5 Medium using Low-Rank Adaptation (LoRA)</li>
                            <li><strong>Semantic Data Alignment:</strong> Match arguments to images using GTE-Large embeddings with 0.25 cosine similarity threshold</li>
                            <li><strong>Resource-Constrained Training:</strong> Achieve high-fidelity results on consumer-grade GPUs through advanced optimization</li>
                            <li><strong>Argument-Focused Generation:</strong> Train the model to prioritize rhetorical relevance and sentiment understanding</li>
                            <li><strong>Full-Stack Deployment:</strong> Deliver a production-ready web application for real-time image generation and management</li>
                        </ul>
                    </div>
                    <div className="info-item-image">
                        <img src={SDImage} alt="Stable Diffusion 3.5 Medium Flow" className="sd-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
