import './App.css';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [post,updPst] = useState([]);
  const [imgs, updImgs] = useState([]);
  
  const getPostList = async () => 
  {
    try {
      let url1 = "https://jsonplaceholder.typicode.com/posts";
       console.log("entra");
      let result = await axios({
      url1,
      method: 'GET',
      dataType : 'json',
      ContentType: 'application/json',
      });
      console.log(result.data);
      updPst( result.data);
    }
    catch(error)
    {
      alert(error);
    }
  }
  
  const getImgList = async () => {
    try {
      let url2="https://jsonplaceholder.typicode.com/photos";
      let result = await axios({
        url2,
        method: 'GET',
        dataType : 'json',
        ContentType: 'application/json',
        });
        console.log(result.data);
        updImgs(result.data);
    } catch (error) {
      alert(error); 
    }
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <button className='btn btn-primary' onClick={getPostList}>Posts</button>
          <button className='btn btn-success' onClick={getImgList}>Images</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table'>
              <thead>
                <tr>
                  <th colSpan={4} >POST</th>
                </tr>
                <tr>
                  <th scope='col'> User ID </th>
                  <th scope='col'> ID</th>
                  <th scope='col'> Title</th>
                  <th scope='col'> Body</th>
                </tr>
              </thead>
              <tbody>
              {
                post.map( (data)=> 
                <tr key={"celda"+data.userId}>
                  <td key={"userID"+data.userId}>{data.userId}</td> 
                  <td key={"ID"+data.userId}>{data.id}</td>
                  <td key={"title"+data.userId}>{data.title} </td>
                  <td key={"body"+data.userId}>{data.body}</td>
                </tr>
                )
              }
              </tbody>
          </table>
        </div>   
      </div>
      <div className='row'>
        <div className='col-md-12 header-photo'>PHOTO</div>
      </div>
      <div className='row'>
      {
        imgs.map( (data)=> 
        <div key={"id:"+data.albumId} className='col-md-4 bg-info'>
          <p key={"title:"+data.title}> Title: {data.title}</p>
          <img key={"source:"+data.url} src={data.url} alt={"Albúm ID:"+data.albumId+"ID:"+data.id+"thumbnailUrl:"+data.thumbnailUrl}/>
        </div>
        )
      }
      </div>
    </div>
  );
}

export default App;
