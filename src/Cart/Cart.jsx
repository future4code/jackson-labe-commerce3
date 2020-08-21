import React, { useRef } from 'react'
import styled from 'styled-components'
import CartI from '../Cart/CartI'
import Home from '../Home/Home'

const Side = styled.div`
background-color: whitesmoke;
width:250px;
height:100vh;
padding: 0px 10px;
text-align: left;
border-left: 2px black solid;
`
const Total = styled.p`
font-weight: 200;
`

const ButtonX = styled.button`
font-weight: 200;
margin-left: 7px;
cursor:pointer;
`

export default class Cart extends React.Component {
    state = {
        valorItems: '' //nao sei o nome da props do Rafael
    }
    pegarProduto() {
        const produtoPego = this.props.cartSx.map((element) => {
            const produtoD = `${element.quantidade}x ${element.name}`

            return (
                <div>
                    {produtoD}
                    <ButtonX onClick={this.props.cartExcluir}> X</ButtonX>
                </div>
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
        const somas = this.soma()
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
