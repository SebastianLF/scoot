import React, { useState } from 'react'
import styled from "styled-components"
import Select from 'react-select'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { languages, toolsAndframeworks, levels, UTCTimezones } from "../../utils/data"

import ButtonsSection from './ButtonsSection'
import Description from './Description'
import Label from './style/Label'
import Errors from './style/Errors'
import Languages from './LanguagesSelect';


function NewProjectForm(props) {

    return (
        <Container>
            <Formik
                initialValues={{ title: '', languages: [], tools: [], level: [], timezone: [] }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(15, 'Must be 15 characters or less.')
                        .required('Required'),
                    languages: Yup.array()
                        .min(1, 'Pick at least 1 language.')
                        .max(4, 'Pick 4 languages max.')
                        .required('Required.')
                        .of(
                            Yup.object().shape({
                                label: Yup.string().required(),
                                value: Yup.string().required()
                            })
                        ),
                    tools: Yup.array()
                        .min(1, 'Pick at least 1.')
                        .max(8, 'Pick 8 max.')
                        .required('Required.')
                        .of(
                            Yup.object().shape({
                                label: Yup.string().required(),
                                value: Yup.string().required()
                            })
                        ),
                    level: Yup.array()
                        .min(1, 'Choose the project level.')
                        .of(
                            Yup.object().shape({
                                label: Yup.string().required(),
                                value: Yup.string().required()
                            })
                        ),
                    timezone: Yup.array()
                        .min(1, 'Pick a timezone.')
                        .of(
                            Yup.object().shape({
                                label: Yup.string().required(),
                                value: Yup.string().required()
                            })
                        ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                    props.setShowModal(false)
                }}
            >
                {formik => {
                    console.log(formik)
                    return (
                        <Form >
                            <Label htmlFor='title'>Title</Label>
                            <Field name='title' type='text'></Field>
                            <ErrorMessage component={Errors} name="title" />

                            <Label htmlFor='languages'>Languages</Label>
                            <Select
                                name='languages'
                                options={languages}
                                onChange={(e) => formik.setFieldValue('languages', e || [])}
                                onBlur={(e) => formik.setFieldTouched('languages', true)}
                                value={formik.values.languages}
                                isMulti
                            />
                            <ErrorMessage component={Errors} name="languages" />

                            <Label htmlFor='tools'>Tools & Frameworks</Label>
                            <Select
                                name='tools'
                                options={toolsAndframeworks}
                                onChange={(e) => formik.setFieldValue('tools', e || [])}
                                onBlur={(e) => formik.setFieldTouched('tools', true)}
                                value={formik.values.tools}
                                isMulti
                            />
                            <ErrorMessage component={Errors} name="tools" />

                            <Label htmlFor='level'>Level</Label>
                            <Select name='level' options={levels} placeholder="Level..."></Select>
                            <ErrorMessage component={Errors} name="level" />

                            <Label htmlFor='timezone'>Timezone</Label>
                            <Select name='timezone' options={UTCTimezones} placeholder="Timezone..."></Select>
                            <ErrorMessage component={Errors} name="timezone" />

                            <ButtonsSection setShowModal={props.setShowModal} />
                        </Form>
                    )
                }}
            </Formik>

            {/* 
            <Label>Tools & Frameworks
                        <Select options={toolsAndframeworks} placeholder="Tools..." isMulti />
            </Label>
            <InlineFlex>
                <Label> Levels
                            <Select options={levels} placeholder="Level..."></Select>
                </Label>
                <Label> Timezone
                            <Select options={UTCTimezones} placeholder="Timezone..."></Select>
                </Label>
            </InlineFlex>
            <Description /> */}
        </Container >
    )
}

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
// const Input = styled.input`
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     padding: 0.6em 0.8em;
//     font-size: 0.95em;
//     display: block;
//     width: 100%;
// `
// const Title = styled(Input)``
// const Repo = styled(Input)``

const InlineFlex = styled.div`
    display: flex;
    justify-content: space-between;
`

export default NewProjectForm