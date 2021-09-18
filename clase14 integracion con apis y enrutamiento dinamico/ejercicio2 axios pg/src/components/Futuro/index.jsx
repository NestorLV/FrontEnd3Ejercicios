import React from 'react';
import axios from 'axios';
import APIFUTURISTA from './api.js';
export default class Futuro extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        APIFUTURISTA.get('voladores')
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
}