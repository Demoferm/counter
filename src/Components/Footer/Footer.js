import React from 'react';
import FooterMenu from "./FooterMenu";
import Contacts from "./Contacts";

function Footer(props) {
    return (
        <div className='row'>
            <div className='col-6'>
        <FooterMenu MenuItems = {props.MenuItems}/>
            </div>
            <div className='col-6'>
        <Contacts/>
            </div>
        </div>
);
}

export default Footer;
