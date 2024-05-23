import React, { Fragment } from 'react';
import { Alert, Typography } from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { Input, Textarea, Button } from '@material-tailwind/react';
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from 'react';
import { GithubOriginal, LinkedinOriginal } from 'devicons-react';
export const Contact = () => {

  const [open, setOpen] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [, setMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone"
  });

  useEffect(() => {
    setValue('subject', `${userName} sent a message from Website`)
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };



  return (
    <motion.div
      className='w-full h-full md:h-full flex items-center justify-center relative backdrop-saturate-50 flex-wrap md:flex-nowrap'
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}>

      <div className='w-3/4 mb-5 md:mx-5 mx-2 md:mb-4 md:w-10/12 md:h-full flex items-center justify-center flex-col relative'>
        <h1 className=' font-bold text-3xl py-8 z-50 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Get In Touch</h1>
        <motion.form
          whileHover={{ scale: 1.05 }}
          onSubmit={handleSubmit(onSubmit)}
          className='md:gap-0 gap-4 w-full md:max-w-xl flex justify-evenly items-center flex-col md:h-96 h-4/5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] rounded-md py-4 px-4'
          action="https://api.web3forms.com/submit"
          method="POST">
          <input {...register("access_key")} type="hidden" name="access_key" value="8b9bb628-dd00-4250-8eb2-e8a8be43283d" />
          <input
            type="hidden"
            {...register("subject")} />
          <input
            type="hidden"
            value="Mission Control"
            {...register("from_name")} />

          <Input {...register("name")} size='lg' color='purple' type="text" label='Name' name='name' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-white h-6">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg>}
            className={`w-full px-4 py-3 text-white border-1 mb-3 rounded-md focus:ring-4 ${errors.name
              ? "border-red-600 focus:border-red-600 ring-red-100"
              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
              }`}
            {...register("name", {
              required: "Name is required",
              maxLength: 35,
            })} />
          {errors.name && (
            <small className='text-red-600'>{errors.name.message}</small>
          )}
          <Input {...register("email")} color='purple' size='lg' type="Email" label='Email' name='email' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-white h-6">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          }
            className={`w-full px-4 py-3 border-1 text-white rounded-md outline-none focus:ring-4 ${errors.email
              ? "border-red-600 focus:border-red-600 ring-red-100"
              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
              }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })} />
          {errors.email && (
            <small className='text-red-600'>{errors.email.message}</small>
          )}
          <Textarea color="purple" label="Message" name='message' size='lg'
            className={`border-1 text-white rounded-md outline-none  h-36  focus:ring-4  ${errors.message
              ? "border-red-600 focus:border-red-600"
              : "border-gray-300 focus:border-indigo-600 "
              }`}
            {...register("message", { required: "Enter your Message" })} />
          {errors.message && (
            <Fragment>
              {" "}
              <small className='text-red-600'>{errors.message.message}</small>
            </Fragment>
          )}
          <Button variant="gradient" size='md' type="submit" className="w-full py-4 text-white transition-colors bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-indigo-200 px-7 umami--click--contact-submit">

            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Submit"
            )}

          </Button>
        </motion.form>

      </div>
      <div className='w-10/12 md:h-full flex justify-center items-center relative'>
        <div className='w-full pb-4 md:pb-0 h-4/5 rounded-l-lg bg-brown-900 flex flex-col justify-center items-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]'>
          <a href="https://github.com/Nikolozi2004" target='_blank' className='px-2 w-full lg:w-2/3 bg-white text-white rounded-sm hover:bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>
            <div className='flex items-center justify-between w-full'>
              <Typography variant="h4">
                GitHub
              </Typography>
              <GithubOriginal size='40 40' color='white' fill='white' className='my-2 h-10 w-10 [&_*]:fill-white' />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nikoloz-meskhi-a69bb2181/" target='_blank' className='px-2 mb-5 w-full lg:w-2/3 bg-white text-white rounded-sm hover:bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>
            <div className='flex items-center justify-between w-full'>
              <Typography variant="h4">
                Linked In
              </Typography>
              <LinkedinOriginal size='40' color='white' fill='white' className='my-2  h-10 w-10' />
            </div>
          </a>
          <a href="mailto:nikolozmeskhi12@gmail.com" target='_self' aria-disabled="false" className='flex items-center justify-between mb-4 w-full lg:w-2/3 h-10 px-2 rounded-md bg-white hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] hover:text-white'>
            <Typography variant="h6">
              nikolozmeskhi12@gmail.com
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </a>
          <div className='flex items-center justify-between mb-4 w-full lg:w-2/3 h-10 px-2 rounded-md bg-white hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] hover:text-white'>
            <Typography variant="h6">
              +995 511 14 58 05
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>

          </div>
          <div className='flex items-center justify-between w-full lg:w-2/3 h-10 px-2 rounded-md bg-white hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] hover:text-white'>
            <Typography variant="h6">
              Tbilisi, Georgia
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      {isSubmitSuccessful && isSuccess && (
        <Alert color='green' open={open} onClose={() => setOpen(false)} className='absolute bottom-0'>
          Your message has been sent.
        </Alert>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <Alert color='red' open={open} onClose={() => setOpen(false)} className='absolute bottom-0'>
          There was an error sending your message. Please try again later.
        </Alert>
      )}
    </motion.div>

  )
}
