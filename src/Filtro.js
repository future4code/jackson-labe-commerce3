import React from 'react';
import styled from "styled-components";
const FiltroEntreLinhas = styled.div`
  margin: 10px 0;
`
const FiltroGeral = styled.div`
/* position: fixed; */

/* width: 10vw;  coloquei o codigo abaixo para renderizar o tamanho na tela para testar, */ 
width: 11%;

/* ajustei para pegar a tela até embaixo, mas não sei se continua funcionando quando adiciona varios cards na seção produtos */
height:97vh;
/* fim */
padding:10px;
text-align: left;
border:2px solid;
`

class Filtro extends React.Component{
    state ={
        Filtros:[
            {
            valorMinimo:"",
            valorMaximo:"",
            produto:""

            }

        ],
        inputMinimo:"",
        inputMaximo:"",
        inputProduto:""
    };
    
    adicionaValor = () =>{
        const novoValor = {
            valorMinimo:this.state.inputMinimo,
            valorMaximo:this.state.inputMaximo,
            produto:this.state.inputProduto
        };
        const novosFiltros = [...this.state.Filtros, novoValor];
        this.setState({filtros:novosFiltros});
    }
        

    render(){

        return(
            <FiltroGeral>
                <h1>Filtros</h1>
                <FiltroEntreLinhas>
                <label>Valor Mínimo</label>
                <input type="number" onChange={this.props.onChangeValorMin} value={this.props.valorMin} min={0}></input>
                </FiltroEntreLinhas>
                <FiltroEntreLinhas>
                <label>Valor Máximo</label>
                <input type="number" onChange={this.props.onChangeValorMax} value={this.props.valorMax}></input>
                </FiltroEntreLinhas>
                <FiltroEntreLinhas>
                <label>Buscar Produto</label>
                <input type="text" onChange={this.props.onChangeBuscarProduto} value={this.props.valorBusca}></input>
                </FiltroEntreLinhas>
            </FiltroGeral>
        )
    }

}
export default Filtro;





