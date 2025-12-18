import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Sprout, Wrench, Palette, HardHat, Droplets, Lightbulb } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Lawn Cutting & Fertilization',
      description: 'Regular mowing and professional fertilization to keep your lawn healthy and vibrant.',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    },
    {
      title: 'Property Maintenance',
      description: 'Comprehensive property maintenance services to keep your landscape looking its best.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    },
    {
      title: 'Landscape Design & Installation',
      description: 'Creative landscape design and professional installation tailored to your vision.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    },
    {
      title: 'Hardscape Services',
      description: 'Patios, walkways, retaining walls, and other hardscape features.',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    },
    {
      title: 'Water Features',
      description: 'Beautiful water gardens and fountains to add tranquility to your space.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    },
    {
      title: 'Landscape Lighting',
      description: 'Architectural and event lighting to enhance your property\'s beauty day and night.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive lawn care and landscaping services for residential and commercial properties
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-lawn-600" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

