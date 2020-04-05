import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <div className='row'>
            <div className='col-4'>
                <p className='header-title'>Course: <strong>{props.titile}</strong> | <em>version: {props.version} </em>
                </p>
            </div>
            <div className='col-8'>
                <HeaderMenu MenuItems={props.MenuItems}/>
            </div>
            {/*<Logo/>*/}
        </div>
    )
}

export default Header;
