import React from 'react';
import { Code2 } from 'lucide-react';
import './Skills.css';

const categorias = [
  {
    titulo: 'Lenguajes',
    items: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    titulo: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express'],
  },
  {
    titulo: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    titulo: 'Web',
    items: ['HTML', 'CSS'],
  },
  {
    titulo: 'Herramientas',
    items: ['Git', 'GitHub', 'Supabase'],
  },
  {
    titulo: 'Otros',
    items: ['APIs REST', 'Fetch API', 'Autenticación JWT', 'Integración frontend-backend'],
  },
];

function Skills() {
  return (
    <section className="skills">
      <p className="section-eyebrow"><Code2 size={14} />Tecnologías</p>

      <div className="skills-list">
        {categorias.map((categoria) => (
          <p key={categoria.titulo} className="skills-line">
            <span className="skills-cat">{categoria.titulo}:</span>{' '}
            {categoria.items.join(', ')}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;
