import * as Yup from 'yup'

let schemaEntradas = Yup.object().shape({
    nome: Yup.string().min(2, "Precisa ser maior que duas letras").required("Campo obrigatório"),
    valor: Yup.number().positive("Não aceitamos numero negativo").required("Campo obrigatório"),
    data: Yup.date().required("Campo obrigatório"),
})

export default schemaEntradas