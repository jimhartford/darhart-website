import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen md:h-[700px] lg:h-[800px] flex items-center justify-center bg-gradient-to-br from-lawn-600 via-lawn-700 to-lawn-800 text-white"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}images/hero/grass.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex items-center justify-center min-h-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            THOROUGH. RELIABLE. FRIENDLY.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional lawn care and landscaping services to enhance the beauty
            of your home or business.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="tel:+15132593912"
              className="flex items-center gap-2 text-xl font-semibold hover:text-lawn-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL TODAY! (513) 259-3912
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

