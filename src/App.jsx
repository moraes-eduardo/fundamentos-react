import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default props =>
    <div className='App'>
        <h1>Fundamentos React</h1>        
        <div className='Cards'>

            <Card titulo="#13 - Mega Sena" color="#787824">
                <Mega qtde={6}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#588C73">
                <Contador numeroInicial={0}></Contador>
            </Card>

            <Card titulo="#11 - Componente controlado (input)" color="#00C8F8">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta ou Troca de dados" color="#588C73">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta ou Troca de dados" color="#787824">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#E94C6F">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'fer@nando.com'}}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
                <UsuarioInfo></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Repetição - Produtos" color="#E8B71A">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            
            <Card titulo="#06 - Repetição - Alunos" color="#588C73">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Eduarda" />
                    <FamiliaMembro nome="Thiago" /> 
                    <FamiliaMembro nome="Meire" />
                </Familia> 
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>
            
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            
            <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno com parametro"
                    aluno="Pedro Silva"
                    nota={8.8} />
                <ComParametro
                    titulo="Situação do Aluno com parametro"
                    aluno="Maria Eduarda"
                    nota={5.8} />
            </Card>

            <Card titulo="#01 - Primeiro Componenete" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>

