import React from 'react'
import styled from 'styled-components'
import { CardProduto } from '../CardProduto/CardProduto'


const HomeBox = styled.main`
    box-sizing: border-box;
    width: 80%;
    display: grid;
    grid-template-rows: auto auto;
    gap: 15px;
    padding: 0 0 0 20px;
`

const HomeHeader = styled.div`
    box-sizing: border-box;
    /* display:grid;
    grid-template: 1fr/1fr 1fr;
    justify-items: start;
    align-items: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const HomeSelect = styled.select`
    margin: 0;
    padding: 0;
    outline-style:none;
    outline: none;
`

const HomeQtd = styled.p`
    margin: 0;
    padding: 0;
`

const ProdBox = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template: 1fr/repeat(4,1fr);
    gap: 15px;
    padding: 0 10px 10px 10px;
`




export class Home extends React.Component {
    state = {
        produtosHome: [],
        produtosCarrinho: [],
        prodID: 0,
    }


    adicionarCarrinho = (id) => {
        alert(`Adicionar Carrinho (id: ${id})`)
    }

    render() {
        let produtosNova
        if(this.props.produtosHome.length > 0){
            produtosNova = this.props.produtosHome.map((produto)=>{
                return(
                    <CardProduto
                        key={produto.id}
                        prodId={produto.id}
                        prodImg={produto.imgUrl}
                        prodNome={produto.name}
                        prodPreco={produto.price}
                        cartAdicionar={()=>this.props.cartAdicionar(produto.id)}
                    ></CardProduto>
                )
            })
        }

        return(
            <HomeBox>
                <HomeHeader>
                    <HomeQtd>Quantidade de Produtos {this.props.produtosHome.length}</HomeQtd>
                    <HomeSelect onChange={this.props.ordenarProdutos} name={'ordenarProdutos'}>
                        <option value={'cresc'}>Preço: Crescente</option>
                        <option value={'decresc'}>Preço: Decrescente</option>
                    </HomeSelect>
                </HomeHeader>
                <ProdBox>
                    {produtosNova}
                </ProdBox>
            </HomeBox>
        )
    }
}

export default Home