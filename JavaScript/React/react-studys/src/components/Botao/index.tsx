import React from 'react';
import style from './Botao.module.scss';
                                      // aqui define a prop com nome e valor
class Button extends React.Component <{texto:string}> {
    render(){
        return (
            // indica aonde vai a props = {this.props.NomeDaProps}
            <button className={style.botao}>
                {this.props.texto}
            </button>

        )
    }
}

export default Button; // Case sensitive