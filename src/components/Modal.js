import React from 'react'

const Title = styled.input``
const Languages = styled.select``
const Tools = styled.select``
const Level = styled.select``
const Timezone = styled.select``

export default function Modal() {
    return (
        <div>
            <Form>
                <Title></Title>
                <Languages></Languages>
                <Tools></Tools>
                <Level></Level>
                <Timezone></Timezone>
            </Form>
        </div>
    )
}
