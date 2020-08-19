import React from 'react'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'
import menu from './img/menu.png'
import close from './img/close.png'
import cart from './img/cart.png'


const Side = styled.div`
/* position: fixed;
right:-250px;
width:250px;
height:100%;
padding: 0px 10px;
background-color:red;
text-align: left; */
`


export default class Cart extends React.Component {
    // state = {
    //     sidebarOpen: true
    // }
    // onSetSidebarOpen = this.onSetSidebarOpen.bind(this)

    // onSetSidebarOpen(open) {
    //     this.setState({ sidebarOpen: open })
    // }
    render() {
        return (
            <Side>
                {/* <Sidebar
                    sidebar={<b>Sidebar content</b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: 'white' } }}
                >
                    <button onClick={() => this.onSetSidebarOpen(true)}>Open Sidebar</button>
                </Sidebar> */}

                <div>
                <input type="checkbox" id="check" />
                        <label id="icone" for="check">

                            <img src={cart} id="cart" />
                        </label>
                    <div className="side">
                        <header></header>
                        <h2>Carrinho:</h2>
                        <p>Total: R$ 0.00</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </Side>
        )
    }

}
