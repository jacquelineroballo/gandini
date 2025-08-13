import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Send, User, Mail, Phone, MessageSquare, Briefcase, CheckCircle2, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [focusedField, setFocusedField] = useState<string | null>(null)
	const [errors, setErrors] = useState<Record<string, string>>({})

	// Inicializar EmailJS
	useEffect(() => {
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
	}, [])

	const validateField = (name: string, value: string) => {
		const newErrors = { ...errors }
		
		switch (name) {
			case 'name':
				if (!value.trim()) newErrors.name = 'El nombre es requerido'
				else if (value.length < 2) newErrors.name = 'El nombre debe tener al menos 2 caracteres'
				else delete newErrors.name
				break
			case 'email':
				{ const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
				if (!value.trim()) newErrors.email = 'El email es requerido'
				else if (!emailRegex.test(value)) newErrors.email = 'Email inválido'
				else delete newErrors.email
				break }
			case 'message':
				if (!value.trim()) newErrors.message = 'El mensaje es requerido'
				else if (value.length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
				else delete newErrors.message
				break
		}
		
		setErrors(newErrors)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		validateField(name, value)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			// Verificar que las variables de entorno estén definidas
			const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
			const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
			const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

			if (!serviceId || !templateId || !publicKey) {
				throw new Error('Variables de entorno de EmailJS no configuradas')
			}

			// Configuración de EmailJS
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				phone: formData.phone,
				service: formData.service,
				message: formData.message,
				to_name: 'Gandini Construcciones',
			}

			console.log('Enviando email con parámetros:', templateParams)
			console.log('Service ID:', serviceId)
			console.log('Template ID:', templateId)

			// Enviar email usando EmailJS
			const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)

			console.log('Email enviado exitosamente:', result)
			toast.success('Mensaje enviado correctamente. Nos pondremos en contacto pronto.')

			// Limpiar formulario
			setFormData({
				name: '',
				email: '',
				phone: '',
				service: '',
				message: '',
			})
		} catch (error) {
			console.error('Error sending email:', error)

			// Mostrar error más específico
			if (error instanceof Error) {
				toast.error(`Error: ${error.message}`)
			} else {
				toast.error('Error al enviar el mensaje. Verifica la configuración de EmailJS.')
			}
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<motion.div 
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 relative overflow-hidden"
		>
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-construction-teal-500/10 to-construction-blue-500/10 rounded-full -translate-y-16 translate-x-16" />
			<div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-construction-teal-400/10 to-construction-blue-600/10 rounded-full translate-y-12 -translate-x-12" />
			
			<div className="relative z-10">
				<div className="text-center mb-8">
					<motion.div 
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						className="w-16 h-16 bg-gradient-to-br from-construction-teal-500 to-construction-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
					>
						<MessageSquare className="text-white" size={28} />
					</motion.div>
					<h3 className="text-2xl font-bold text-construction-gray-800 mb-2">¡Hablemos de tu proyecto!</h3>
					<p className="text-construction-gray-600">Completa el formulario y te contactaremos en menos de 24 horas</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Name Field */}
						<motion.div 
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 }}
							className="relative group"
						>
							<label className="block text-sm font-semibold text-construction-gray-700 mb-2 flex items-center gap-2">
								<User size={16} className="text-construction-teal-500" />
								Nombre Completo *
							</label>
							<div className="relative">
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									onFocus={() => setFocusedField('name')}
									onBlur={() => setFocusedField(null)}
									required
									className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder:text-construction-gray-400 ${
										errors.name 
											? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
											: focusedField === 'name' 
												? 'border-construction-teal-500 focus:ring-4 focus:ring-construction-teal-500/20 shadow-lg' 
												: 'border-construction-gray-200 hover:border-construction-gray-300'
									}`}
									placeholder="Ingresa tu nombre completo"
								/>
								{formData.name && !errors.name && (
									<CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
								)}
							</div>
							<AnimatePresence>
								{errors.name && (
									<motion.p 
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="text-red-500 text-sm mt-1 flex items-center gap-1"
									>
										{errors.name}
									</motion.p>
								)}
							</AnimatePresence>
						</motion.div>

						{/* Email Field */}
						<motion.div 
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
							className="relative group"
						>
							<label className="block text-sm font-semibold text-construction-gray-700 mb-2 flex items-center gap-2">
								<Mail size={16} className="text-construction-teal-500" />
								Correo Electrónico *
							</label>
							<div className="relative">
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									onFocus={() => setFocusedField('email')}
									onBlur={() => setFocusedField(null)}
									required
									className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder:text-construction-gray-400 ${
										errors.email 
											? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
											: focusedField === 'email' 
												? 'border-construction-teal-500 focus:ring-4 focus:ring-construction-teal-500/20 shadow-lg' 
												: 'border-construction-gray-200 hover:border-construction-gray-300'
									}`}
									placeholder="tu@email.com"
								/>
								{formData.email && !errors.email && (
									<CheckCircle2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
								)}
							</div>
							<AnimatePresence>
								{errors.email && (
									<motion.p 
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="text-red-500 text-sm mt-1"
									>
										{errors.email}
									</motion.p>
								)}
							</AnimatePresence>
						</motion.div>

						{/* Phone Field */}
						<motion.div 
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5 }}
							className="relative group"
						>
							<label className="block text-sm font-semibold text-construction-gray-700 mb-2 flex items-center gap-2">
								<Phone size={16} className="text-construction-teal-500" />
								Teléfono
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								onFocus={() => setFocusedField('phone')}
								onBlur={() => setFocusedField(null)}
								className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder:text-construction-gray-400 ${
									focusedField === 'phone' 
										? 'border-construction-teal-500 focus:ring-4 focus:ring-construction-teal-500/20 shadow-lg' 
										: 'border-construction-gray-200 hover:border-construction-gray-300'
								}`}
								placeholder="+1 (555) 123-4567"
							/>
						</motion.div>

						{/* Service Field */}
						<motion.div 
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6 }}
							className="relative group"
						>
							<label className="block text-sm font-semibold text-construction-gray-700 mb-2 flex items-center gap-2">
								<Briefcase size={16} className="text-construction-teal-500" />
								Servicio de Interés
							</label>
							<select
								id="service"
								name="service"
								value={formData.service}
								onChange={handleChange}
								onFocus={() => setFocusedField('service')}
								onBlur={() => setFocusedField(null)}
								className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
									focusedField === 'service' 
										? 'border-construction-teal-500 focus:ring-4 focus:ring-construction-teal-500/20 shadow-lg' 
										: 'border-construction-gray-200 hover:border-construction-gray-300'
								}`}
							>
								<option value="">Selecciona un servicio</option>
								<option value="residencial">🏠 Construcción Residencial</option>
								<option value="comercial">🏢 Construcción Comercial</option>
								<option value="renovacion">🔨 Renovaciones</option>
								<option value="albanileria">🧱 Albañilería Especializada</option>
								<option value="diseno">📐 Diseño Arquitectónico</option>
								<option value="otro">💡 Otro</option>
							</select>
						</motion.div>
					</div>

					{/* Message Field */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="relative group"
					>
						<label className="block text-sm font-semibold text-construction-gray-700 mb-2 flex items-center gap-2">
							<MessageSquare size={16} className="text-construction-teal-500" />
							Mensaje *
						</label>
						<div className="relative">
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								onFocus={() => setFocusedField('message')}
								onBlur={() => setFocusedField(null)}
								required
								rows={5}
								className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder:text-construction-gray-400 resize-none ${
									errors.message 
										? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
										: focusedField === 'message' 
											? 'border-construction-teal-500 focus:ring-4 focus:ring-construction-teal-500/20 shadow-lg' 
											: 'border-construction-gray-200 hover:border-construction-gray-300'
								}`}
								placeholder="Cuéntanos sobre tu proyecto... ¿Qué tienes en mente? ¿Cuáles son tus objetivos y expectativas?"
							/>
							<div className="absolute bottom-3 right-3 text-xs text-construction-gray-400">
								{formData.message.length}/500
							</div>
						</div>
						<AnimatePresence>
							{errors.message && (
								<motion.p 
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="text-red-500 text-sm mt-1"
								>
									{errors.message}
								</motion.p>
							)}
						</AnimatePresence>
					</motion.div>

					{/* Submit Button */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="text-center"
					>
						<Button
							type="submit"
							disabled={isSubmitting || Object.keys(errors).length > 0}
							className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-construction-teal-500 to-construction-blue-600 hover:from-construction-teal-600 hover:to-construction-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
						>
							<div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
							<div className="relative flex items-center justify-center gap-2">
								{isSubmitting ? (
									<>
										<Loader2 className="animate-spin" size={20} />
										Enviando...
									</>
								) : (
									<>
										<Send size={20} />
										Enviar Mensaje
									</>
								)}
							</div>
						</Button>
						<p className="text-xs text-construction-gray-500 mt-3 flex items-center justify-center gap-1">
							<CheckCircle2 size={14} className="text-green-500" />
							Tus datos están protegidos y no serán compartidos
						</p>
					</motion.div>
				</form>
			</div>
		</motion.div>
	)
}

export default ContactForm
