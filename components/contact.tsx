'use client'

import { Button } from '@/components/ui/button'
import { SocialButton } from './ui/social-button'
import { iconsMap, MailIcon } from './ui/icons'
import { SocialHandle } from '@/lib/interface'
import * as Yup from 'yup'
import { FormInput, Textarea } from './ui/form-input'
import { useState } from 'react'
import { useFormik } from 'formik'
import { toast, Bounce, ToastContainer } from 'react-toastify'
import {
  MotionAnimatedText,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from './ui/transitions'

interface SocialProps {
  social: SocialHandle[]
}

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('Por favor, informe um e-mail válido.')
    .required('E-mail é obrigatório.'),
  message: Yup.string().required('Mensagem é obrigatória.'),
})

export function ContactSection({ social }: SocialProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)
      try {
        const response = await fetch('https://submit-form.com/kLkLgWqF9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(values),
        })

        if (response.ok) {
          toast.success('Mensagem enviada com sucesso!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          })
          formik.resetForm()
        } else {
          throw new Error('Erro na resposta')
        }
      } catch (error) {
        toast.error('Erro ao enviar a mensagem. Tente novamente.', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        })
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  return (
    <section id='contact' className='w-full py-12 md:py-24 lg:py-32 relative'>
      <Transition>
        <span className='blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10 opacity-50' />
      </Transition>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
          <div className='flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <SectionHeading className='overflow-hidden tracking-tighter text-start'>
                <SlideIn className='text-accent-foreground/50'>
                  Vamos trabalhar
                </SlideIn>
                <br />
                <SlideIn>
                  juntos<span className='text-primary'>.</span>
                </SlideIn>
              </SectionHeading>

              {/* <Transition>
                <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxe '>
                  Estou disponível para novos projetos. Entre em contato para
                  discutirmos como posso ajudar a transformar suas ideias em
                  realidade.
                </p>
              </Transition> */}

              <div className='text-start max-w-[1200px] text-xl/relaxed text-muted-foreground'>
                <MotionAnimatedText>
                  Estou disponível para novos projetos. Entre em contato para discutirmos como posso ajudar a transformar suas ideias em realidade.
                </MotionAnimatedText>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <SlideIn className='flex items-center'>
                  <MailIcon className='h-5 w-5 mr-2 text-primary' />
                  <span>fernandavazdev@gmail.com</span>
                </SlideIn>
              </div>
              <div className='flex space-x-4'>
                {social.map((item, index) => {
                  const IconComponent =
                    iconsMap[item.icon as keyof typeof iconsMap]

                  return (
                    <Transition key={index}>
                      <SocialButton
                        icon={<IconComponent className='h-5 w-5' />}
                        platform={item.platform}
                        url={item.url}
                      />
                    </Transition>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='space-y-4 mt-8'>
            <Transition>
              <h2 className='max-w-[600px] text-muted-foreground md:text-xl/relaxe '>
                Vamos conversar!
              </h2>
            </Transition>
            <SlideIn className='space-y-4 w-full'>
              <form className='space-y-4' onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <FormInput
                      id='name'
                      name='name'
                      placeholder='Seu nome'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className='w-full rounded-lg px-4 py-2 border border-secondary focus:border-primary focus:outline-none'
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className='text-red-400 text-sm mt-1'>
                        {formik.errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <FormInput
                      id='email'
                      type='email'
                      placeholder='Seu email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className='w-full rounded-lg px-4 py-2 border border-secondary focus:border-primary focus:outline-none'
                    />

                    {formik.touched.email && formik.errors.email && (
                      <p className='text-red-400 text-sm mt-1'>
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Textarea
                    id='message'
                    placeholder='Sua mensagem'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-full rounded-lg px-4 py-2 border border-secondary focus:border-primary focus:outline-none'
                    rows={4}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className='text-red-400 text-sm mt-1'>
                      {formik.errors.message}
                    </p>
                  )}
                </div>
                <Button
                  variant='secondary'
                  className='w-full'
                  type='submit'
                  disabled={isSubmitting}
                >
                  <TextReveal>
                    {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                  </TextReveal>
                </Button>
              </form>
            </SlideIn>
          </div>
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </section>
  )
}
