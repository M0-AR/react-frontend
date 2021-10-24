import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment} from '@material-ui/core';
import * as bookService from './services/bookService'
import useTable from './useTable';
import Controls from './controls/Controls';
import { Search } from "@material-ui/icons"
import AddIcon from '@material-ui/icons/Add'
import ServiceForm from './ServiceForm';
import Popup from './Popup';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    addButton : {
        position: 'absolute',
        right: '10px',
        bottom: '10px'
    }
}))

const headCell = [
    {id: 'title', label: 'Title'},
    {id: 'price', label: 'Price'},
    // {id: 'isAvailable', label: 'Available Service'},
    {id: 'serviceStartDate', label: 'Service Start Date'},
]

export default function Services() {

    const classes = useStyles();
    const [records, setRecords] = useState(bookService.getAllServices())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; }});
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead, 
        TblPagination, 
        recordsAfterPagingAndSorting
    } = useTable(records, headCell, filterFn)

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items
                else 
                    return items.filter(x => x.title.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input 
                        label = "Search Service"
                        className = {classes.searchInput}
                        InputProps = {{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            )
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button 
                    text = "Add New"
                    startIcon = {<AddIcon />}
                    className = {classes.addButton}
                    onClick={() => setOpenPopup(true)}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}> 
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    {/* <TableCell>{item.isAvailable}</TableCell> Boolean is not being displayed */}
                                    <TableCell>{item.serviceStartDate}</TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title={"Add New Serivce"}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ServiceForm />
            </Popup>
        </>
    )
}
