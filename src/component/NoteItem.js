import React, { Component } from 'react';


export default class NoteItem extends Component {

    editNote = () => {
        this.props.statusFormEdit()
        this.props.editFunClick()
    }
    deleteNote = (id) => {
        this.props.deleteClick(id)
    }
    render() {
        return (
            <div className="card">

                <div className="card-header" role="tab" id="note1">
                    <div className='row'>
                        <div className='col-sm-10'>
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#accordianId" href={"#abc" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                                    {this.props.noteTitle}
                                </a>
                            </h5>
                        </div>
                        <div className='col-sm-2'>
                            <div onClick={() => { this.editNote() }} className='btn btn-info'>Sửa</div>
                            <div onClick={() => { this.deleteNote() }} className='btn btn-danger'>Xóa</div>
                        </div>
                        <div id={"abc" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                {this.props.noteContent}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
