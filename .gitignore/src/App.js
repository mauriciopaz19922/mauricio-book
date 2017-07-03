import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state =
    {
      searchText:'Busqueda',
    };
      }

  handleSearchTextChange = (event) =>
  {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header title="Directorio"/>
        <div className="container">
         <div className="row">
          <div className="col-sm-6">
          <SearchBox 
          value={this.state.searchText}
          onChange={this.handleSearchTextChange}
          /> 
         </div> 
      <h1>Nuevo Contacto </h1>
<ContactForm
firstName=""
lastName=""
phone=""
handleFirstNameChange={()=>()}
handleLastNameChange={()=>()}
handlePhoneChange={()=>()}


/>

      </div>
      </div>  
      <Footer copyright= "Realizado por Juan Carlos Garcia"/>
      </div>
    );
  }
}

export default App;