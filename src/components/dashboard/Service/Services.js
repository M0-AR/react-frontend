import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell} from '@material-ui/core';
import * as bookService from './services/bookService'
import useTable from './useTable';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Services() {

    const classes = useStyles();
    const [records, setRecords] = useState(bookService.getAllServices())
    const {TblContainer} = useTable()

    return (
        <Paper className={classes.pageContent}>
            {/* <ServiceForm /> */}
            <TblContainer>
                <TableBody>
                    {
                        records.map(item => (
                            <TableRow key={item.id}> 
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.isAvailable}</TableCell>
                                <TableCell>{item.serviceStartDate}</TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
            </TblContainer>
        </Paper>
    )
}
