import { motion } from 'framer-motion'

const ContactForm = () => {
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
            Fill out the form below and we'll get back to you soon
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-full rounded-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdq6nXGBGwdBgcwX3yTmbHPUa4n2yn-IP8-8-HvadFcGsbu4A/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full border-0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm

