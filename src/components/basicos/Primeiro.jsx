import React from 'react'

export default function Primeiro(){
    const msg = 'Seja bem vindo(a)!'
    return (
    <div>
        <h2>Primeiro componente sem parametro</h2>
        <p>{ msg } ; O produto de 2 x 2 é igual a { 2*2 }</p>
    </div>
    )
}

