import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {

    return (
        <input
        className='search'
        type='search'
        placeholder={props.PLACEHOLDER}
        onChange={props.HANDLECHANGE}
      />
    )

}