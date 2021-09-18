import './styles.css';
import React from 'react';


function User(props) {
  const {user} = props;
  return (
    <div className="container">
      <p>
        <b>ID: </b> {user.id}
      </p>
      <p>
        <b>Username: </b>{user.name}
      </p>
    </div>
  )
}
export default class App extends React.Component{
  usuarios=[
    {name:"Juan", id:"111", status:"conected"},
    {name:"Filomeno", id:"111", status:"disconected"},
    {name:"Josefa", id:"111", status:"conected"},
  ]

  render(){
    return(
      <div className="App">
        {this.usuarios.map((element)=>(
          // <User user={element} key={element.id}/>
          <div key={element.id} className="card">
            <h2>User Game</h2>
            <User user={element}/>
          </div>
        ))}

      </div>
    )}

  return 
};
