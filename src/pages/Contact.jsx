import React from 'react'
import { motion } from 'framer-motion'
import { Input, Textarea, Button } from '@material-tailwind/react'
export const Contact = () => {
  return (
    <motion.div
      className='w-full h-full flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='bg-black w-10/12 h-full flex items-center justify-center flex-col'>
        <h1 className='font font-sans'>Contact</h1>
        <form className='w-full max-w-md flex justify-evenly items-center flex-col h-10/12' action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="8b9bb628-dd00-4250-8eb2-e8a8be43283d" />
          <Input size='lg' type="text" label='Name' name='name' className='m-auto' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg>
          } />
          <Input size='lg' type="Email" label='Email' name='email' className='m-auto ' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          } />
          <Input size='lg' type="text" label='Subject' name='subject' className='m-auto' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          } />
          <Textarea label="Message" name='message' />
          <Button type="submit" variant='gradient'>Submit</Button>
        </form>
      </div>
      <div className='w-1/2 h-full flex justify-center items-center'>
          hello niggaz
      </div>

    </motion.div>

  )
}
