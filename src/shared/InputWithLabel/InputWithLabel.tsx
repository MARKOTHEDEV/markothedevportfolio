import { InputWithLabelContainer,TextAreaWithLabelContainer } from './InputWithLabel.style'



type Prop ={
    register:any,
    errorMessage?:string,
    label:string,
    is_textarea?:boolean,
}
const InputWithLabel = ({errorMessage,label,register,is_textarea}:Prop)=>{

  return (
    <>
      {
        is_textarea?
          <TextAreaWithLabelContainer
            type="text" 
            className={errorMessage?'is_error':''}
            placeholder={label}
            {...register}
          />:

          <InputWithLabelContainer
            type="text" 
            className={errorMessage?'is_error':''}
            placeholder={label}
            {...register}
          />
      }    
    </>
  )
}

export default InputWithLabel