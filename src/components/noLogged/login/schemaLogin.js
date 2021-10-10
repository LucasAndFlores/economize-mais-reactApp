import * as Yup from 'yup'

let schemaLogin = Yup.object().shape({
    email: Yup.string().email('Precisa ser um email válido').required('Campo obrigatório'),
    senha: Yup.string().min(6, 'Precisa ser maior que 6 caracteres').required('Campo obrigatório'),
})

export default schemaLogin