import React from 'react';
import { User } from 'lucide-react';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <p className="intro-eyebrow"><User size={14} />Perfil</p>
      <p className="intro-text">
        Soy desarrolladora de software orientada al desarrollo Full Stack, con experiencia construyendo aplicaciones completas
        desde el diseño y la lógica backend hasta la gestión e integración con bases de datos.
        Me considero una persona proactiva, con facilidad para adaptarme a entornos nuevos y trabajar en equipo.
        Me comunico bien, escucho antes de actuar y me involucro de verdad con lo que el equipo
        necesita para sacar adelante el trabajo.
      </p>
      <p className="intro-text">
        Me interesa construir interfaces que se vean bien y que sean fáciles de usar. Cuido los detalles
        visuales y disfruto ese proceso de llevar un diseño a algo funcional en el navegador. Aprendo
        rápido y no me da miedo enfrentarme a herramientas o conceptos que no conozco.
      </p>
      <p className="intro-text">
        Estoy en una etapa donde quiero seguir creciendo, aportar en proyectos reales y construir
        experiencia junto a equipos donde pueda aprender y contribuir al mismo tiempo.
      </p>
    </section>
  );
}

export default Intro;
