import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: '',
    service: '',
    message: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
      // si escoges un plan, borramos servicio; si escoges servicio, borramos plan
      ...(name === 'plan'    ? { service: '' } : {}),
      ...(name === 'service' ? { plan: ''    } : {}),
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert(
        'Por favor, completa los campos obligatorios (Nombre, Correo Electrónico, Mensaje).'
      )
      return
    }
    console.log('Form data submitted:', formData)
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
    setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '', plan: '', })
  }

  const fadeSlide = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      id="contact"
      className="
        py-20
        bg-[rgb(var(--color-background))]
        text-[rgb(var(--color-foreground))]
      "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-2">
          Hablemos de tu Proyecto
        </h2>
        <p
          className="
            text-center mb-12 max-w-3xl mx-auto
            text-[rgba(var(--color-foreground),0.7)]
          "
        >
          Estamos listos para escuchar tus ideas y ayudarte a encontrar la
          solución digital perfecta para tu negocio. Ponte en contacto con
          nosotros a través del medio que prefieras.
        </p>

        <div className="grid md:grid-cols-2 gap-2">
            {/* IZQUIERDA: FORMULARIO */}
          <div className="flex justify-end">
            <motion.div
              className="
                glass-panel p-8 rounded-2xl shadow-lg
                border border-[rgb(var(--color-border))]
                hover:ring-2 hover:ring-primary
                w-full max-w-lg
              "
              initial={fadeSlide.initial}
              whileInView={fadeSlide.whileInView}
              transition={fadeSlide.transition}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-[rgb(var(--color-primary))]">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inputs básicos */}
                {[
                  { id: 'name',    label: 'Nombre *',            type: 'text',  required: true,  placeholder: 'Nombre completo' },
                  { id: 'email',   label: 'Correo Electrónico *', type: 'email', required: true,  placeholder: 'Correo electrónico' },
                  { id: 'phone',   label: 'Teléfono (Opcional)',  type: 'tel',   required: false, placeholder: 'Teléfono' },
                  { id: 'company', label: 'Empresa (Opcional)',   type: 'text',  required: false, placeholder: 'Empresa' },
                ].map(({ id, label, type, required, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium"
                      style={{ color: 'rgb(var(--color-foreground))' }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      required={required}
                      placeholder={placeholder}
                      className="
                        mt-2 w-full px-4 py-3
                        bg-[rgb(var(--color-card))]
                        text-[rgb(var(--color-card-foreground))]
                        rounded-lg
                        border border-[rgb(var(--color-border))]
                        placeholder-[rgba(var(--color-card-foreground),0.6)]
                        focus:outline-none focus:ring-2 focus:ring-[rgba(var(--color-primary),0.4)] focus:border-[rgb(var(--color-primary))]
                        transition
                      "
                    />
                  </div>
                ))}

                {/* Select Plan */}
                <div>
                  <label
                    htmlFor="plan"
                    className="block text-sm font-medium"
                    style={{ color: 'rgb(var(--color-foreground))' }}
                  >
                    Plan *
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    disabled={!!formData.service}
                    className="
                      mt-2 w-full px-4 py-3
                      bg-[rgb(var(--color-card))]
                      text-[rgb(var(--color-card-foreground))]
                      rounded-lg
                      border border-[rgb(var(--color-border))]
                      focus:outline-none focus:ring-2 focus:ring-[rgba(var(--color-primary),0.4)] focus:border-[rgb(var(--color-primary))]
                      transition disabled:opacity-50
                    "
                  >
                    <option value="">Selecciona un plan</option>
                    <option value="Presence Landing">Presence Landing</option>
                    <option value="Starter Web">Starter Web</option>
                    <option value="Growth Leads">Growth Leads</option>
                    <option value="Full 360°">Full 360°</option>
                  </select>
                </div>

                {/* Select Servicio */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium"
                    style={{ color: 'rgb(var(--color-foreground))' }}
                  >
                    Servicio Individual *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={!!formData.plan}
                    className="
                      mt-2 w-full px-4 py-3
                      bg-[rgb(var(--color-card))]
                      text-[rgb(var(--color-card-foreground))]
                      rounded-lg
                      border border-[rgb(var(--color-border))]
                      focus:outline-none focus:ring-2 focus:ring-[rgba(var(--color-primary),0.4)] focus:border-[rgb(var(--color-primary))]
                      transition disabled:opacity-50
                    "
                  >
                    <option value="">Selecciona un servicio</option>
                    <option>Branding e Identidad Corporativa</option>
                    <option>Diseño y Desarrollo Web</option>
                    <option>Desarrollo de Aplicaciones Web y Móviles</option>
                    <option>Gestión de Redes Sociales</option>
                    <option>Publicidad Pagada (Paid Media)</option>
                    <option>SEO y Marketing de Contenidos</option>
                    <option>Email Marketing y Automatización</option>
                    <option>Producción Audiovisual</option>
                    <option>Impresión y Material POP</option>
                    <option>Mantenimiento y Soporte Web</option>
                  </select>
                </div>

                {/* Leyenda de exclusión */}
                {(formData.plan || formData.service) && (
                  <p className="text-sm text-red-400">
                    Solo puedes seleccionar un plan o un servicio individual.
                  </p>
                )}

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                    style={{ color: 'rgb(var(--color-foreground))' }}
                  >
                    ¿En qué podemos ayudarte? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Déjanos tu mensaje"
                    className="
                      mt-2 w-full px-4 py-3
                      bg-[rgb(var(--color-card))]
                      text-[rgb(var(--color-card-foreground))]
                      rounded-lg
                      border border-[rgb(var(--color-border))]
                      placeholder-[rgba(var(--color-card-foreground),0.6)]
                      focus:outline-none focus:ring-2 focus:ring-[rgba(var(--color-primary),0.4)] focus:border-[rgb(var(--color-primary))]
                      transition
                    "
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="
                    w-full py-3
                    bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-secondary))]
                    text-[rgb(var(--color-primary-foreground))]
                    font-semibold rounded-lg transition
                  "
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>

          {/* ─── DERECHA: Vídeo + Tarjetas ────────────────────────── */}
          <div className="flex justify-start">
            <div className="space-y-6 w-full max-w-lg">
              <motion.div
                className="
                  glass-panel rounded-2xl overflow-hidden shadow-lg
                  border border-[rgb(var(--color-border))]
                  w-full
                "
                initial={fadeSlide.initial}
                whileInView={fadeSlide.whileInView}
                transition={fadeSlide.transition}
                viewport={{ once: false, amount: 0.2 }}
              >
                <video
                  src="/videos/avanxia_hq_fixed.webm"
                  className="w-full h-auto object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </motion.div>

              <motion.div
                className="mt-6 space-y-4 w-full"
                initial={fadeSlide.initial}
                whileInView={fadeSlide.whileInView}
                transition={{ ...fadeSlide.transition, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'Correo',
                    content: (
                      <a
                        href="mailto:hola@avanxialabs.com"
                        className="hover:underline text-[rgb(var(--color-card-foreground))]"
                      >
                        hola@avanxialabs.com
                      </a>
                    ),
                    note: '(por definir)',
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'Teléfono',
                    content: (
                      <span className="text-[rgb(var(--color-card-foreground))]">
                        +52 220 283 4673
                      </span>
                    ),
                    note: 'Este número puede ser reemplazado por tu contacto directo',
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'Ubicación',
                    content: (
                      <span className="text-[rgb(var(--color-card-foreground))]">
                        Toluca, México (Operando remotamente para Norteamérica)
                      </span>
                    ),
                  },
                  {
                    icon: <Linkedin className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'LinkedIn',
                    content: (
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-[rgb(var(--color-card-foreground))]"
                      >
                        Avanxia Labs
                      </a>
                    ),
                    note: '(por definir)',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="
                      glass-panel p-5 rounded-lg shadow-sm
                       border border-[rgb(var(--color-border))]
                      flex items-start gap-4
                      w-full
                    "
                  >
                    {item.icon}
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: 'rgb(var(--color-foreground))' }}
                      >
                        {item.label}
                      </p>
                      <div className="mt-1">{item.content}</div>
                      {item.note && (
                        <p className="text-xs" style={{ color: 'rgba(var(--color-foreground),0.6)' }}>
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
