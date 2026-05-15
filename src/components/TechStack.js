import { useRef, useEffect, useState } from 'react';
import '../styles/components-css/techstack.css';

function TechStack() {
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
            const scrollAmount = 350;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 100);
        }
    };
    const technologies = {
        frontend: [
            { name: 'React', description: 'UI library for interactive web interface' },
            { name: 'Supabase', description: 'Real-time database and authentication backend' },
            { name: 'Bootstrap', description: 'Responsive CSS framework for styling' }
        ],
        backend: [
            { name: 'Flask', description: 'Python web framework for REST API' },
            { name: 'Python', description: 'Core language for backend services' },
            { name: 'JWT', description: 'Secure authentication and authorization' }
        ],
        aiml: [
            { name: 'Stable Diffusion 3.5 Medium', description: '2B parameter diffusion transformer for image generation' },
            { name: 'LoRA (Low-Rank Adaptation)', description: 'Parameter-efficient fine-tuning technique' },
            { name: 'T5-XXL (8-bit quantized)', description: 'Text encoder for semantic understanding' },
            { name: 'GTE-Large', description: 'Sentence transformer for semantic embeddings' }
        ],
        optimization: [
            { name: '8-bit Quantization', description: 'Reduce memory footprint for large models' },
            { name: 'Gradient Checkpointing', description: 'Memory-efficient backpropagation' },
            { name: 'Mixed-Precision Training', description: 'BFloat16 for faster computation' },
            { name: 'Min-SNR Weighting', description: 'Optimized loss function for convergence' }
        ],
        hardware: [
            { name: 'NVIDIA RTX 4090', description: '24GB VRAM for intensive model training' },
            { name: 'NVIDIA RTX 4050', description: '6GB VRAM for development and testing' },
            { name: 'CUDA', description: 'GPU acceleration framework' }
        ]
    };

    return (
        <div className="techstack-section">
            <div className="section-header">
                <h2 className="section-title">Technology Stack</h2>
                <div className="section-line"></div>
            </div>

            <div className="techstack-container">
                <p className="techstack-intro">
                    ArguMint employs cutting-edge AI technologies combined with modern web frameworks for optimal performance.
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
                        className="tech-categories"
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                    >
                    {/* Frontend */}
                    <div className="tech-category">
                        <div className="category-header">
                            <h3>Frontend</h3>
                            <span className="category-icon">🎨</span>
                        </div>
                        <div className="tech-list">
                            {technologies.frontend.map((tech, idx) => (
                                <div key={idx} className="tech-item">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="tech-category">
                        <div className="category-header">
                            <h3>Backend</h3>
                            <span className="category-icon">⚙️</span>
                        </div>
                        <div className="tech-list">
                            {technologies.backend.map((tech, idx) => (
                                <div key={idx} className="tech-item">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI/ML Models */}
                    <div className="tech-category">
                        <div className="category-header">
                            <h3>AI & ML Models</h3>
                            <span className="category-icon">🤖</span>
                        </div>
                        <div className="tech-list">
                            {technologies.aiml.map((tech, idx) => (
                                <div key={idx} className="tech-item">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Optimization Techniques */}
                    <div className="tech-category">
                        <div className="category-header">
                            <h3>Optimization Techniques</h3>
                            <span className="category-icon">⚡</span>
                        </div>
                        <div className="tech-list">
                            {technologies.optimization.map((tech, idx) => (
                                <div key={idx} className="tech-item">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hardware */}
                    <div className="tech-category">
                        <div className="category-header">
                            <h3>Hardware & Acceleration</h3>
                            <span className="category-icon">💻</span>
                        </div>
                        <div className="tech-list">
                            {technologies.hardware.map((tech, idx) => (
                                <div key={idx} className="tech-item">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
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

export default TechStack;
