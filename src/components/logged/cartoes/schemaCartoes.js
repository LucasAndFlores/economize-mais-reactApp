import * as Yup from 'yup'

let schema = Yup.object().shape({
    name:Yup.string().min(2, 'Precisa ter mais do que 2 caracteres').required('Campo obrigatório'),

    digitos: Yup.number().min(4,'Deve ter 4 digitos')
    .required('Campo obrigatório'),
    //.max(4, 'Deve ter 4 digitos'),

    limite: Yup.number().min(1,'Não pode ser menor do que 1')
    .required('Campo obrigatório'),
    
    
    data_de_pagamento: Yup.number().min(1,'Não pode ser menor do que 1')
    .required('Campo obrigatório'),
    //.max(30, 'Não pode ser maior do que 30'),
    
    //tipo: Yup.string().oneOf('débito','crédito')
    //.required('Campo obrigatório'),
    
    
})

export default schema