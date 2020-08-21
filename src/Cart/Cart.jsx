import React, { useRef } from 'react'
import styled from 'styled-components'

import close from '../Cart/img/close.png'

const Side = styled.div`
    background-color: whitesmoke;
    width:20%;
    font-family: 'Roboto', sans-serif;
    font-size:17px;
    text-align: left;
    border-left: 2px black solid;
    padding: 0px 10px;
    /* min-height: 100vh; */
`
const Total = styled.p`
    font-weight: 200;
`
const Div1 = styled.div`
display:flex;
height:30px;
align-items:center;
`
const ButtonX = styled.img`
    position:relative;
    width:25px;
    margin-left: 7px;
    
:hover {
    cursor:pointer;
    transition: transform .8s ease-in;
    transform: rotate(360deg);
}
`
export default class Cart extends React.Component {
    state = {
        valorItems: '' //nao sei o nome da props do Rafael
    }
    pegarProduto() {
        const produtoPego = this.props.cartSx.map((element) => {
            const produtoD = `${element.quantidade}x ${element.name}`

            return (
                <Div1>
                    {produtoD}
                    <ButtonX src={close} alt="" onClick={this.props.cartExcluir} />
                </Div1>
            )
        })
        return produtoPego
    }

    valT() {
        return this.props.cartSx.reduce((val1, val2) => {
            return val1 + val2.price * val2.quantidade
        }, 0)
    }

    render() {
        const produtoPego = this.pegarProduto()
        const valT = this.valT()
        console.log(valT)

        return (
            <Side sidebarOpen={this.props.sidebarOpen}>
                <h2>Carrinho:</h2>
                <div>{produtoPego}</div>
                <Total>Total: <b>R$: {valT.toFixed(2)}</b></Total>
            </Side>
        )
    }

}
