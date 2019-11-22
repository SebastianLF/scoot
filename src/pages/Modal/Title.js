import React from 'react'
import styled from "styled-components"

export default function Title() {
    return (
        <Label>Title:
                        <Title
                value={title}
                placeholder='Title...'
                onChange={(e) => setTitle(e.target.value)}
            />
        </Label>
    )
}
