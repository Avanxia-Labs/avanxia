import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form validation (example)
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa los campos obligatorios (Nombre, Correo Electrónico, Mensaje).');
      return;
    }
    // TODO: Implement actual form submission logic (e.g., send to an API endpoint)
    console.log('Form data submitted:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    // Reset form after submission (optional)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Hablemos de tu Proyecto</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Estamos listos para escuchar tus ideas y ayudarte a encontrar la solución digital perfecta para tu negocio. Ponte en contacto con nosotros a través del medio que prefieras.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre *</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico *</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa (Opcional)</label>
                <input 
                  type="text" 
                  name="company" 
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">¿En qué podemos ayudarte? *</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Otra Información</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Correo Electrónico:</strong> 
                <a href="mailto:hola@avanxialabs.com" className="text-blue-600 hover:underline ml-1">hola@avanxialabs.com</a> 
                <span className="text-xs text-gray-500">(por definir)</span>
              </p>
              <p>
                <strong>Teléfono:</strong> 
                <span className="ml-1">+52 220 283 4673</span>
                <span className="block text-xs text-gray-500">(Nota para ventas: Este número puede ser reemplazado por tu contacto directo)</span>
              </p>
              <p>
                <strong>Ubicación:</strong> 
                <span className="ml-1">Toluca, México (Operando remotamente para Norteamérica)</span>
              </p>
              <div>
                <strong>Redes Sociales:</strong>
                <div className="flex space-x-4 mt-2">
                  {/* Placeholder links - replace # with actual URLs */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">LinkedIn</a> 
                  {/* Add other social links as needed */}
                  <span className="text-xs text-gray-500">(por definir)</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-600">¡Estamos ansiosos por colaborar contigo!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

