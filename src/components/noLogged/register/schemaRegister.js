import * as Yup from 'yup'

let schema = Yup.object().shape({
    nome:Yup.string().min(2, 'Precisa ser maior que 2').required('Campo obrigatório'),
    sobrenome: Yup.string().min(2, 'Precisa ser maior que 2').required('Campo obrigatório') ,
    email: Yup.string().email('Precisa ser um email válido').required('Campo obrigatório'),
    telefone: Yup.string().min(7).required('Campo obrigatório'),
    datanasc: Yup.date().required('Campo obrigatório'),
    senha: Yup.string().min(6, 'Precisa ser maior que 6 caracteres').required('Campo obrigatório'),
})

export default schema