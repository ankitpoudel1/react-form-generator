import React from 'react'

export default function TextAreaInput(props) {
    return (
        <div className="w-100 mb-2">
                <label className="form-label text-muted"> {props.fieldObj.name} </label>
                <textarea className="form-control" />
        </div>
    )
}
