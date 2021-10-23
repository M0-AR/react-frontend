import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, makeStyles } from '@material-ui/core';

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
    createdDate: new Date(),
    title: '',
    isAvailable: true,
    image: '',
    price: ''
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
                <Grid item x6={6}>
                    <TextField 
                    variant="outlined"
                    label="Title"
                    name="title"
                    value={values.title}
                    onChange={handleInputChange}
                    />
                    <TextField 
                    variant="outlined"
                    label="Price"
                    name="price"
                    value={values.price}
                    onChange={handleInputChange}
                    />
                </Grid>
            </Grid> 
        </form>
    )
}
