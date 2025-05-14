import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa los campos obligatorios (Nombre, Correo Electrónico, Mensaje).');
      return;
    }
    console.log('Form data submitted:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Hablemos de tu Proyecto
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto text-lg">
          Estamos listos para escuchar tus ideas y ayudarte a encontrar la solución digital perfecta para tu negocio. Ponte en contacto con nosotros a través del medio que prefieras.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-panel p-10 rounded-3xl shadow-2xl border border-border/30">
            <h3 className="text-2xl font-bold mb-6 text-primary">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'phone', 'company'].map((field, idx) => (
                <div key={idx}>
                  <label htmlFor={field} className="block text-sm font-medium text-foreground">
                    {field === 'name' ? 'Nombre *' :
                      field === 'email' ? 'Correo Electrónico *' :
                      field === 'phone' ? 'Teléfono (Opcional)' :
                      'Empresa (Opcional)'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    id={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required={field === 'name' || field === 'email'}
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-card text-card-foreground shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  ¿En qué podemos ayudarte? *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-card text-card-foreground shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-card/20 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-border/30">
            <h3 className="text-2xl font-bold mb-6 text-primary">Otra Información</h3>
            <div className="space-y-5 text-base">
              <p className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-1" />
                <span>
                  <strong>Correo:</strong>{' '}
                  <a href="mailto:hola@avanxialabs.com" className="text-secondary hover:underline">
                    hola@avanxialabs.com
                  </a>{' '}
                  <span className="text-xs text-foreground/60">(por definir)</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1" />
                <span>
                  <strong>Teléfono:</strong> +52 220 283 4673
                  <br />
                  <span className="text-xs text-foreground/60">Este número puede ser reemplazado por tu contacto directo</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <span>
                  <strong>Ubicación:</strong> Toluca, México (Operando remotamente para Norteamérica)
                </span>
              </p>
              <div className="flex items-start gap-3">
                <Linkedin className="w-5 h-5 text-secondary mt-1" />
                <span>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    Avanxia Labs
                  </a>
                  <span className="text-xs text-foreground/60"> (por definir)</span>
                </span>
              </div>
            </div>
            <p className="mt-8 text-foreground/70 text-sm italic">¡Estamos ansiosos por colaborar contigo!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;