import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            ABOUT US
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Lawn care professional"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Darhart Lawn Care specializes in the creative design, professional
                installation and maintenance of landscape plantings, walkways, patios,
                retaining walls, landscape lighting, water gardens and other landscape
                amenities.
              </p>
              <p className="text-lg leading-relaxed">
                We will enhance the beauty of your home or business by creating an
                artistic and practical design suited to your specific needs. To ensure
                a quality job, we employ only the best and most qualified personnel in
                the landscape industry.
              </p>
              <p className="text-lg leading-relaxed">
                Your satisfaction is very important to us. From start to finish, our
                staff will make every effort to keep you informed and involved in your
                outdoor improvement project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

