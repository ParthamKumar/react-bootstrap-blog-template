import { useRef, useEffect, useState } from 'react';
import '../styles/components-css/architecture.css';

function Architecture() {
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
            const scrollAmount = 320; // Approximate card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 100);
        }
    };

    return (
        <div className="architecture-section">
            <div className="section-header">
                <h2 className="section-title">System Architecture</h2>
                <div className="section-line"></div>
            </div>

            <div className="architecture-container">
                <p className="architecture-intro">
                    ArguMint consists of three integrated pipelines: Data Preprocessing, Model Training, and Full-Stack Deployment 
                    for seamless argument-to-image generation.
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
                        className="architecture-layers"
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                    >
                        {/* Data Preprocessing Layer */}
                        <div className="arch-layer">
                            <div className="layer-header">
                                <h3>Data Preprocessing</h3>
                                <span className="layer-tech">Semantic Alignment</span>
                            </div>
                            <div className="layer-content">
                                <p><strong>Purpose:</strong> Curate High-Quality Training Dataset</p>
                                <ul>
                                    <li>Extract 128 argumentative claims from CLEF dataset</li>
                                    <li>Generate GTE-Large embeddings (1024-dimensional vectors)</li>
                                    <li>Extract OCR text, Google Vision features, and web context</li>
                                    <li>Match 14,000+ images to arguments using cosine similarity (0.25 threshold)</li>
                                    <li>Create "Golden Dataset" with argument-focused captions</li>
                                </ul>
                            </div>
                        </div>

                        {/* Model Training Layer */}
                        <div className="arch-layer">
                            <div className="layer-header">
                                <h3>Model Training</h3>
                                <span className="layer-tech">Stable Diffusion 3.5 Medium</span>
                            </div>
                            <div className="layer-content">
                                <p><strong>Purpose:</strong> Fine-tune for Argument Illustration</p>
                                <ul>
                                    <li>Low-Rank Adaptation (LoRA) for parameter-efficient fine-tuning</li>
                                    <li>8-bit quantization for T5-XXL text encoder</li>
                                    <li>Gradient checkpointing and mixed-precision (BFloat16) training</li>
                                    <li>Progressive resolution: 256×256 → 512×512 pixels</li>
                                    <li>Min-SNR weighting strategy for optimized convergence</li>
                                </ul>
                            </div>
                        </div>

                        {/* Inference & Deployment Layer */}
                        <div className="arch-layer">
                            <div className="layer-header">
                                <h3>Inference & Deployment</h3>
                                <span className="layer-tech">Flask + React</span>
                            </div>
                            <div className="layer-content">
                                <p><strong>Purpose:</strong> Real-time Image Generation & Management</p>
                                <ul>
                                    <li>Flask REST API for model inference requests</li>
                                    <li>React frontend with real-time progress tracking</li>
                                    <li>User authentication via Supabase</li>
                                    <li>Image gallery with metadata persistence</li>
                                    <li>Download and sharing capabilities</li>
                                </ul>
                            </div>
                        </div>

                        {/* Hardware Optimization Layer */}
                        <div className="arch-layer">
                            <div className="layer-header">
                                <h3>Hardware Optimization</h3>
                                <span className="layer-tech">NVIDIA GPU</span>
                            </div>
                            <div className="layer-content">
                                <p><strong>Purpose:</strong> Efficient Computation</p>
                                <ul>
                                    <li>NVIDIA RTX 4090 (24GB VRAM) for intensive training</li>
                                    <li>NVIDIA RTX 4050 (6GB VRAM) for development</li>
                                    <li>Memory-efficient techniques enable consumer-grade deployment</li>
                                    <li>Rectified flow transformers for streamlined noise-to-image transition</li>
                                </ul>
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

                {/* Data Flow */}
                <div className="data-flow">
                    <h3>Generated Images</h3>
                    <div className="flow-images-gallery">
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 10.45.32 PM.jpeg" alt="Data Flow 1" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 11.09.24 PM.jpeg" alt="Data Flow 2" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 11.15.47 PM.jpeg" alt="Data Flow 3" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 11.23.17 PM.jpeg" alt="Data Flow 4" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 11.29.01 PM.jpeg" alt="Data Flow 5" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 11.44.12 PM.jpeg" alt="Data Flow 6" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-14 at 11.49.49 PM.jpeg" alt="Data Flow 7" className="flow-image" />
                        <img src="/image/images/WhatsApp Image 2026-05-15 at 12.01.40 AM.jpeg" alt="Data Flow 8" className="flow-image" />
                        <img src="/image/images/Capture.PNG" alt="Data Flow 9" className="flow-image" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Architecture;
