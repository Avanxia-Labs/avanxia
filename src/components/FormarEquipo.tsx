import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function FormarEquipo() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    file: null as File | null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setForm(prev => ({ ...prev, file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Solicitud enviada:', form)
    setForm({ name: '', email: '', role: '', message: '', file: null })
  }

  const fadeSlide = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      id="join-us"
      className="
        py-20
        bg-[rgb(var(--color-background))]
        text-[rgb(var(--color-foreground))]
      " 
    >
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <motion.div
          initial={fadeSlide.initial}
          whileInView={fadeSlide.whileInView}
          transition={fadeSlide.transition}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h2 className="text-4xl font-extrabold text-center mb-2">
            Forma parte del equipo
          </h2>
          <p
          className="
            text-center mb-12 max-w-3xl mx-auto
            text-[rgba(var(--color-foreground),0.7)]
          "
        >
            ¿Tienes talento, pasión por la creatividad y deseas unirte a un equipo
            que transforma marcas? Cuéntanos quién eres y envíanos tu CV.
        </p>
        </motion.div>

        {/* Grid dos columnas pegadas */}
        <div className="grid md:grid-cols-2 gap-2  mt-10">
{/* ─── IZQUIERDA: Formulario Vertical ────────────────────────── */}
<div className="flex justify-end">
  <motion.div
    initial={fadeSlide.initial}
    whileInView={fadeSlide.whileInView}
    transition={fadeSlide.transition}
    viewport={{ once: false, amount: 0.2 }}
      // className="
            //   glass-panel p-8 rounded-2xl shadow-lg
            //   border border-[rgb(var(--color-border))]
            //   hover:shadow-[0_0_20px_rgba(46,104,255,0.4)]
            //   hover:ring-2 hover:ring-primary
            //   transform hover:scale-105 transition-all duration-500
            //   max-w-lg w-full mx-auto space-y-5
            // "
    className="
      glass-panel p-8 rounded-2xl shadow-lg
      border border-[rgb(var(--color-border))]
      hover:ring-2 hover:ring-primary
      w-full max-w-lg
    "
  >
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium"
          style={{ color: 'rgb(var(--color-foreground))' }}
        >
          Nombre completo *
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-2"
        />
      </div>

      {/* Correo */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium"
          style={{ color: 'rgb(var(--color-foreground))' }}
        >
          Correo electrónico *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-2"
        />
      </div>

      {/* Rol */}
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium"
          style={{ color: 'rgb(var(--color-foreground))' }}
        >
          Área o rol que desempeñas
        </label>
        <Input
          id="role"
          name="role"
          placeholder="Ej. Diseñador, Editor…"
          value={form.role}
          onChange={handleChange}
          className="mt-2"
        />
      </div>

      {/* CV / Archivo */}
      <div>
        <label
          htmlFor="file"
          className="block text-sm font-medium"
          style={{ color: 'rgb(var(--color-foreground))' }}
        >
          Adjunta tu CV
        </label>
        <Input
          id="file"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="mt-2"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium"
          style={{ color: 'rgb(var(--color-foreground))' }}
        >
          Cuéntanos sobre ti
        </label>
        <Textarea
          id="message"
          name="message"
          rows={12}
          placeholder="Breve descripción de tu experiencia"
          value={form.message}
          onChange={handleChange}
          className="mt-2"
        />
      </div>

      {/* Botón */}
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(46,104,255,0.4)' }}
        transition={{ duration: 0.3 }}
      >
        <Button
          type="submit"
          className="w-full py-3 text-lg font-semibold hover:ring-2 hover:ring-primary"
        >
          Enviar solicitud
        </Button>
      </motion.div>
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
              className="space-y-4"
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
                    flex items-start gap-4 w-full
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
                      <p
                        className="text-xs"
                        style={{ color: 'rgba(var(--color-foreground),0.6)' }}
                      >
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
