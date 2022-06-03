import './App.css';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [posts,updAl] = useState([]);
  const [imagenes, updPro] = useState([]);
  
  const getPosts = async () => 
  {
    try {
      let url1 = "https://jsonplaceholder.typicode.com/posts";
      let result = await axios({
      url1,
      method: 'GET',
      dataType : 'json',
      ContentType: 'application/json',
      });
      updAl( result.data);
    }
    catch(error)
    {
      alert(error);
    }
  }
  
  const getImagenes = async () => {
    try {
      
      let url2="https://jsonplaceholder.typicode.com/photos";
      let result = await axios({
        url2,
        method: 'GET',
        dataType : 'json',
        ContentType: 'application/json',
        });
        updPro(result.data);
    } catch (error) {
      alert(error); 
    }
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <button className='btn btn-primary' onClick={getPosts}>Mostrar Post</button>
          <button className='btn btn-success' onClick={getImagenes}>Mostrar Imagenes</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-dark'>
              <thead>
                <tr>
                  <th colSpan={4} >Posts</th>
                </tr>
                <tr>
                  <th scope='col'> Usuario ID</th>
                  <th scope='col'> ID</th>
                  <th scope='col'> Titulo</th>
                  <th scope='col'> Cuerpo</th> 
                </tr>
              </thead>
              <tbody>
              {
                posts.map( (datos)=> 
                <tr key={"celda"+datos.userId}>
                  <td key={"userID"+datos.userId}>{datos.userId}</td> 
                  <td key={"ID"+datos.userId}>{datos.id}</td>
                  <td key={"title"+datos.userId}>{datos.title} </td>
                  <td key={"body"+datos.userId}>{datos.body}</td>
                </tr>
                )
              }
              </tbody>
          </table>
        </div>   
      </div>
      <div className='row'>
        <div className='col-md-12 header-photo'>IMÁGENES</div>
      </div>
      <div className='row'>
      {
        imagenes.map( (datos)=> 
        <div key={"id:"+datos.albumId} className='col-md-4'>
          <p key={"title:"+datos.title}> Titulo: {datos.title}</p>
          <img key={"source:"+datos.url} size="200px"  src={datos.url} alt={"Albúm ID:"+datos.albumId+"ID:"+datos.id+"thumbnailUrl:"+datos.thumbnailUrl}/>
        </div>
        )
      }
      </div>
    </div>
  );
}
export default App;