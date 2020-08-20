import React from 'react';
import styled from 'styled-components'


const ProdBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    /* min-height: 100px; */
    padding: 4px;
    border: 1px solid rgb(240,240,240);
    box-shadow: 0 2px 3px rgb(160,160,160);
    background-color: rgb(250,250,250);
`

const ProdImg = styled.img`
    box-sizing: border-box;
    width: 100%;
`

const ProdNome = styled.p`
    box-sizing: border-box;
    align-self: flex-start;
    margin: 25px 0 0 0;
`

const ProdPreco = styled.p`
    box-sizing: border-box;
    align-self: flex-start;
    margin: 10px 0 20px 0 ;
`

const ProdBtn = styled.button`
    box-sizing: border-box;
    outline: none;
    border: 2px solid rgb(10,10,10);
    background-color: rgb(10,10,10);
    color: white;
    padding: 8px;
    width: 100%;
    font-size: 1rem;
    transition: 0.3s;
    cursor: pointer;

    :hover{
        background-color: rgb(250,250,250);
        color: rgb(10,10,10);
    }

`


export class CardProduto extends React.Component {
    render(){
        const prodPreco = `R$ ${Number(this.props.prodPreco)}`
        return(
            <ProdBox>
                <ProdImg
                    src={this.props.prodImg}
                ></ProdImg>
                <ProdNome>{this.props.prodNome}</ProdNome>
                <ProdPreco>{prodPreco}</ProdPreco>
                <ProdBtn
                    onClick={this.props.cartAdicionar}
                >
                    Adicionar ao Carrinho
                </ProdBtn>
            </ProdBox>
        )
    }
}


