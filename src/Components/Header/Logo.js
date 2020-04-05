import React from 'react';
import LogoImg from './../../images/logo_react.png';
function Logo() {
    return (
        /*<img src='logo_react.png' alt='' align='left' height='60'/>*/
        /*<img src='../../images/logo_react.png' alt='' align='left' height='60'/>*/
       // <img alt='' src='./../../images/logo_react.png' align='left' height='60'/>
       <img className='logo' alt='Logo' src={LogoImg} align='left'/>
)
}

export default Logo;
