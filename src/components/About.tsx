import { motion } from 'framer-motion'

const About = () => {
  const founders = [
    {
      name: 'Samuel Darla',
      role: 'Co-Founder',
      image: `${import.meta.env.BASE_URL}images/about-us/samuel-darla.jpg`,
      bio: "I'm Samuel Darla, co-founder of Darla Hartford, and I take pride in being directly involved in the work we do. From planning and site preparation to installation and final walkthroughs, I personally oversee projects to ensure every detail meets our standards. My dedication is rooted in quality workmanship, clear communication, and delivering results our clients can trust.",
    },
    {
      name: 'Malik Hartford',
      role: 'Co-Founder',
      image: `${import.meta.env.BASE_URL}images/about-us/malik-hartford.jpg`,
      bio: "I grew up in the West Chester community, where I developed a strong work ethic and respect for doing things the right way. That mindset carried with me to Ohio State, where playing football reinforced discipline and accountability. As a co-founder of Darla Hartford, my focus is on building a business that is organized, consistent, and built to last, ensuring our clients receive professional service they can trust every step of the way.",
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
              Our mission is to build a landscaping company people can rely on and feel confident hiring, one that values care, consistency, and pride in every project. We believe the quality of our work starts long before we ever arrive on a property, through preparation, communication, and thoughtful planning. As a locally rooted business, we take pride in serving our community, building long-term relationships, and creating outdoor spaces that reflect the standards and integrity we bring to everything we do.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

