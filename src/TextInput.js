import React from 'react'

export default function TextInput(props) {
    return (
    <div className="mb-2">
        <label className="form-label text-muted"> {props.fieldObj.name} </label>
        <input type="text" className="form-control" />
    </div>
    )
}
