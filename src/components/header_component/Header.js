import React, { Component } from 'react'
import Logo from './logo.svg';

class Header extends Component {     
  render(){
    return( 
    <div style={{backgroundColor: '#064442'}}>
      <img src={Logo} style={{width: 'auto', height: '40px', paddingLeft: '8px'}}></img>
    </div>
    
    )
  }
}

export default Header