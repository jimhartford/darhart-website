import { motion } from 'framer-motion'

const About = () => {
  const founders = [
    {
      name: 'Tim Darhart',
      role: 'Co-Founder & Lead Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      bio: 'With over 15 years of experience in landscape design and installation, Tim brings creative vision and technical expertise to every project. His passion for transforming outdoor spaces has helped countless homeowners and businesses create their dream landscapes.',
    },
    {
      name: 'Sarah Darhart',
      role: 'Co-Founder & Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
      bio: 'Sarah oversees operations and client relations, ensuring every project runs smoothly from concept to completion. Her dedication to customer satisfaction and attention to detail has built lasting relationships with clients throughout the community.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            ABOUT US
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meet the dedicated team behind Darla Hartford Landscaping, committed to bringing your outdoor vision to life.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-lawn-600 font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Darla Hartford Landscaping specializes in the creative design, professional installation, and maintenance
              of landscape plantings, walkways, patios, retaining walls, landscape lighting, water gardens, and
              other landscape amenities. We enhance the beauty of your home or business by creating artistic and
              practical designs suited to your specific needs. Your satisfaction is very important to us, and our
              team will make every effort to keep you informed and involved throughout your outdoor improvement project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

