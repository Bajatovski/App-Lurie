import React, { useState } from "react";
import "./KeyFiles.css";
import { Button, Table } from 'react-bootstrap';
import { useKeyFilesFetchAll } from '../../hooks/useKeyFilesFetchAll'; 
import axios from "axios";
import { DELETE_KEY_FILES_API, DOWNLOAD_KEY_FILES_API, STORE_KEY_FILES_API } from "../../config";
import fileDownload from 'js-file-download';


export const KeyFilesAdmin = () => {
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

    const handleDelete = async (deleteId) => {
        await axios.put(DELETE_KEY_FILES_API + `${deleteId.target.value}`, {
            headers: {'content-type': 'application/json'}
        })
        window.location.reload(true);
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
        <div className="upload-container my-5">
            <div className="upload-content">
            <div className="multiple-upload">
                <h2>Select a single or multiple files to upload</h2>
                <input
                    id="multipleFileUploadInput"
                    type="file"
                    name="files"
                    className="file-input"
                    multiple
                    required
                    onChange={(e) => handleUpload(e)}
                />
                <Button className="mx-2 px-3" variant="primary" type="submit" onClick={() => uploadFile()}>Submit</Button>{' '}
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
                            <Button type="submit"  className="mx-2 px-3" variant="primary" className="mx-2" value={row.id} onClick={(e) => {
                                handleDownload(e, row.fileName);
                            }}>Download</Button>
                            <Button type="submit" variant="danger" value={row.id} onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleDelete(e);
                            }}>Delete</Button>{' '}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
        </>
    );
}