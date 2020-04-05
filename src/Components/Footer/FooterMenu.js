import React from 'react';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu(props) {
    return (
    // <FooterMenuItem MenuItems = {props.MenuItems}/>
        <p align='left'>
            {props.MenuItems.map((el)=><FooterMenuItem key={el} item={el}/>)}
        </p>
    )
}

export default FooterMenu;
