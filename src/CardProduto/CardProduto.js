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
    border: 2px dotted coral;
    background-color: rgb(252,252,252);
    margin: 20px auto;
    flex-grow:1;
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
    border: none;
    outline: none;
    background-color: rgb(10,10,10);
    color: white;
    padding: 10px;
    width: 100%;
    font-size: 1rem;
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
                    onClick={this.props.adicionarCarrinho}
                >
                    Adicionar ao Carrinho
                </ProdBtn>
            </ProdBox>
        )
    }
}


