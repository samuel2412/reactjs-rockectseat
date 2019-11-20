import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import './styles.css';

export default class main extends Component {
    state = {
        products: [],
        productsInfo: {},
        page: 1
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page =1) => {
        const response = await api.get(`/products?page=${page}`);

        const  {docs, ...productsInfo} = response.data;

        this.setState({ products: docs, productsInfo,page});

        
        //console.log(response);
    };

    nextPage = () => {
        const { page, productsInfo} = this.state;

        if(page === productsInfo.pages) return;

        this.loadProducts(page+1);
    }

    prevPage = () => {
        const { page, productsInfo} = this.state;

        if(page === 1) return;

        this.loadProducts(page-1);
    }


    render() {
        const { products,page,productsInfo } = this.state;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                       <strong>{product.title}</strong> 
                       <p>{product.description}</p>
                       <Link to={`/products/${product._id}`}> Acessar </Link>

                       

                    </article>

                ))}
                <div className="actions">
                <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page===productsInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>

        );
    }
};