"use client"

import Link from 'next/link'

import { handleForm } from './actions'

import { useEffect, useState } from 'react'

export default function Home() {
  const [subjectError, setSubjectError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [messageError, setMessageError] = useState("")
  const [captchaError, setCaptchaError] = useState("")

  const [captcha, setCaptcha] = useState("")
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [captchaRiddle, setCaptchaRiddle] = useState("")

  const [formSubmitted, setFormSubmitted] = useState(false)

  const numbersToWordsMapping =  ["first","second","third","fourth","fifth","sixth","seventh","eight","ninth", "tenth" ];

  async function setCaptchas() {
    const _captcha = Math.random().toString(36).slice(-10);
    const _captchaAnswerNumber = Math.floor(Math.random() * _captcha.length);
    const _captchaAnswer = _captcha[_captchaAnswerNumber];
    const _captchaRiddle = numbersToWordsMapping[_captchaAnswerNumber];

    await setCaptcha(_captcha);
    await setCaptchaAnswer(_captchaAnswer);
    await setCaptchaRiddle(_captchaRiddle);

    // set focus to captcha input
    const captchaInput = document.querySelector<HTMLInputElement>('input[name="captcha"]');
    if (captchaInput)
      captchaInput.focus();
  }

  function emailValidation(email: string)
  {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function captchaCheck(captcha: string)
  {
    if (captcha === captchaAnswer) {
      return true
    } else {
      return false
    }
  }

  function resetPage()
  {
    setSubjectError("")
    setEmailError("")
    setMessageError("")
    setCaptchaError("")
    setCaptcha("")
    setCaptchaAnswer("")
    setCaptchaRiddle("")
    setFormSubmitted(false)
  }
  
  async function handleFormClient(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let subjectValid = false;
    let emailValid = false;
    let messageValid = false;
    let captchaValid = false;
    
    // Convert FormData to JSON object
    const data = Object.fromEntries(formData.entries());
    const subject: string = String(data.subject);
    const email: string = String(data.email);
    const message: string = String(data.message);
    const captcha: string = String(data.captcha);

    // Form validation
    // Check if subject is empty or too long
    if (subject.length === 0) {
      setSubjectError("Subject is required")
    } else if (subject.length > 200) {
      setSubjectError("Subject is too long")
    } else {
      setSubjectError("")
      subjectValid = true;
    }

    // Check if email is valid
    if (email.length > 0) {
      if (emailValidation(email) == false) {
        setEmailError("Email is not valid")
      } else {
        setEmailError("")
        emailValid = true;
      }
    } else {
      setEmailError("")
      emailValid = true;
    }

    // Check if message is empty or too long
    if (message.length === 0) {
      setMessageError("Message is required")
    } else if (message.length > 600) {
      setMessageError("Message is too long")
    } else {
      setMessageError("")
      messageValid = true;
    }

    // Check if captcha is correct
    if (captcha.length === 0) {
      setCaptchaError("Captcha is required")
    } else if (!captchaCheck(captcha)) {
      setCaptchaError("Captcha is incorrect")
    } else {
      setCaptchaError("")
      captchaValid = true;
    }

    // Check if all fields are valid
    if (subjectValid && emailValid && messageValid && captchaValid) {
      await handleForm(formData)
      setFormSubmitted(true)
    }
  }
    return (
      <main className="flex min-h-screen flex-col items-center">
        <h1 className="text-4xl font-bold">Contact</h1> 
        <p>Get in touch with the developer</p> 
        <Link href={"/about"} className="fond-bold underline">Sebastiaan Kolmschate</Link> 

        {!formSubmitted &&
        <form action={handleForm} className="bg-white text-black p-6" onSubmit={handleFormClient}>
          <div className='form'>
            <label htmlFor="subject" className="block font-bold">Subject</label>
            <input name='subject' className="border-2 border-black" type="text"/>
            {subjectError.length > 0 && <p className="text-red-500">{subjectError}</p>}
          </div>
          <div className="mt-3" >
            <label htmlFor="email" className="block font-bold">Email</label>
            <input name='email' className="border-2 border-black"/>
            {emailError.length > 0 && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="mt-3" >
            <label htmlFor="message" className="block font-bold">Message</label>
            <textarea name='message' className="border-2 border-black"/>
            {messageError.length > 0 && <p className="text-red-500">{messageError}</p>}
          </div>
          {/* < Captcha /> */}
          <div className='mt-3 bg-black text-white p-3'>
            <label htmlFor="captcha" className="block font-bold">Captcha</label>
            {captcha.length == 0 &&
            <button className='text-center bg-blue-600 p-1' type="button" onClick={setCaptchas}>Generate</button>
            }
            {captcha.length != 0 &&
            <div>
              <p className='mt-3 mb-3 text-center'>{captcha}</p>
              <p>Enter the {captchaRiddle} character</p>
              <p> of the characters above</p>
              <input className="text-black border-2 border-black" name='captcha'/>
            </div>
            }
            {captchaError.length > 0 && <p className="text-red-500">{captchaError}</p>}
            
          </div>
          <div className="mt-3" >
            <button className="bg-black text-white p-2">Send</button>
          </div>
        </form>
        }
        {formSubmitted &&
        <div className="bg-white">
          <div className="p-3 text-black">
            <p className='font-bold'>Thank you for your message!</p>
            <p>I will get back to you as soon as possible.</p>
            <p>Greetings, Sebastiaan :)</p>
            <button className='bg-black mt-2 text-white p-1' onClick={resetPage}>Return</button>
          </div>
        </div>
        }
      </main>
    )
  }