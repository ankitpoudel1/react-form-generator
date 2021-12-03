import React from 'react'

export default function NumberInput(props) {
    return (
        <div className="mb-2">
            <label className="form-label text-muted"> {props.fieldObj.name} </label>
            <input type="number" className="form-control" />
        </div>
    )
}
