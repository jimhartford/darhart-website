import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ column: 'before' | 'after', index: number } | null>(null)

  const beforeImages = [
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch1-before.JPG`,
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch2-before.JPG`,
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch3-before.JPG`,
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch4-before.jpg`,
  ]

  const afterImages = [
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch1-after.JPG`,
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch2-after.JPG`,
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch3-after.JPG`,
    `${import.meta.env.BASE_URL}images/landscape-photos/mulch4-after.JPG`,
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            OUR WORK
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See some of our recent projects and transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900"
            >
              BEFORE
            </motion.h3>
            <div className="space-y-4">
              {beforeImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage({ column: 'before', index })}
                >
                  <img
                    src={image}
                    alt={`Before image ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900"
            >
              AFTER
            </motion.h3>
            <div className="space-y-4">
              {afterImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage({ column: 'after', index })}
                >
                  <img
                    src={image}
                    alt={`After image ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage.column === 'before' ? beforeImages[selectedImage.index] : afterImages[selectedImage.index]}
                  alt={`Gallery image`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery

