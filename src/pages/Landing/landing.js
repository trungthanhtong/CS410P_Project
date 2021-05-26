import './App.css';
import React from 'react';

function Search() {


  return (
    <div>
      <h1>Search character</h1>
        <form action="result">
            <label>Insert Character Name <input type="text" name="name" /></label>
            <input type="submit" value="Submit" />
        </form> 
        <div id='jo'>
        </div>
    </div>
  );
}

export default Search;
