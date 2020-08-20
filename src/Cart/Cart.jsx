import React from 'react'
import styled from 'styled-components'

const Side = styled.div`
/* position: fixed; */
/* right:-250px; */
width:250px;
height:100vh;
padding: 0px 10px;
background-color:whitesmoke;
text-align: left;
border-left: 2px black solid;
`
const Total = styled.p`
font-weight: 200;
`

export default class Cart extends React.Component {
    state = {
        sidebarOpen: false,
        valorItems: '' //nao sei o nome da props do Rafael
    }

    onSidebarOpen = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }
    render() {
        return (
            <Side sideOnOpen={this.state.onSidebarOpen}>
                <h2>Carrinho:</h2>
                <Total> Total: R$: 0.00</Total>
            </Side>
        )
    }

}
