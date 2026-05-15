import '../styles/components-css/workflow.css';

function Workflow() {
    return (
        <div className="workflow-section">
            <div className="section-header">
                <h2 className="section-title">Development Pipeline</h2>
                <div className="section-line"></div>
            </div>

            <div className="workflow-container">
                <p className="workflow-intro">
                    ArguMint follows a comprehensive end-to-end pipeline from data preparation through deployment.
                </p>

                <div className="workflow-steps">
                    {/* Step 1 */}
                    <div className="workflow-item">
                        <div className="step-visual">
                            <div className="step-icon">1</div>
                            <div className="step-circle"></div>
                        </div>
                        <div className="step-content">
                            <h3>Data Preprocessing & Alignment</h3>
                            <p>
                                Extract 128 argumentative claims from CLEF dataset. Generate GTE-Large semantic embeddings 
                                and match 14,000+ images using OCR, vision features, and web context with 0.25 cosine similarity threshold.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="workflow-item">
                        <div className="step-visual">
                            <div className="step-icon">2</div>
                            <div className="step-circle"></div>
                        </div>
                        <div className="step-content">
                            <h3>Phase I: Initial Model Adaptation</h3>
                            <p>
                                Fine-tune Stable Diffusion 3.5 Medium using LoRA. Apply 8-bit quantization for T5-XXL encoder, 
                                gradient checkpointing, and mixed-precision training. Generate baseline outputs at 256×256 resolution.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="workflow-item">
                        <div className="step-visual">
                            <div className="step-icon">3</div>
                            <div className="step-circle"></div>
                        </div>
                        <div className="step-content">
                            <h3>Phase II: Semantic Refinement</h3>
                            <p>
                                Integrate multi-stage contrastive learning with rectified flow transformers. Apply Min-SNR weighting 
                                strategy and specialized text encoder adaptation. Achieve high-fidelity 512×512 resolution outputs.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="workflow-item">
                        <div className="step-visual">
                            <div className="step-icon">4</div>
                            <div className="step-circle"></div>
                        </div>
                        <div className="step-content">
                            <h3>Real-time Inference</h3>
                            <p>
                                Deploy LoRA-adapted model via Flask API. User enters argumentative claim, model processes through 
                                T5-XXL encoder, generates image via diffusion pipeline with real-time step tracking (28 steps).
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="workflow-item">
                        <div className="step-visual">
                            <div className="step-icon">5</div>
                            <div className="step-circle"></div>
                        </div>
                        <div className="step-content">
                            <h3>Storage & Gallery Management</h3>
                            <p>
                                Generated images persisted in Supabase with metadata (prompt, seed, timestamp). Users can view 
                                gallery history, download high-resolution JPEGs, delete images, and search generation history.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Highlights */}
                <div className="workflow-highlights">
                    <h3>Key Achievements</h3>
                    <div className="highlights-grid">
                        <div className="highlight-box">
                            <h4>📊 14,000+ Curated Pairs</h4>
                            <p>Semantically aligned argument-image dataset</p>
                        </div>
                        <div className="highlight-box">
                            <h4>🎯 Argument-Aware</h4>
                            <p>Models understand context, sentiment, and rhetorical intent</p>
                        </div>
                        <div className="highlight-box">
                            <h4>⚡ Memory Efficient</h4>
                            <p>Fine-tune on consumer-grade GPUs with 8-bit quantization</p>
                        </div>
                        <div className="highlight-box">
                            <h4>🎨 512×512 High-Fidelity</h4>
                            <p>Visual premises that effectively convey arguments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workflow;
