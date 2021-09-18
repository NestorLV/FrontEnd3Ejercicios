import React from 'react';
import axios from 'axios';

export default class Beauties extends React.Component {
    state = { ornitorrincos: [] }
    componentDidMount() {
        axios.get(`https://get.loveliesornitorrincos.forReal`)
            .then(res => {
                const ornitorrincos = res.data;
                this.setState({ ornitorrincos });
            })
    }

    /* axios.post('/proceres', {
        firstName: 'José',
        lastName: 'de San Martín'
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        }); */

    render() {
        return (
            <ul>
                {this.state.ornitorrincos.map(
                    ornitorrinco => <li>{ornitorrinco.speakVeryWell}</li>)
                }
            </ul>
        )
    }
}