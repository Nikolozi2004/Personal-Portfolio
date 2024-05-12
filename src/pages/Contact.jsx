import React from 'react';
import { Alert, Breadcrumbs } from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { Input, Textarea, Button } from '@material-tailwind/react';
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Contact = () => {

  const [open, setOpen] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");
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
      className='w-full h-full flex items-center justify-center relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Breadcrumbs className='absolute top-0 w-72'>
        <Link to='/home' className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <p>Contact</p>
      </Breadcrumbs>
      <div className='bg-blue-gray-900 dark:bg-white w-10/12 h-full flex items-center justify-center flex-col'>
        <h1 className='text-white font-medium text-2xl'>Get In Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md flex justify-evenly items-center flex-col h1' action="https://api.web3forms.com/submit" method="POST">

          <input {...register("access_key")} type="hidden" name="access_key" value="8b9bb628-dd00-4250-8eb2-e8a8be43283d" />
          <input
            type="hidden"
            {...register("subject")} />
          <input
            type="hidden"
            value="Mission Control"
            {...register("from_name")} />

          <Input {...register("name")} size='lg' color='white' type="text" label='Name' name='name' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-white h-6">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg>}
            className={`w-full px-4 py-3 border-1  rounded-md focus:ring-4 ${errors.name
              ? "border-red-600 focus:border-red-600 ring-red-100"
              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
              }`}
            {...register("name", {
              required: "Name is required",
              maxLength: 35,
            })} />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
          <Input {...register("email")} color='white' size='lg' type="Email" label='Email' name='email' icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-white h-6">
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
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
          <Textarea color="White" label="Message" name='message' size='lg'
            className={`border-1 text-white rounded-md outline-none  h-36  focus:ring-4  ${errors.message
              ? "border-red-600 focus:border-red-600"
              : "border-gray-300 focus:border-indigo-600 "
              }`}
            {...register("message", { required: "Enter your Message" })} />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
          <Button type="submit" variant='gradient' className="w-full py-4 text-white transition-colors bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-indigo-200 px-7 umami--click--contact-submit">

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
        </form>

      </div>
      <div className='w-1/2 h-full flex justify-center items-center'>
        hello
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
