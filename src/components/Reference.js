import React from 'react';
import { Users } from 'lucide-react';
import './Reference.css';

function Reference() {
    return (
        <section className="reference">
            <p className="section-eyebrow"><Users size={14} />Referencia</p>

            <div className="reference-card">
                <h3 className="reference-name">Oscar Fernando Rojas</h3>
                <p className="reference-role">Instructor SENA</p>
                <div className="reference-contact">
                    <span className="reference-label">tel</span>
                    <a href="tel:+573142077870">314 207 7870</a>
                </div>
            </div>
        </section>
    );
}

export default Reference;
