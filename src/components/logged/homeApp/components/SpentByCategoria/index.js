import React, {useCallback, useEffect, useState} from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from 'recharts';
import { 
    CategoryContainer,
    TitleCategory
} from './styles'
import { api } from '../../../../../services/api';

const SpentByCategoria = () => {
    const [totalCategoria, setTotalCategoria] = useState([])
    const fkUsuarioId = localStorage.getItem("user_id")

    const byCategoria = useCallback( async () => {
        let response = await api.get(`categorias`)
        let todasCategorias = []
        response.data.forEach((e) => {
            let totalCategoria = {}
            let nomeCategoria = e.nomeCategoria
            let totalGasto = 0
            e.transacoes.forEach((t) => {
                if(t.fkUsuarioId == fkUsuarioId) {
                    totalGasto += parseFloat(t.valor) 
                }
            })
            totalCategoria = {categoria: nomeCategoria, gasto: totalGasto}
            todasCategorias.push(totalCategoria)
        })
        setTotalCategoria(todasCategorias)

    },[])

    useEffect(() => {
        byCategoria()
    },[])

    return (
        <CategoryContainer>
            <TitleCategory> Gasto por categoria </TitleCategory>
            <BarChart
                width={600}
                height={350}
                data={totalCategoria}
                margin={{
                    top: 20
                }}
            >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="categoria" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="gasto" fill="#5CBA9B" />
            </BarChart>
        </CategoryContainer>
    )
}

export default SpentByCategoria;
