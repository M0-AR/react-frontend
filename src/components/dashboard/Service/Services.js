import React from 'react'
import ServiceForm from './ServiceForm'
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5)
    }
}))

export default function Services() {

    const classes = useStyles();

    return (
        <Paper className={classes.pageContent}>
            <ServiceForm />
        </Paper>
    )
}
