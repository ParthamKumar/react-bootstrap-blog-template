import { useRef, useEffect, useState } from 'react';
import '../styles/components-css/challenges.css';

function Challenges() {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 100);
        }
    };
    const challenges = [
        {
            id: 1,
            challenge: 'Domain Gap Between Descriptive & Argumentative Text',
            description: 'Existing T2I models are trained on descriptive image captions from MS-COCO and LAION, not argumentative text. Arguments express opinions and value judgments that don\'t directly map to visual elements.',
            solution: 'Created a semantically aligned "Golden Dataset" using GTE-Large embeddings to match 14,000+ images with argumentative claims, bridging the domain mismatch through specialized fine-tuning.'
        },
        {
            id: 2,
            challenge: 'Semantic Alignment with Abstract Concepts',
            description: 'Arguments involve abstract concepts ("values," "well-being," "mental calm") where visual metaphors aren\'t explicitly stated. Models struggle with attribute binding and compositional understanding.',
            solution: 'Implemented multi-signal data enrichment (OCR, Google Vision, web context) combined with contrastive learning and T5-XXL text encoders to enhance semantic understanding.'
        },
        {
            id: 3,
            challenge: 'Evaluation Complexity',
            description: 'Unlike standard T2I tasks using FID/CLIP scores, argument illustration requires manual evaluation via NDCG based on human judgment of aspect representation.',
            solution: 'Developed testing framework with functional and security validation. Integrated real-time progress tracking and implemented user feedback mechanisms for alignment assessment.'
        },
        {
            id: 4,
            challenge: 'Quality-Alignment Trade-off',
            description: 'Fine-tuning for improved semantic alignment can reduce visual quality, producing oversaturated or non-photorealistic outputs.',
            solution: 'Applied Min-SNR weighting strategy, gradient checkpointing, and mixed-precision (BFloat16) training to maintain both visual quality and semantic relevance simultaneously.'
        },
        {
            id: 5,
            challenge: 'Limited Training Data & Computational Constraints',
            description: 'CLEF dataset smaller than foundation model training data. Hardware limited to 24GB VRAM, making Stable Diffusion 3.5 Large prohibitive.',
            solution: 'Strategic pivot to SD 3.5 Medium (2B params). Implemented 8-bit quantization, LoRA fine-tuning, and gradient checkpointing to achieve high-fidelity results on consumer-grade GPUs.'
        },
        {
            id: 6,
            challenge: 'VRAM Optimization Under Hardware Limits',
            description: 'RTX 4050 (6GB) limited development capability; RTX 4090 (24GB) required careful memory management for stable training pipeline.',
            solution: 'Implemented comprehensive optimization stack: 8-bit quantization for T5-XXL, gradient checkpointing, mixed-precision training, and progressive resolution strategy (256→512).'
        }
    ];

    return (
        <div className="challenges-section">
            <div className="section-header">
                <h2 className="section-title">Challenges & Solutions</h2>
                <div className="section-line"></div>
            </div>

            <div className="challenges-container">
                <p className="challenges-intro">
                    Building ArguMint required solving complex challenges in AI, semantics, and resource optimization.
                </p>

                <div className="scroll-wrapper">
                    {canScrollLeft && (
                        <button 
                            className="scroll-button scroll-left" 
                            onClick={() => scroll('left')}
                            aria-label="Scroll left"
                        >
                            ‹
                        </button>
                    )}

                    <div 
                        className="challenges-grid"
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                    >
                    {challenges.map((item) => (
                        <div key={item.id} className="challenge-card">
                            <div className="challenge-header">
                                <div className="challenge-number">{item.id}</div>
                                <h3>{item.challenge}</h3>
                            </div>
                            
                            <div className="challenge-content">
                                <div className="challenge-item">
                                    <h4>Challenge:</h4>
                                    <p>{item.description}</p>
                                </div>
                                
                                <div className="solution-item">
                                    <h4>✓ Solution:</h4>
                                    <p>{item.solution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                    {canScrollRight && (
                        <button 
                            className="scroll-button scroll-right" 
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                        >
                            ›
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Challenges;
