import React from 'react'

export default props => (
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        type={props.type} />
)