import React from 'react';

let LinkToResource = (props) => {
    Object.entries(props.link).map(([key,value])=>{
      return (
        <li  key={key}>
          <a href={key}> {value.toString()}</a>
        </li>
      )
    })
}
export default LinkToResource;