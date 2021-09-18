import React, { Component } from 'react'
import axios from 'axios';

export default class AxiosComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loading: true,
            error: null
        }};
    componentDidMount() {this.getData()}

    getData = async () => {
        await axios('https://randomuser.me/api/')
        .then((response) => console.log("Async Await Data:", response.data))
        .catch((error) => this.setState({error:error}))
        .finally(() => this.setState({loading: false}))
    };
    
    render() {
        if(this.state.error) return "Error!";
        return this.state.loading ?  <p>Loading...</p> : <p>USANDO ASYNC AWAIT</p>
    }
}
