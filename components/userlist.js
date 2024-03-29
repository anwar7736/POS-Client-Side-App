import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";

class UserList extends React.Component{
 constructor() {
        super();
        this.state={
            show:false,
            showEdit:false,
            deleteID:"",
            editID:""
        }
    }
    handleClose=()=>{
        this.setState({ show:false})
    }

    handleOpen=()=>{
        this.setState({ show:true})
    }

    handleCloseEdit=()=>{
        this.setState({ showEdit:false})
    }

    handleOpenEdit=()=>{
        this.setState({ showEdit:true})
    }

    deleteIconOnClick=(id)=>{
            alert(id)
    }

    editIconOnClick=(id)=>{
       this.handleOpenEdit();
       this.setState({editID:id})

    }
 render(){
 	const columns = [
            {
                name: 'Full Name',
                selector: 'fullname',
                sortable: true,

            },
            {
                name: 'User Name',
                selector: 'username',
                sortable: true,
            },
            {
                name: 'Roll',
                selector: 'roll',
                sortable: true,
            },
            {
                name: 'Last Activity',
                selector: 'lastactivity',
                sortable: true,
            },
            {
                name: 'Delete',
                selector: 'id',
                sortable: false,
                cell: row => <button onClick={this.deleteIconOnClick.bind(this,row.id)}  className="btn btn-sm text-danger"><i className="fa fa-trash-alt"/></button>
            },
            {
                name: 'Edit',
                selector: 'id',
                sortable: false,
                cell: row => <button onClick={this.editIconOnClick.bind(this,row.id)}  className="btn btn-sm text-success"><i className="fa fa-edit"/></button>
            },
        ];
 	return(
 		<Fragment>
 			 <Container className="animated zoomIn">
                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col><h4 className="table-title">User List</h4></Col>
                                            <Col><button onClick={this.handleOpen} className="float-right circular-btn"><i className="fa fa-plus"/></button></Col>
                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary"/>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} xs={12} md={12} lg={12}>
                                                <DataTable
                                                    noHeader={true}
                                                    paginationPerPage={5}
                                                    pagination={true}
                                                    columns={columns}
                                                    data={this.props.dataTable}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                 <Modal animation={false} className="animated zoomIn" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <h6>Add New User</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="form-label">Full Name</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">User Name</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">Password</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">User Roll</label>
                        <select  className="form-control form-control-sm form-select">
                            <option>Admin</option>
                            <option>Worker</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-sm btn-danger" variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <button className="btn btn-sm btn-success">
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal animation={false} className="animated zoomIn" show={this.state.showEdit} onHide={this.handleCloseEdit}>
                    <Modal.Header>
                        <h6>Edit User</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="form-label">Full Name</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label ">User Name</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">Password</label>
                        <input className="form-control form-control-sm" type="text"/>
                        <label className="form-label">User Roll</label>
                        <select  className="form-control form-control-sm form-select">
                            <option>Admin</option>
                            <option>Worker</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-sm btn-danger" variant="secondary" onClick={this.handleCloseEdit}>
                            Close
                        </Button>
                        <button  className="btn btn-sm btn-info"  onClick={this.handleCloseEdit}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
 		</Fragment>
 		)
 }
}
export default UserList;