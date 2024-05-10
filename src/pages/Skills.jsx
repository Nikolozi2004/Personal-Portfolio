import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@material-tailwind/react'


export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div>Skills
      <Button>Button</Button>
      </div>
    </motion.div>
  )
}
