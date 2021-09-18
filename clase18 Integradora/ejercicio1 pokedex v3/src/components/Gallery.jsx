import React from 'react'

export default function Gallery(props) {
    const {name}= props.match.params
        return (<h2>{name}</h2>)
}
