import React, { Component } from 'react'

export default class NoteAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            noteTitle: '',
            noteContent: '',

        }
    }

    //hàm lấy dữ liệu
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({ [name]: value })
    }
    //hàm gửi dữ liệu đi
    addData = (noteTitle, noteContent) => {
        var item = {};
        item.noteTitle = noteTitle;
        item.noteContent = noteContent;
        // console.log(item);
        this.props.getData(item);

    }

   

    render() {
        return (

            <div className="col-sm-3 mt-3">
                <form>
                    <h3>Quản lý Note</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input onChange={(e) => this.isChange(e)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tiêu đề Note" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea onChange={(e) => this.isChange(e)} className="form-control" name="noteContent" id="noteContent" rows={3} defaultValue={""} />
                    </div>
                    <button onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Lưu</button>

                </form>
            </div>

        )
    }
}
