import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = { 
        isFalse: false,
        hide: false,
        display:false
    }

    handleSide = () => {
        this.setState({isFalse:!this.state.isFalse})
    }

    handleHide = () => {
        this.setState({hide:!this.state.hide})
    }

    handleDisplay = () => {
        this.setState(prevState => ({ display: !prevState.display }))
    }
    render() { 
        return ( 
            <ProductContext.Provider  value={{
                isFalse:this.state.isFalse,
                side:this.handleSide,
                hidden : this.state.hide,
                hide:this.handleHide,
                display:this.state.display,
                dis:this.handleDisplay
            }}>
                {this.props.children}
            </ProductContext.Provider>
         );
    }
}

 
const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };

export default ProductProvider;