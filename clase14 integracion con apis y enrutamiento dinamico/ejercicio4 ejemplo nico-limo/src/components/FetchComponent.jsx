import React, { Component } from 'react'

export default class AxiosComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loading: true,
            error: null
        }};
    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => console.log("Fetch Data:",data))
            .catch((error) => {
                this.setState({error:error})
            })
            .finally(() => this.setState({loading: false}))
    }
    render() {
        if(this.state.error) return "Error!";
        return this.state.loading ?  <p>Loading...</p> : <p>USANDO FETCH</p>
    }
}
