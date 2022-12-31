import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Thiago" idade={20} nerd={true}/>
            <DiretaFilho nome="Duda" idade={17} nerd={false}/>
        </div>
    )
}