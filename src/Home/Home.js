import React from 'react'
import styled from 'styled-components'
import { CardProduto } from '../CardProduto/CardProduto'


const HomeBox = styled.main`
    box-sizing: border-box;
    border: 1px solid black;
    /* min-height: 90vh; */
    min-width: 300px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
    padding: 10px;
    
/* com o width deixei ele com o tamanho de 89% sombrando 11% para o filtro, coloquei o height porque ate o card do produto ia até o final da tela, usei para testes */
    /* width:89%; */
    /* height:100%; */
`


export class Home extends React.Component {
    state = {
        produtosHome: [],
        produtosCarrinho: [],
        prodID: 0,
    }

    componentDidMount() {
      //Caso ainda não tenhamos nenhum produto na página, 12 produtos ficticios serão adicionados
        if (this.state.produtosHome.length <= 0){
            for(let i = 1; i<13;i++){
                this.setState((state, props) => ({
                    produtosHome: [...state.produtosHome,{id: state.prodID + 1, name: 'Nome do Produto', imgUrl:'https://picsum.photos/200/150', price: 219.9}]
                        , prodID: state.prodID + 1})
                )
            }
        }
      //------------------


    }
  

    adicionarCarrinho = (id) => {
        alert(`Adicionar Carrinho (id: ${id})`)
    }


    render() {
        let produtosNova
        if(this.state.produtosHome.length > 0){
            produtosNova = this.state.produtosHome.map((produto)=>{
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
                {produtosNova}
            </HomeBox>
        )
    }
}
