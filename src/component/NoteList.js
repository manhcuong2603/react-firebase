import React, { Component } from 'react'
import NoteItem from './NoteItem'
import { dataNote } from './connect';
import { onValue } from 'firebase/database';
import { doc, deleteDoc } from "firebase/firestore";


export default class NoteList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { dataFirebase: [] }
    }


    componentWillMount() {
        onValue(dataNote, (snapshot) => {
            // const notes = snapshot.val();
            var arrayData = []
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var noteTitle = childSnapshot.val().noteTitle;
                var noteContent = childSnapshot.val().noteContent;
                // console.log(noteTitle);
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })

            })
            this.setState({
                dataFirebase: arrayData
            })
        })
    }


    //hàm lấy dữ liệu từ database
    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                // console.log(value);
                // console.log(key);
                return (
                    <NoteItem
                        key={key}
                        i={key}
                        noteTitle={value.noteTitle}
                        noteContent={value.noteContent}
                        statusFormEdit={()=>this.props.statusFormEdit()}
                        editFunClick = {(info)=>this.props.edit(value)}
                        deleteClick = {(id)=>this.props.delete(value.id)}
                    />
                )
            })
        }
    }
    // deleteClickUser = async (id)=>{
    //     this.props.deleteDb(id)
    // }


    render() {
        return (
            <div className="col-sm-9 ">
                <div id="accordianId" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>

        )
    }
}
