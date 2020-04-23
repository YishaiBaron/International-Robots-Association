import React from 'react';
import './search-box-styles.css';


export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search' 
    placeholder={placeholder} 
    onChange={handleChange}
    />
   // onChange={e => {this.setState({searchField: e.target.value}, () => 
 
  );
    
   

