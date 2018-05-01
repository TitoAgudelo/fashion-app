import React, { Component } from 'react';
import BrandList from './../BrandList/BrandList';
import { Link } from 'react-router-dom';
import './Brands.scss';

import {getBrandList} from './../../api';

class Brands extends Component {

    constructor() {
        super();
        this.state = {
            listBrandsData: null,
            error: ''
        };
    }

    componentWillMount() {
        getBrandList()
            .then((data) => {
                this.setState({ listBrandsData: data.results });
            }, (error) => {
                this.setState({ error: error.message });
            });
    }

    render() {
        const brandList = this.state.listBrandsData;
        const errorMessage = this.state.error;
        if(brandList) {
            return (
                <section className="brands">
                    <BrandList brandList={this.state.listBrandsData} />
                </section>
            )
        } else if(!brandList && errorMessage) {
            return (
                <section>
                    <h3>{errorMessage}</h3>
                    <p>please try again <Link className="btn btn-info" to="/">Reload</Link></p>
                </section>
            )
        }
        return (
            <section>
                <h3>Loading ...</h3>
                <div className="lds-css ng-scope"><div className="lds-eclipse"><div></div></div></div>
            </section>
        )
    }
}

export default Brands;