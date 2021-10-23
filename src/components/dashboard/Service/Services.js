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

const headCell = [
    {id: 'title', label: 'Title'},
    {id: 'price', label: 'Price'},
    {id: 'isAvailable', label: 'Available Service'},
    {id: 'serviceStartDate', label: 'Service Start Date'},
]

export default function Services() {

    const classes = useStyles();
    const [records, setRecords] = useState(bookService.getAllServices())
    const {TblContainer, TblHead} = useTable(records, headCell)

    return (
        <Paper className={classes.pageContent}>
            {/* <ServiceForm /> */}
            <TblContainer>
                <TblHead />
                <TableBody>
                    {
                        records.map(item => (
                            <TableRow key={item.id}> 
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.isAvailable}</TableCell> {/* Boolean is not being displayed */}
                                <TableCell>{item.serviceStartDate}</TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
            </TblContainer>
        </Paper>
    )
}
