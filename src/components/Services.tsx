import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Sprout, Palette, Flower2, Trash2, Sparkles, Snowflake } from 'lucide-react'
import { trackServiceClick } from '../lib/analytics'

const Services = () => {
  const services = [
    {
      title: 'Lawn Care & Turf Maintenance',
      description: 'Consistent care for healthy, sharp-looking lawns. Weekly/bi-weekly mowing, string trimming, edging, blowing, weed control & turf upkeep.',
      icon: Sprout,
      image: `${import.meta.env.BASE_URL}images/landscape-photos/lawn-care-turf.JPG`,
    },
    {
      title: 'Landscape Design & Installations',
      description: 'Custom enhancements and new landscape features. Landscape bed design & installs, flower planting, tree planting, and small landscape projects.',
      icon: Palette,
      image: `${import.meta.env.BASE_URL}images/landscape-photos/landscaping-design.jpg`,
    },
    {
      title: 'Mulching, Beds & Plant Care',
      description: 'Detail-focused services that define curb appeal. Mulch installation, bed edging, shrub trimming, hedge shaping, and tree pruning.',
      icon: Flower2,
      image: `${import.meta.env.BASE_URL}images/landscape-photos/mulching.JPG`,
    },
    {
      title: 'Property Clean-Ups & Debris Removal',
      description: 'One-time or recurring cleanup solutions. Spring & fall clean-ups, leaf removal, branch & debris removal, and end-of-season weed control.',
      icon: Trash2,
      image: `${import.meta.env.BASE_URL}images/landscape-photos/raking-leaves.jpg`,
    },
    {
      title: 'Exterior Cleaning & Specialty Services',
      description: 'High-impact services beyond landscaping. Power washing, holiday light installation & takedown, and tree & plant protection for winter.',
      icon: Sparkles,
      image: `${import.meta.env.BASE_URL}images/landscape-photos/power-washing.jpg`,
    },
    {
      title: 'Snow & Ice Management',
      description: 'Reliable winter safety and access. Snow plowing, snow blowing, sidewalk shoveling, salting & ice management.',
      icon: Snowflake,
      image: `${import.meta.env.BASE_URL}images/landscape-photos/shoveling.jpg`,
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
                <Card 
                  className="h-full hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => trackServiceClick(service.title)}
                >
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

