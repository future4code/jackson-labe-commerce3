import React, { useRef } from 'react'
import styled from 'styled-components'

const CartIt = styled.div`
background-color: whitesmoke;
text-align: left;
`
const ButtonX = styled.button`
font-weight: 200;
margin-left: 7px;
cursor:pointer;
`

export default class CartI extends React.Component {



    render() {

        return (
            <CartIt>
                {this.props.produtoD}
                <ButtonX onclick={this.props.Del}> X</ButtonX>
            </CartIt>
        )
    }

}