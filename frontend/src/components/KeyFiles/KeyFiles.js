import React, { useState, useEffect } from "react";
import "./KeyFiles.css";
import { Button, Table } from 'react-bootstrap';
import { useKeyFilesFetchAll } from '../../hooks/useKeyFilesFetchAll'; 
import axios from "axios";
import { DOWNLOAD_KEY_FILES_API, STORE_KEY_FILES_API } from "../../config";
import fileDownload from 'js-file-download';


export const KeyFiles = () => {
  const [state, loading, error] = useKeyFilesFetchAll();
  const [files, setFiles] = useState([]);

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
                            <Button type="submit" variant="primary" className="mx-2" value={row.id}>Report</Button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </Table>
      </>
    );
}