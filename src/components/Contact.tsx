  import { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { useLocation } from 'react-router-dom';
  import { serviceAddons, servicesData, ServicePlan, ServiceAddon } from '@/data/servicesData';
  import { categoriesData } from '@/data/categoriesData';
  import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

  type FormFields = {
    selectedAddonIds: string[];
    name: string;
    email: string;
    phone: string;
    company: string;
    category: string;
    plan: string;
    service: string;
    message: string;
  };

  export const ContactForm = () => {
    const location = useLocation();
    const initialItems: (ServicePlan | ServiceAddon)[] = location.state?.selectedItems ?? [];

    // Estado de selección editable
    const [selectedList, setSelectedList] = useState(initialItems);

    // Estado del formulario
    const [formData, setFormData] = useState<FormFields>({
      selectedAddonIds: [],
      name: '',
      email: '',
      phone: '',
      company: '',
      category: '',
      plan: '',
      service: '',
      message: '',
    });

    // Recalcula total incluyendo solo selectedList o la lógica original
    const total = (() => {
      if (selectedList.length > 0) {
        return selectedList.reduce((sum, item) => sum + (typeof item.price === 'number' ? item.price : 0), 0);
      }
      // Si no hay carrito, tomo plan o servicio + addons
      let base =
        (() => {
          const p =
            servicesData.find(i => i.id === formData.plan) ||
            servicesData.find(i => i.id === formData.service);
          return p && typeof p.price === 'number' ? p.price : 0;
        })();
      if (!location.state?.selectedItems?.length && formData.selectedAddonIds.length) {
        base += formData.selectedAddonIds.reduce((s, id) => {
          const a = serviceAddons.find(x => x.id === id);
          return s + (a && typeof a.price === 'number' ? a.price : 0);
        }, 0);
      }
      return base;
    })();

    const handleRemove = (id: string) => {
      setSelectedList(list => list.filter(item => item.id !== id));
    };

    // Cuando cambia categoría, resetea plan, service y addons
    useEffect(() => {
      if (formData.category) {
        setFormData(f => ({ ...f, plan: '', service: '', selectedAddonIds: [] }));
      }
    }, [formData.category]);

    const fadeSlide = {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
        ...(name === 'plan' ? { service: '' } : {}),
        ...(name === 'service' ? { plan: '' } : {}),
      }));
    };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 1) Validaciones
  if (
    !formData.name ||
    !formData.email ||
    !formData.message ||
    (selectedList.length === 0 &&
      (!formData.category || (!formData.plan && !formData.service)))
  ) {
    alert('Por favor, completa los campos obligatorios y/o selección de plan/servicio.');
    return;
  }

  try {
    // 2) Llamada a tu backend
    const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ...formData, selectedList, total }),
})


    if (!res.ok) throw new Error('Error en la petición');

    // 3) Éxito
    alert('Mensaje enviado. ¡Gracias!');
    // Reinicia formulario y selección
    setSelectedList([]);
    setFormData({
      selectedAddonIds: [],
      name: '',
      email: '',
      phone: '',
      company: '',
      category: '',
      plan: '',
      service: '',
      message: '',
    });

  } catch (err) {
    console.error(err);
    alert('Hubo un error al enviar. Intenta de nuevo más tarde.');
  }
};
    

    // Datos para selects
    const plansAll = servicesData.filter(i => i.type === 'plan');
    const filteredPlans = plansAll.filter(p => p.categoryId === formData.category);

    const availableAddons: ServiceAddon[] = formData.category
      ? serviceAddons.filter(a =>
          (Array.isArray(a.categoryId)
            ? a.categoryId.includes(formData.category)
            : a.categoryId === formData.category) &&
          (a.type === 'addon' || a.type === 'bonus')
        )
      : [];

    return (
      <section id="contact" className="py-20 bg-[rgb(var(--color-background))] text-[rgb(var(--color-foreground))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-2">Hablemos de tu Proyecto</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-[rgba(var(--color-foreground),0.7)]">
            Estamos listos para escuchar tus ideas y ayudarte a encontrar la solución digital perfecta para tu negocio.
          </p>

          <div className="grid md:grid-cols-2 gap-2">
            {/* IZQUIERDA: Formulario */}
            <div className="flex justify-center">
              <motion.div
                className="glass-panel p-8 rounded-2xl shadow-lg border border-[rgb(var(--color-border))] hover:ring-2 hover:ring-primary w-full max-w-lg"
                initial={fadeSlide.initial}
                whileInView={fadeSlide.whileInView}
                transition={fadeSlide.transition}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-[rgb(var(--color-primary))]">Inicia tu Proyecto</h3>

                {/* SELECCIÓN */}
                {selectedList.length > 0 ? (
                  <div className="mb-6">
                    <p className="font-medium mb-2">Tu Selección:</p>
                    <ul className="list-none space-y-2 text-sm">
                      {selectedList.map(it => (
                        <li key={it.id} className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span>- {it.name}</span>
                            <button
                              type="button"
                              onClick={() => handleRemove(it.id)}
                              className="text-red-400 hover:text-red-600"
                              aria-label={`Eliminar ${it.name}`}
                            >
                              ×
                            </button>
                          </div>
                          <span className="font-semibold">
                            {typeof it.price === 'number'
                              ? `$${it.price.toLocaleString('en-US')}`
                              : it.price}
                          </span>
                        </li>
                      ))}
                    </ul>

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
                ) : (
                  <div className="mb-6 space-y-4">
                    {/* Categoría */}
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium">
                        Categoría *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                      >
                        <option value="">Elige una categoría</option>
                        {categoriesData.map(cat => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Plan */}
                    <div>
                      <label htmlFor="plan" className="block text-sm font-medium">
                        Plan *
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        disabled={!formData.category}
                        value={formData.plan}
                        onChange={handleChange}
                        className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                      >
                        <option value="">Selecciona un plan</option>
                        {filteredPlans.map(p => (
                          <option key={p.id} value={p.id}>
                            {p.name} — ${typeof p.price === 'number' ? p.price.toLocaleString('en-US') : p.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Addons/Bonos */}
                    {availableAddons.length > 0 && (
                      <ul className="space-y-2 pt-2">
                        {availableAddons.map(addon => {
                          const isBonus = addon.type === 'bonus';
                          const checked = isBonus || formData.selectedAddonIds.includes(addon.id);
                          return (
                            <li key={addon.id} className="flex items-center justify-between">
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  disabled={isBonus}
                                  onChange={() => {
                                    if (isBonus) return;
                                    setFormData(f => ({
                                      ...f,
                                      selectedAddonIds: checked
                                        ? f.selectedAddonIds.filter(x => x !== addon.id)
                                        : [...f.selectedAddonIds, addon.id],
                                    }));
                                  }}
                                  className="form-checkbox h-5 w-5 accent-primary border-primary checked:accent-primary"
                                />
                                <span>{addon.name}</span>
                              </label>
                              <span className="text-sm font-semibold">
                                {typeof addon.price === 'number'
                                  ? `$${addon.price.toLocaleString('en-US')}`
                                  : addon.price}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {selectedList.length === 0 && (
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

                  {[
                    { id: 'name', label: 'Nombre *', type: 'text', placeholder: 'Nombre completo' },
                    { id: 'email', label: 'Correo Electrónico *', type: 'email', placeholder: 'Correo electrónico' },
                    { id: 'phone', label: 'Teléfono (Opcional)', type: 'tel', placeholder: 'Teléfono' },
                    { id: 'company', label: 'Empresa (Opcional)', type: 'text', placeholder: 'Empresa' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        value={formData[id as keyof Omit<FormFields,'category'|'plan'|'service'>] as string}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                        required={label.endsWith('*')}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      ¿En qué podemos ayudarte? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Déjanos tu mensaje"
                      className="mt-2 w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-secondary))] text-white font-semibold rounded-lg transition"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </motion.div>
            </div>

            {/* DERECHA: Video + datos de contacto */}
            <div className="flex justify-center">
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
                    { icon: <Mail className="w-6 h-6 text-[rgb(var(--color-secondary))]" />, label: 'Correo', content: <a href="mailto:hola@avanxialabs.com" className="hover:underline">hola@avanxialabs.com</a>, note: '(por definir)' },
                    { icon: <Phone className="w-6 h-6 text-[rgb(var(--color-secondary))]" />, label: 'Teléfono', content: <span>+52 220 283 4673</span>, note: 'Puede cambiarse por tu contacto directo' },
                    { icon: <MapPin className="w-6 h-6 text-[rgb(var(--color-secondary))]" />, label: 'Ubicación', content: <span>Toluca, México (remoto NA)</span> },
                    { icon: <Linkedin className="w-6 h-6 text-[rgb(var(--color-secondary))]" />, label: 'LinkedIn', content: <a href="#">Avanxia Labs</a>, note: '(por definir)' },
                  ].map((item, idx) => (
                    <div key={idx} className="glass-panel p-5 rounded-lg shadow-sm border border-[rgb(var(--color-border))] flex items-start gap-4">
                      {item.icon}
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <div className="mt-1">{item.content}</div>
                        {item.note && <p className="text-xs text-[rgba(var(--color-foreground),0.6)]">{item.note}</p>}
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
