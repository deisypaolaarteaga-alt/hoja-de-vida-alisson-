import React from 'react';
import { FolderOpen, CircleCheck } from 'lucide-react';
import './Projects.css';

const proyectosDesplegados = [
  {
    nombre: 'SIPO',
    subtitulo: 'Sistema Inteligente de Presupuestos de Obra',
    descripcion:
      'Plataforma para la gestión completa de presupuestos de construcción en Colombia: cálculo de AIU, retenciones fiscales (ReteFuente, ReteICA, ReteIVA), ARL por nivel de riesgo, manejo de insumos y proveedores, y un portal público donde el cliente revisa y aprueba el presupuesto. Proyecto formativo desarrollado en equipo de 4 personas.',
    responsabilidades: [
      'Rol: Desarrolladora Frontend del equipo',
      'Implementé los componentes de interfaz del sistema usando Next.js y TypeScript',
      'Desarrollé las vistas del portal de presupuestos y el flujo de aprobación del cliente',
      'Trabajé en la maquetación responsive y la experiencia de usuario del sistema',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    enlace: 'https://proyecto-formativo-sipo-v1-0.vercel.app/',
    etiquetaEnlace: 'Ver proyecto',
  },
];

function Projects() {
  return (
    <section className="projects">
      <p className="section-eyebrow"><FolderOpen size={14} />Proyectos</p>

      <div className="projects-list">
        {proyectosDesplegados.map((proyecto) => (
          <article key={proyecto.nombre} className="project-card">
            <div className="project-head">
              <h3>{proyecto.nombre}</h3>
              <span className="project-flag"><CircleCheck size={12} />Desplegado</span>
            </div>
            <p className="project-subtitle">{proyecto.subtitulo}</p>
            <p className="project-description">{proyecto.descripcion}</p>

            {proyecto.responsabilidades && (
              <div className="project-responsibilities">
                <span className="responsibilities-label">mi rol</span>
                <ul className="responsibilities-list">
                  {proyecto.responsabilidades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="project-stack">
              {proyecto.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a href={proyecto.enlace} target="_blank" rel="noreferrer" className="project-link">
              {proyecto.etiquetaEnlace} →
            </a>
          </article>
        ))}
      </div>

      <div className="more-projects">
        <p className="more-projects-label">landing pages y proyectos de práctica</p>
        <p className="more-projects-text">
          Desarrollo de múltiples landing pages para distintos propósitos, incluyendo páginas de venta de productos y ejercicios de práctica con HTML, CSS y JavaScript.
        </p>
      </div>
    </section>
  );
}

export default Projects;
