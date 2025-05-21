import { useState, useEffect, Key } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';
import {
  categoriesData,
} from '@/data/categoriesData';
import {
  servicesData,
  ServicePlan,
  ServiceAddon,
} from '@/data/servicesData';

type FormFields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: string;
  plan: string;
  service: string;
  message: string;
};

const fadeSlide = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const ContactForm = () => {
  // 1️⃣ Leer los ítems enviados desde ServiceCategoryPage
  const location = useLocation();
  const selectedItems = location.state?.selectedItems ?? [];

  // 2️⃣ Estado del formulario
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    plan: '',
    service: '',
    message: '',
  });

  // 3️⃣ Calcular total **después** de declarar formData
  const total = selectedItems.length > 0
    ? selectedItems.reduce((sum: any, item: { price: any; }) => sum + (typeof item.price === 'number' ? item.price : 0), 0)
    : (() => {
        const foundPlan = servicesData.find((i) => i.id === formData.plan);
        const foundService = servicesData.find((i) => i.id === formData.service);
        const found = foundPlan || foundService;
        return found && typeof found.price === 'number' ? found.price : 0;
      })();

  // 4️⃣ Reset plan/service si cambia categoría
  useEffect(() => {
    if (formData.category) {
      setFormData((f) => ({ ...f, plan: '', service: '' }));
    }
  }, [formData.category]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'plan' ? { service: '' } : {}),
      ...(name === 'service' ? { plan: '' } : {}),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validaciones
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      (!selectedItems.length &&
        (!formData.category || (!formData.plan && !formData.service)))
    ) {
      alert(
        'Por favor, completa los campos obligatorios y selecciona un plan o servicio.'
      );
      return;
    }
    // envía al API...
    console.log('Formulario:', formData);
    console.log('Ítems seleccionados:', selectedItems);
    console.log('Total:', total);
    alert('Mensaje enviado. ¡Gracias!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      category: '',
      plan: '',
      service: '',
      message: '',
    });
  };

  // datos para selects
  const plansAll = servicesData.filter((i) => i.type === 'plan');
  const filteredPlans = plansAll.filter(
    (p) => p.categoryId === formData.category
  );

  return (
    <section
      id="contact"
      className="py-20 bg-[rgb(var(--color-background))] text-[rgb(var(--color-foreground))]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-2">
          Hablemos de tu Proyecto
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-[rgba(var(--color-foreground),0.7)]">
          Estamos listos para escuchar tus ideas y ayudarte a encontrar la
          solución digital perfecta para tu negocio.
        </p>

        <div className="grid md:grid-cols-2 gap-2">
          {/* ══ IZQUIERDA: FORMULARIO ══ */}
          <div className="flex justify-end">
            <motion.div
              className="glass-panel p-8 rounded-2xl shadow-lg border border-[rgb(var(--color-border))] hover:ring-2 hover:ring-primary w-full max-w-lg"
              initial={fadeSlide.initial}
              whileInView={fadeSlide.whileInView}
              transition={fadeSlide.transition}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-[rgb(var(--color-primary))]">
                Inicia tu Proyecto
              </h3>

                  {/* Si vienen ítems preseleccionados, los mostramos */}
                  {selectedItems.length > 0 && (
                    <div className="mb-6">
                      <p className="font-medium mb-2">Tu Selección:</p>
                      <ul className="list-disc list-inside text-sm text-foreground/80">
                        {selectedItems.map(
                          (it: ServicePlan | ServiceAddon & { id: Key }) => (
                            <li key={it.id} className="flex justify-between">
                              <span>- {it.name}</span>
                              <span className="font-semibold">
                                {typeof it.price === 'number'
                                  ? `$${it.price.toLocaleString('en-US')}`
                                  : it.price}
                              </span>
                            </li>
                          )
                        )}
                      </ul>

                      {/* total no editable */}
                      <div className="mt-4">
                        <label className="block text-sm font-medium">Total:</label>
                        <input
                          type="text"
                          readOnly
                          value={`$${total.toLocaleString('en-US')}`}
                          className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border cursor-not-allowed"
                        />
                      </div>
                    </div>
                  )}
                  {/* SOLO si NO hay ítems preseleccionados muestro categoría/plan */}
                  {selectedItems.length === 0 && (
                    <div className="mb-6 space-y-4">
                      <div>
                        <label htmlFor="category" className="…">Categoría *</label>
                        <select
                          id="category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleChange}
                          className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border cursor-not-allowed"
                        >
                          <option value="">Elige una categoría</option>
                          {categoriesData.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="plan" className="…">Plan *</label>
                        <select
                          id="plan"
                          name="plan"
                          disabled={!formData.category}
                          required
                          value={formData.plan}
                          onChange={handleChange}
                          className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border cursor-not-allowed"
                        >
                          <option value="">Selecciona un plan</option>
                          {filteredPlans.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} — $
                              {typeof p.price === 'number'
                                ? p.price.toLocaleString('en-US')
                                : p.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
              <form onSubmit={handleSubmit} className="space-y-5">
                               {/* Total dinámico (sin ítems preseleccionados) */}
                {selectedItems.length === 0 && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Total:</label>
                    <input
                      type="text"
                      readOnly
                      value={`$${total.toLocaleString('en-US')}`}
                      className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border cursor-not-allowed"
                    />
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5"></form>
                {[
                  {
                    id: 'name',
                    label: 'Nombre *',
                    type: 'text',
                    required: true,
                    placeholder: 'Nombre completo',
                  },
                  {
                    id: 'email',
                    label: 'Correo Electrónico *',
                    type: 'email',
                    required: true,
                    placeholder: 'Correo electrónico',
                  },
                  {
                    id: 'phone',
                    label: 'Teléfono (Opcional)',
                    type: 'tel',
                    required: false,
                    placeholder: 'Teléfono',
                  },
                  {
                    id: 'company',
                    label: 'Empresa (Opcional)',
                    type: 'text',
                    required: false,
                    placeholder: 'Empresa',
                  },
                ].map(({ id, label, type, required, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required={required}
                      value={
                        formData[id as keyof Omit<FormFields, 'category' | 'plan' | 'service'>]
                      }
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    ¿En qué podemos ayudarte? *
                  </label>  
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Déjanos tu mensaje"
                    className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                  />
                </div>

                {/* campos ocultos con JSON y total */}
                {selectedItems.length > 0 && (
                  <>
                    <input
                      type="hidden"
                      name="selectedItems"
                      value={JSON.stringify(selectedItems)}
                    />
                    <input
                      type="hidden"
                      name="total"
                      value={total}
                    />
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-secondary))] text-white font-semibold rounded-lg transition"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>

          {/* ══ DERECHA: se mantiene igual ══ */}
          <div className="flex justify-start">
            <div className="space-y-6 w-full max-w-lg">
              <motion.div
                className="glass-panel rounded-2xl overflow-hidden shadow-lg border border-[rgb(var(--color-border))] w-full"
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
                      <a href="mailto:hola@avanxialabs.com" className="hover:underline">
                        hola@avanxialabs.com
                      </a>
                    ),
                    note: '(por definir)',
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'Teléfono',
                    content: <span>+52 220 283 4673</span>,
                    note: 'Puede cambiarse por tu contacto directo',
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'Ubicación',
                    content: <span>Toluca, México (remoto NA)</span>,
                  },
                  {
                    icon: <Linkedin className="w-6 h-6 text-[rgb(var(--color-secondary))]" />,
                    label: 'LinkedIn',
                    content: <a href="#">Avanxia Labs</a>,
                    note: '(por definir)',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-lg shadow-sm border border-[rgb(var(--color-border))] flex items-start gap-4"
                  >
                    {item.icon}
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <div className="mt-1">{item.content}</div>
                      {item.note && (
                        <p className="text-xs text-[rgba(var(--color-foreground),0.6)]">
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
  );
};
