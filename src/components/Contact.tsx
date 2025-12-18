import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Form, FormField, FormLabel, FormMessage } from './ui/form'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            CONTACT US
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch for a free estimate on your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <FormField>
                    <FormLabel htmlFor="firstName">First Name *</FormLabel>
                    <Input
                      id="firstName"
                      {...register('firstName')}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <FormMessage>{errors.firstName.message}</FormMessage>
                    )}
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="lastName">Last Name *</FormLabel>
                    <Input
                      id="lastName"
                      {...register('lastName')}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <FormMessage>{errors.lastName.message}</FormMessage>
                    )}
                  </FormField>
                </div>

                <FormField>
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <FormMessage>{errors.email.message}</FormMessage>
                  )}
                </FormField>

                <FormField>
                  <FormLabel htmlFor="phone">Phone *</FormLabel>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <FormMessage>{errors.phone.message}</FormMessage>
                  )}
                </FormField>

                <FormField>
                  <FormLabel htmlFor="address">Street Address</FormLabel>
                  <Input
                    id="address"
                    {...register('address')}
                    placeholder="123 Main St"
                  />
                </FormField>

                <div className="grid grid-cols-2 gap-4">
                  <FormField>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <Input
                      id="city"
                      {...register('city')}
                      placeholder="Your City"
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="state">State/Province</FormLabel>
                    <Input
                      id="state"
                      {...register('state')}
                      placeholder="ST"
                    />
                  </FormField>
                </div>

                <FormField>
                  <FormLabel htmlFor="message">Message *</FormLabel>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                  {errors.message && (
                    <FormMessage>{errors.message.message}</FormMessage>
                  )}
                </FormField>

                {submitSuccess && (
                  <div className="p-4 bg-lawn-100 text-lawn-800 rounded-md mb-4">
                    Thanks for submitting! We'll get back to you soon.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lawn-600 hover:bg-lawn-700"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-lawn-600 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">
                      123 Main Street<br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-lawn-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-lawn-600 hover:text-lawn-700"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-lawn-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@darhartlawncare.com"
                      className="text-lawn-600 hover:text-lawn-700"
                    >
                      info@darhartlawncare.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">Monday - Friday:</span> 7:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 8:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

