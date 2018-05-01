import React, { Component } from 'react';
import './BrandList.scss';

class BrandList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: props.brandList
        };
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.brands.map( (brand, key) => {
                    return (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{brand.name}</td>
                            <td><a href={"/brand/" + brand.id} className="btn btn-info">View Detail</a></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

export default BrandList;