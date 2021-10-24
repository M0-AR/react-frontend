import React from 'react'
import Grid from '@material-ui/core/Grid';
import Controls  from './controls/Controls';
import { useForm, Form } from './useForm'
import * as bookService from './services/bookService'

// Serivce Object
const initialValues = {
    id: 0,
    title: '',
    image: '',
    price: '',
    isAvailable: true,
    serviceStartDate: new Date()
}

// Component
export default function ServiceForm(props) {

    const { addOrEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."
        if ('price' in fieldValues) 
            temp.price = fieldValues.price.length > 0 ? "" : "Minimum 1 number required."        
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors, 
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            addOrEdit(values, resetForm);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Title"
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                        error={errors.title}
                    />
                    <Controls.Input
                        label="Price"
                        name="price"
                        value={values.price}
                        onChange={handleInputChange}
                        error={errors.price}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.DatePicker
                        name="serviceStartDate"
                        label="Service Start Date"
                        value={values.serviceStartDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isAvailable"
                        label="Available Service"
                        value={values.isAvailable}
                        onChange={handleInputChange}
                    />

                    <div className='p-2'>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                    </div>
                </Grid>
            </Grid> 
        </Form>
    )
}

