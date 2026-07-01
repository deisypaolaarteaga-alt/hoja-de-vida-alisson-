import React from 'react';
import { Phone, Mail, GitBranch } from 'lucide-react';
import './Rail.css';
import foto from '../assets/foto.jpeg';

function Rail() {
  return (
    <aside className="rail">
      <div className="rail-inner">
        <div className="photo-frame">
          <img src={foto} alt="Alisson Ochoa Toro" className="photo-img" />
        </div>

        <ul className="rail-contact">
          <li>
            <div className="rail-contact-row">
              <Phone size={14} />
              <span className="rail-label">tel</span>
            </div>
            <a href="tel:+573224675324">322 467 5324</a>
          </li>
          <li>
            <div className="rail-contact-row">
              <Mail size={14} />
              <span className="rail-label">email</span>
            </div>
            <a href="mailto:alissonochoatoro@gmail.com">alissonochoatoro@gmail.com</a>
          </li>
          <li>
            <div className="rail-contact-row">
              <GitBranch size={14} />
              <span className="rail-label">git</span>
            </div>
            <a href="https://github.com/alissonochoatoroalt" target="_blank" rel="noreferrer">github.com/alissonochoatoroalt</a>
          </li>
          <li>
            <div className="rail-contact-row">
              <span className="rail-label">ciudad</span>
            </div>
            <span className="rail-value">Ibagué, Tolima</span>
          </li>
        </ul>

        <div className="rail-divider" />

        <div className="rail-ref">
          <p className="rail-ref-label">referencia</p>
          <p className="rail-ref-name">Oscar Fernando Rojas</p>
          <p className="rail-ref-role">Instructor SENA</p>
          <a className="rail-ref-tel" href="tel:+573142077870">314 207 7870</a>
        </div>
      </div>
    </aside>
  );
}

export default Rail;
