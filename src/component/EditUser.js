import { ref, set,getDatabase } from 'firebase/database';
import React, { Component } from 'react'


export default class EditUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:this.props.noteEditObject.id,
            noteTitle:this.props.noteEditObject.noteTitle,
            noteContent:this.props.noteEditObject.noteContent,
        }
    }
    

    removeForm = ()=>{
        this.props.statusFormAdd()
    }
    //hàm lấy thông tin từ input đã sửa
    isChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value});
    }
    //hàm update dữ liệu vào database
    saveButtom = ()=>{
        const db=getDatabase()
        var info = {};
        info.id=this.state.id;
        info.noteTitle=this.state.noteTitle;
        info.noteContent=this.state.noteContent;
        set(ref(db,'note/'+info.id),{
            noteTitle:  info.noteTitle,
            noteContent: info.noteContent,
        })
        this.props.statusFormAdd()
    }
    render() {
        // console.log('check state: ',this.props.noteEditObject);
        return (
            <div className="col-sm-3 mt-3">
                <form>
                    <h3>Sửa thông tin</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input onChange={(e)=>this.isChange(e)} defaultValue={this.props.noteEditObject.noteTitle} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tiêu đề Note" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea onChange={(e)=>this.isChange(e)} defaultValue={this.props.noteEditObject.noteContent} className="form-control" name="noteContent" id="noteContent" rows={3} />
                    </div>
                    <div className='text-center'>
                        <button onClick={()=>this.saveButtom()} type="reset" className="btn btn-secondary">Add</button>
                        <button onClick={()=>this.removeForm()} type="reset" className="btn btn-secondary">Hủy</button>
                    </div>

                </form>
            </div>
        )
    }
}
