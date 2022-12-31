import React from 'react'

export default function ComParametro(props){ //propriedades são somente leitura
    const status = props.nota >= 7 ? 'Aprovado' : 'em Recuperação' //condição
    const notaInt = Math.ceil(props.nota) // arredondando a nota para cima
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota 
                <strong> { notaInt } </strong>
                e está 
                <strong> { status }</strong>
                </p>
        </div>
    )
}