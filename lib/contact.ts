import * as Yup from 'yup'

export const contactValidationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string().email('Por favor, informe um e-mail válido.').required('E-mail é obrigatório.'),
  message: Yup.string().required('Mensagem é obrigatória.'),
})

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export async function submitContactForm(values: ContactFormValues) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(values),
  })

  if (!response.ok) throw new Error('Erro na resposta do formulário')
}
