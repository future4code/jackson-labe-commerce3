import React, { useRef } from 'react'
import styled from 'styled-components'

const Side = styled.div`
background-color: whitesmoke;
/* width:250px; */
height:100vh;
padding: 0px 10px;
text-align: left;
border-left: 2px black solid;
`
const Total = styled.p`
font-weight: 200;
`

export default class Cart extends React.Component {
    state = {
        valorItems: '' //nao sei o nome da props do Rafael
    }

    render() {
        return (
            <Side >
                <h2>Carrinho:</h2>
                {this.props.adicionarCarrinho ? <function>{}</function> : null}
                <Total> Total: R$: {}</Total>
            </Side>
        )
    }

}
