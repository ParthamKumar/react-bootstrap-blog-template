import '../styles/components-css/features.css';
import CardSwap, { Card } from './CardSwap';

function Features() {
    const features = [
        {
            id: 1,
            icon: '🎯',
            title: 'Argument-Focused Generation',
            description:
                'Generate images that serve as visual premises for textual arguments, understanding sentiment and intent beyond simple keywords.'
        },
        {
            id: 2,
            icon: '🧠',
            title: 'Semantic Enrichment',
            description:
                'Leverage OCR text, Google Vision features, and web context to enhance image metadata for better understanding of visual content.'
        },
        {
            id: 3,
            icon: '🔗',
            title: 'Multi-Signal Processing',
            description:
                'Combine multiple data sources (captions, OCR, vision annotations, search context) for robust argument-image alignment.'
        },
        {
            id: 4,
            icon: '⚡',
            title: 'Memory-Efficient Training',
            description:
                'Fine-tune state-of-the-art models on consumer-grade GPUs using 8-bit quantization and gradient checkpointing.'
        },
        {
            id: 5,
            icon: '🎨',
            title: 'High-Fidelity Output',
            description:
                'Generate 512×512 resolution images with advanced diffusion transformers, Min-SNR weighting, and rectified flow optimization.'
        },
        {
            id: 6,
            icon: '📱',
            title: 'Full-Stack Web Interface',
            description:
                'User authentication, real-time generation tracking, image gallery management, and persistent data storage via Supabase.'
        }
    ];

    return (
        <div className="features-section">
            <div className="section-header">
                <h2 className="section-title">Core Features</h2>
                <div className="section-line"></div>
            </div>

            <div className="features-container">
                <p className="features-intro">
                    ArguMint combines advanced AI techniques with practical
                    features for generating contextually relevant images from
                    argumentative claims.
                </p>

                <div className="cards-wrapper">
                    <CardSwap
                        width={900}
                        height={400}
                        cardDistance={-48}
                        verticalDistance={0}
                        delay={4000}
                        pauseOnHover={true}
                        skewAmount={0}
                        easing="elastic"
                    >
                        {features.map((feature) => (
                            <Card
                                key={feature.id}
                                className="feature-card"
                            >
                                <div className="card-icon">
                                    {feature.icon}
                                </div>

                                <h3 className="card-title">
                                    {feature.title}
                                </h3>

                                <p className="card-description">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </div>
    );
}

export default Features;