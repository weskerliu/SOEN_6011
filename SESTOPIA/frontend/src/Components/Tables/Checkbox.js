
import React from 'react'

export const CheckBox = (props) => {
    return (
      <li>
       <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.id} /> {props.name}
      </li>
    )
}

export default CheckBox