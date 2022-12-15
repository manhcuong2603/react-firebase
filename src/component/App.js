
import '../App.css';
import Menu from './Menu';
import NoteList from './NoteList';
import NoteAdd from './NoteAdd';
import { child, push, remove } from 'firebase/database';
import { dataNote } from './connect';
import { useState } from 'react';
// import { connect } from './connect';
import { ref, set,getDatabase } from 'firebase/database';
import EditUser from './EditUser';

const addData = (item) => {
  // console.log('check item',item);
  push(dataNote, item);  //hàm đẩy dữ liệu lấy được vào database

}



function App() {
  //khai báo state trong function trong ngoài đều được
  const [statusForm, setStatusForm] = useState(true)
  //khai báo 1 state để lưu đối tượng
  const [noteEditObject, setnoteEditObject] = useState({})



  const statusFormEdit = () => {
    setStatusForm(false)
  }
  const statusFormAdd = () => {
    setStatusForm(true)
  }

  const hienForm = () => {
    if (statusForm === true) {
      return (
        <NoteAdd getData={(item) => addData(item)}

        />
      )
    } else {
      return (
        <EditUser
          statusFormAdd={() => statusFormAdd()}
          noteEditObject={noteEditObject}
        />
      )
    }
  }
  //hàm lấy thông tin cần sửa
  const editInfo = (info) => {
    // alert('thông tin nhận sửa: ' + info)
    setnoteEditObject(info)//gán thông tin cho state
  }

  const deleteDb = (id) => {
    const db = getDatabase();
    var data = ref(db,'note/');
    remove(child(data,id));
    alert('Đã xóa dữ liệu có id là : ' + id);
  }
  return (
    
    <div className="">
      <Menu></Menu>
      <div className='container'>
        <div className='row'>
          <NoteList
            statusFormEdit={() => statusFormEdit()}
            edit={(info) => editInfo(info)}
            delete={(id)=>deleteDb(id)}
          />
          {hienForm()}

        </div>
      </div>
    </div>
  );
}

export default App;
