import React from 'react';

function FooterMenuItem(props) {
    return (
        /*<p align='left'>*/
        /*    {props.MenuItems.map((el,i) => <a href="#"><li key={i}>{el}</li></a>)}*/
        /*</p>*/
        <span>
            <a className="menu" href={props.item.url}>{props.item.name}</a>
        &nbsp;
        </span>
    )
}

export default FooterMenuItem;
