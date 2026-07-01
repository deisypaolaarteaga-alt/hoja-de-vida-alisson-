import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const transversales = [
  'Inglés',
  'Seguridad y salud en el trabajo',
  'Emprendimiento',
  'Comunicación',
  'Ética',
  'TIC / Ofimática',
];

function Education() {
  return (
    <section className="education">
      <p className="section-eyebrow"><GraduationCap size={14} />Formación</p>

      <div className="education-main">
        <h3>Tecnología en Análisis y Desarrollo de Software</h3>
        <p className="education-institution">SENA · Centro de Industria y Construcción</p>
      </div>

      <div className="education-transversales">
        <p className="transversales-label">Formación transversal</p>
        <ul className="transversales-list">
          {transversales.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
