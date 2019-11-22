import React from 'react'
import styled from "styled-components"
import { Editor as Wysiwyg } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Label = styled.label`
    margin: 1em 0 0 0;
`
// const Description = styled.textarea`
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     padding: 0.6em 0.8em;
//     display:block;
//     width: 100%;
// `

export default function Description() {
    return (
        <Label>
            Description
            <Wysiwyg></Wysiwyg>
        </Label>
    )
}
