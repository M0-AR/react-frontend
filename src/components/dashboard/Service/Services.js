import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment} from '@material-ui/core';
import * as bookService from './services/bookService'
import useTable from './useTable';
import Controls from './controls/Controls';
import { EditOutlined, Search, Dashboard } from "@material-ui/icons"
import AddIcon from '@material-ui/icons/Add'
import ServiceForm from './ServiceForm';
import Popup from './Popup';
import CloseIcon from '@material-ui/icons/Close'
import ServiceHeader from './ServiceHeader';
import Notification from './Notification';
import ConfirmDialog from './ConfirmDialog'


const useStyles = makeStyles(theme => ({
    pageContent: {
        // margin: theme.spacing(5),
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
    {id: 'actions', label: 'Actions', disableSorting: true},
]

export default function Services() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(bookService.getAllServices())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; }});
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''})
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

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

    const addOrEdit = (service, resetForm) => {
        if (service.id === 0)
            bookService.insertService(service)
        else
            bookService.updateService(service)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(bookService.getAllServices)
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        bookService.deleteService(id);
        setRecords(bookService.getAllServices)
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }

    return (
        <>
            <ServiceHeader
                title="New Service"
                subTitle="Provide CRUD operations"
                icon={<Dashboard fontSize="large"/>}
            />
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
                    onClick={() => {setOpenPopup(true); 
                                    setRecordForEdit(null);}}
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
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick = {() => {openInPopup(item)}}
                                        >
                                            <EditOutlined fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick = {() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this record?',
                                                    subTitle: "You can't undo this operation ",
                                                    onConfirm: () => { onDelete(item.id) }
                                                })
                                            }}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
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
                <ServiceForm 
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog = {setConfirmDialog}
            />
        </>
    )
}
