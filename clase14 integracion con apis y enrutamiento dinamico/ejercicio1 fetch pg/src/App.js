import "./App.css";
import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  return <CallingApi />;
}

export default App;

class CallingApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: "",
      click: false,
    };
  }

  async request() {
    await fetch("//source.unsplash.com/collection/3678981/800x600").then(
      (result) => {
        if (this.mounted) {
          this.setState({
            isLoaded: true,
            item: result.url,
          });
        }
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  componentDidMount(){
    this.mounted= true;
    this.request();
  }

  componentDidUpdate(prevState){
    if(prevState.click=== this.state.click) this.request();
  }

  componentWillUnmount(){
    this.mounted=false;
  }

  render(){
      const {error,isLoaded,item}=this.state;
      console.log(PacmanLoader)
      if (error){return <main>Error:{error.message}</main>}
      else if (!isLoaded){return(<main><PacmanLoader size={"60"} color="grey"/></main>)}
      else{return(
        <main>
          <img src={item} alt="home"/>
          <button onClick={()=>this.setState((prevState)=>{return {...prevState, click: !prevState.click}})}></button>
        </main>
      )}


   
  }
}

