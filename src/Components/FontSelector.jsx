import React from 'react'

function FontSelector(props) {
  return <option value={props.value}>{props.name}</option>
}

export default FontSelector;