import React, { useState, useEffect } from "react";
import "./KeyFiles.css";
import { Button, Table } from 'react-bootstrap';
import { useKeyFilesFetchAll } from '../../hooks/useKeyFilesFetchAll'; 
import axios from "axios";
import { DELETE_KEY_FILES_API, DOWNLOAD_KEY_FILES_API, STORE_KEY_FILES_API } from "../../config";
import fileDownload from 'js-file-download';


export const KeyFiles = () => {
  const [state, loading, error] = useKeyFilesFetchAll();
  const [files, setFiles] = useState([]);

  const uploadFile = async () => {

      const file = new FormData();
      for(var i = 0; i<files.length;i+=1){
          file.append("files", files[i]);
      }
      
      await axios.post(STORE_KEY_FILES_API, file, {
          headers: {'content-type': 'multipart/form-data'}
      })
      window.location.reload(true);
  }

  const handleUpload = (data) => {
      setFiles([...data.target.files]);
  }

  const handleDownload = async (downloadId, fileName) => {
      await axios.get(DOWNLOAD_KEY_FILES_API + `${downloadId.target.value}`, {
          responseType: 'blob'
      })
      .then(response => {
          fileDownload(response.data, fileName);
      })
      .catch((error) => console.log(error));   
  }

    return (
      <>
        <div className="upload-container">
          <div className="upload-content">
            <div className="multiple-upload">
              <h3>Select a single or multiple files to upload</h3>
              {/* <form id="multipleUploadForm" name="multipleUploadForm"> */}
                <input
                  id="multipleFileUploadInput"
                  type="file"
                  name="files"
                  className="file-input"
                  multiple
                  required
                  onChange={(e) => handleUpload(e)}
                />
                <Button variant="primary" className="mx-2 px-3" type="submit" onClick={() => uploadFile()}>Submit</Button>{' '}
              {/* </form> */}
            </div>
          </div>
        </div>


        <Table bordered responsive className="my-5 container">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state?.data.map((row) => {
                return(
                    <tr key={row.id}>
                        <td>{row.fileName}</td>
                        <td>
                            <Button type="submit" variant="primary" className="mx-2" value={row.id} onClick={(e) => {
                                handleDownload(e, row.fileName);
                            }}>Download</Button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </>
    );
}