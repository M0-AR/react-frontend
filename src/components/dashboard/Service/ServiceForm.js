import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, makeStyles } from '@material-ui/core';
import Controls  from './controls/Controls';

// Style
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))


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
export default function ServiceForm() {

    const [values, setValues] = useState(initialValues);
    const classes = useStyles();

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, // Ignore rest
            [name]:value
        })
    }

    return (
        <form className={classes.root}>

            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Title"
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                        // error={errors.fullName}
                    />
                    <Controls.Input
                        label="Price"
                        name="price"
                        value={values.email}
                        onChange={handleInputChange}
                        // error={errors.email}
                    />
                    {/* <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        // error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    /> */}

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

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                           // onClick={resetForm} 
                            />
                    </div>
                </Grid>
            </Grid> 
        </form>
    )
}

