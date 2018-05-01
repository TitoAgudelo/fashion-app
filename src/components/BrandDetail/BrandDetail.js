import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BrandDetail.scss';

import {getBrandById} from './../../api';

class BrandDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: null,
            error: ''
        };
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        if(id) {
            getBrandById(id)
                .then((data) => {
                    this.setState({ brand: data });
                }, (error) => {
                    this.setState({ error: error.message });
                });
        }
    }

    render() {
        const brand = this.state.brand;
        const errorMessage = this.state.error;
        if(brand) {
            return (
                <section className="brand-detail">
                    <h3>Brand Detail</h3>
                    <div className="brand-wrapper">
                        <div className="brand-content">
                            <img src={brand.logo} alt={brand.name}/>
                            <p>Brand Name: {brand.name}</p>
                            <p>Brand description: {brand.description}</p>
                        </div>
                        <div><Link className="btn btn-info" to="/">Go Back</Link></div>
                    </div>
                </section>
            )
        } else if (!brand && errorMessage) {
            return (
                <section>

                    <h3>{errorMessage}</h3>
                    <p>please try again <Link className="btn btn-info" to={"/brand/" + this.props.match.params.id}>Reload</Link> or</p>
                    <div><Link className="btn btn-info" to="/">Go Back</Link></div>
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

export default BrandDetail;