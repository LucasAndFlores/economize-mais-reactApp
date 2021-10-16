import * as Yup from 'yup'

let schema = Yup.object().shape({
    objetivo:Yup.string().min(2, 'Precisa ter mais do que 2 caracteres').required('Campo obrigatório'),

    alvo: Yup.number().min(1,'Deve ter ao menos 1 digito')
    .required('Campo obrigatório'),    
    
    dataAlvo: Yup.date().min(2021/10/1,'Não pode ser anterior a 1 de Outubro de 2021')
    .required('Campo obrigatório'),    

})

export default schema