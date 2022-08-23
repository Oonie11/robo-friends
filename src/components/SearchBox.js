import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input
                className="tc pa3 ba br3 b--green bg-lightest-blue"
                name="searchBox"
                type="search"
                placeholder="enter name" onChange={searchChange}/>
                
            <br />
        </div >
    )
};

export default SearchBox;