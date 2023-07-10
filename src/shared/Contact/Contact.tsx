import React from 'react'
import { ContactContainer } from './Contact.style'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Nav from '../Nav/Nav';
import Line from '../Line/Line';
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan';
import Button from '../Button/Button';


const schema = yup.object({
  email:yup.string().email().required(),
  name:yup.string().required(),
  message:yup.string().required(),
})
type ContactFormType = yup.InferType<typeof schema>


const Contact = ()=>{

 
  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<ContactFormType>({ resolver: yupResolver(schema) });

  const onSubmit=(data:ContactFormType)=>{
    console.log(data)
  }
  return (
    <ContactContainer>
      <div className='contact-form-main'>
        <div className='contact_content_pane'>
          <h1>Contact</h1>
          <p>
        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form 
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWithLabel 
            label='NAME'
            register={register('name')}
            errorMessage={errors.name?.message}
          />
          <br />
          <br />

          <InputWithLabel 
            label='EMAIL'
            register={register('email')}
            errorMessage={errors.email?.message}
          />
          <br />
          <br />
          <InputWithLabel 
            label='MESSAGE'
            register={register('message')}
            errorMessage={errors.message?.message}
            is_textarea={true}
          />
          <br /><br />
          <Button style={{'marginLeft':'auto','display':'block'}} >SEND MESSAGE</Button>
          <br /><br /><br />
        </form>
      </div>
      <Line />
      <Nav />

    </ContactContainer>
  )
}

export default Contact