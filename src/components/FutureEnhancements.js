import { useRef, useEffect, useState } from 'react';
import '../styles/components-css/future.css';

function FutureEnhancements() {
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
    const enhancements = [
        {
            id: 1,
            title: 'Argument-Aware Image Editing',
            description: 'Enable iterative refinement of generated images to adjust emotional intensity, emphasize specific components, or simplify composition while maintaining argumentative meaning.',
            icon: '✏️'
        },
        {
            id: 2,
            title: 'Multi-Image Argument Narratives',
            description: 'Scale from single images to structured multi-image sequences that break down complex arguments into visual storytelling (cause, effect, evidence, conclusion).',
            icon: '📖'
        },
        {
            id: 3,
            title: 'Human-in-the-Loop Refinement',
            description: 'Incorporate human feedback mechanism for alignment and controllability. Use RLHF or preference-based optimization to improve argument understanding.',
            icon: '👥'
        },
        {
            id: 4,
            title: 'Advanced Facial & Detail Generation',
            description: 'Overcome current limitations in facial feature rendering and abstract symbol generation for more nuanced argument illustration.',
            icon: '🎭'
        },
        {
            id: 5,
            title: 'Dataset Scaling & Domain Expansion',
            description: 'Expand training data beyond CLEF dataset. Incorporate diverse argumentative sources from journalism, education, and legal documentation.',
            icon: '📚'
        },
        {
            id: 6,
            title: 'Education Technology Integration',
            description: 'Adapt system for e-learning platforms to auto-generate visual aids for complex logical concepts and debate topics.',
            icon: '🎓'
        },
        {
            id: 7,
            title: 'Controllability Mechanisms',
            description: 'Implement user control over generation parameters—target emotion, visual metaphors, composition style, and abstraction level.',
            icon: '🎚️'
        },
        {
            id: 8,
            title: 'Cross-Domain Applications',
            description: 'Deploy to journalism (opinion piece illustration), legal documentation (case argument visualization), and persuasive communication design.',
            icon: '🌐'
        }
    ];

    return (
        <div className="future-section">
            <div className="section-header">
                <h2 className="section-title">Future Enhancements</h2>
                <div className="section-line"></div>
            </div>

            <div className="future-container">
                <p className="future-intro">
                    ArguMint's roadmap extends the current capabilities into advanced argument visualization, human feedback integration, and domain-specific applications.
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
                        className="enhancements-grid"
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                    >
                    {enhancements.map((enhancement) => (
                        <div key={enhancement.id} className="enhancement-card">
                            <div className="enhancement-icon">{enhancement.icon}</div>
                            <h3>{enhancement.title}</h3>
                            <p>{enhancement.description}</p>
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

                <div className="future-roadmap">
                    <h3>Research Roadmap</h3>
                    <div className="roadmap-timeline">
                        <div className="roadmap-phase">
                            <h4>Phase 1: Iterative Refinement</h4>
                            <p>Image editing & human feedback loops</p>
                        </div>
                        <div className="roadmap-phase">
                            <h4>Phase 2: Advanced Features</h4>
                            <p>Multi-image narratives & controllability</p>
                        </div>
                        <div className="roadmap-phase">
                            <h4>Phase 3: Domain Expansion</h4>
                            <p>Education, journalism, legal tech</p>
                        </div>
                        <div className="roadmap-phase">
                            <h4>Phase 4: Scaling & Optimization</h4>
                            <p>Larger datasets & improved fine-tuning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FutureEnhancements;
