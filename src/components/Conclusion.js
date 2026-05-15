import '../styles/components-css/conclusion.css';

function Conclusion() {
    return (
        <div className="conclusion-section">
            <div className="conclusion-container">
                <div className="section-header">
                    <h2 className="section-title">Conclusion</h2>
                    <div className="section-line"></div>
                </div>

                <div className="conclusion-content">
                    <p>
                        <strong>ArguMint: Picture the Point</strong> successfully demonstrates the potential of fusing modern diffusion-based 
                        generative models with semantic understanding techniques to tackle the complex challenge of argument illustration. 
                        The project exemplifies how abstract arguments can be conveyed visually to help users grasp the main point and 
                        emotional content of an argument, participating in the Touché 2025 shared task—an initiative setting groundwork 
                        for convergence of computational argumentation, multimodal AI, and visual human-centered communication.
                    </p>

                    <p>
                        <strong>Key Accomplishments:</strong>
                    </p>

                    <div className="learnings-grid">
                        <div className="learning-item">
                            <h3>🎯 Semantic Data Wrangling</h3>
                            <p>Created "Golden Dataset" of 14,000+ semantically aligned argument-image pairs using GTE-Large embeddings and multi-signal enrichment (OCR, vision, web context).</p>
                        </div>
                        <div className="learning-item">
                            <h3>⚡ Memory-Efficient Training</h3>
                            <p>Achieved high-fidelity 512×512 resolution outputs on consumer-grade GPUs through 8-bit quantization, LoRA fine-tuning, and gradient checkpointing.</p>
                        </div>
                        <div className="learning-item">
                            <h3>🧠 Semantic Refinement</h3>
                            <p>Transitioned from Phase I baseline to Phase II semantic optimization using Min-SNR weighting and rectified flow transformers for argument-focused generation.</p>
                        </div>
                        <div className="learning-item">
                            <h3>🔗 Full-Stack Integration</h3>
                            <p>Deployed complete pipeline: data preprocessing → model training → Flask API → React UI with real-time progress tracking and persistent gallery management.</p>
                        </div>
                        <div className="learning-item">
                            <h3>🔒 Production-Ready Platform</h3>
                            <p>Validated system reliability through functional and security testing, including user authentication, asset management, and real-time synchronization.</p>
                        </div>
                        <div className="learning-item">
                            <h3>📊 Research Contribution</h3>
                            <p>Advanced multimodal AI understanding by bridging formal logic and visual cognition—applicable to education, journalism, and persuasive communication.</p>
                        </div>
                    </div>

                    <p>
                        <strong>Project Impact:</strong> While CLEF human evaluation scores remain pending, ArguMint demonstrates proof-of-concept for 
                        generating semantically similar visual arguments with current diffusion architectures. The system successfully bridges the gap 
                        between argumentative text and visual representation, offering a foundation for future exploration of argument-aware image 
                        generation and multimodal reasoning systems.
                    </p>

                    <p>
                        <strong>Future Directions:</strong> Image editing and iterative refinement, multi-image argument narratives, human-in-the-loop 
                        RLHF mechanisms, dataset scaling, and domain expansion to education, journalism, and legal technology represent the natural 
                        progression for enhanced argument visualization capabilities.
                    </p>

                    <div className="conclusion-cta">
                        <h3>ArguMint lays solid groundwork for semantic argument visualization in the multimodal AI era.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conclusion;
