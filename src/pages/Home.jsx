import React from 'react'

import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Adjust animation duration as needed
    >
      <h1>Welcome to the Home Page!</h1>
      {/* Your Home page content */}
    </motion.div>
  )
}
