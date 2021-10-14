import * as Yup from 'yup'

let schemaTransaction = Yup.object().shape({
    loja: Yup.string().min(2, "Precisa ser maior que duas letras").required("Campo obrigatório"),
    dataTransacao: Yup.date().required("Campo obrigatório"),
    valor: Yup.number().positive("Não aceitamos numero negativo").required("Campo obrigatório"),
    // meioPagamento: Yup.string().required("Campo obrigatório"),
})

export default schemaTransaction