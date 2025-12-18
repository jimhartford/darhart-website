import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'It looks amazing',
      size: 'text-3xl md:text-4xl',
      position: { top: '5%', left: '10%' },
      rotation: -3,
      delay: 0.1,
    },
    {
      text: "The most easiest and smooth process I've ever experienced",
      size: 'text-xl md:text-2xl',
      position: { top: '15%', right: '5%' },
      rotation: 2,
      delay: 0.2,
    },
    {
      text: 'Will 100% recommend to everyone I know',
      size: 'text-2xl md:text-3xl',
      position: { bottom: '25%', left: '15%' },
      rotation: -2,
      delay: 0.3,
    },
    {
      text: 'They are hardworking, dependable, and ready to help get your property looking its best',
      size: 'text-lg md:text-xl',
      position: { bottom: '10%', right: '10%' },
      rotation: 3,
      delay: 0.4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative min-h-[500px] md:min-h-[600px]">
      <style>{`
        @media (max-width: 767px) {
          .testimonial-item {
            position: static !important;
            transform: none !important;
          }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            WHAT OUR CLIENTS ARE SAYING
          </h2>
        </motion.div>

        <div className="flex flex-col items-center md:items-start md:relative max-w-6xl mx-auto md:h-[500px] gap-6 md:gap-0">
          {testimonials.map((testimonial, index) => {
            const desktopStyles: React.CSSProperties = {
              top: testimonial.position.top,
              left: testimonial.position.left,
              right: testimonial.position.right,
              bottom: testimonial.position.bottom,
              transform: `rotate(${testimonial.rotation}deg)`,
            }
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                className={`testimonial-item ${testimonial.size} font-semibold text-gray-800 italic text-center md:text-left max-w-xs md:max-w-sm md:absolute`}
                style={desktopStyles}
              >
                "{testimonial.text}"
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

