// src/pages/ProyectosList.tsx  (o src/components/layout/ProjectsGrid.tsx)
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData, PortfolioItem } from '@/data/portfolioData';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioData.map((proyecto: PortfolioItem) => (
          <Link
            key={proyecto.id}
            to={`/proyectos/${proyecto.slug}`}
            className="block glass-panel rounded-lg overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={proyecto.image}
              alt={proyecto.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{proyecto.title}</h2>
              {proyecto.subtitle && (
                <p className="text-sm text-gray-500">{proyecto.subtitle}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
