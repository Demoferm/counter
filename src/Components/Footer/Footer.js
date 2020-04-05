import React from 'react';
import FooterMenu from "./FooterMenu";
import Contacts from "./Contacts";

function Footer(props) {
    return (
        <div className='row'>
            <div className='col-4'>
        <FooterMenu MenuItems = {props.MenuItems}/>
            </div>
            <div className='col-8'>
        <Contacts/>
            </div>
        </div>
);
}

export default Footer;
