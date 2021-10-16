import * as Yup from 'yup'

let schema = Yup.object().shape({
    name:Yup.string().min(2, 'Precisa ter mais do que 2 caracteres').required('Campo obrigatório'),

    digitos: Yup.number().min(4,'Deve ter 4 digitos')
    .required('Campo obrigatório'),
    
   // digitos: Yup.number().max(4,'Deve ter 4 digitos')
   // .required('Campo obrigatório'),

    limite: Yup.number().min(1,'Não pode ser menor do que 1')
    .required('Campo obrigatório'),
    
    
    dataDePagamento: Yup.number().min(1,'Não pode ser menor do que 1')
    .required('Campo obrigatório'),

    tipo: Yup.string().min(1,'Não pode ser menor do que 1')
    .required('Campo obrigatório'),
  
    
    
})

export default schema