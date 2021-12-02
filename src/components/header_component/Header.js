import React, { Component } from 'react'
import Logo from './logo.svg';

class Header extends Component {     
  render(){
    return( 
    <div style={{backgroundColor: '#064442', width:"auto", minWidth: '1400px'}}>
      <img src={Logo} style={{ height: '40px', paddingLeft: '8px' }}></img>
    </div>
    
    )
  }
}

export default Header