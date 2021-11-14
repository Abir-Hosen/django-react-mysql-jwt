import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchfileData } from '../../redux/resources/basicResources';
import useDocumentTitle from "../../../features/hooks/useDocumentTitle";
import json2csv from "json2csv";
import { CSVLink } from "react-csv";

const { Parser } = require('json2csv');
const json2csvParser = new Parser();

const FileData = () => {

    useDocumentTitle('Upload File')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchfileData())
    }, [dispatch]);



    const [filename, setFilename] = useState("")
    const { basicData } = useSelector((state) => state)

    const submitFile = () => {

        console.log(filename)

    }

    let csvData = [['id', 'Name', 'Description', 'Created', 'Updated']];
    basicData.fileData.forEach(e => {
        csvData.push([e.id, e.name, e.description, e.created, e.updated])
    });


    let headers = [
        { label: "id", key: "id" },
        { label: "Name", key: "name" },
        { label: "Description", key: "description" },
        { label: "Created", key: "created" },
        { label: "Updated", key: "updated" },
    ];

    return (
        <div>
            <p>File Data list procedure pending</p>
            <input type="file" name="file" onChange={(e) => setFilename(e.target.value)} />
            <button onClick={submitFile}>submit</button>

            <hr />
            <br />
            <p>List</p>
            <ul>
                {basicData.fileData.length > 0 && basicData.fileData.map(data =>
                    <li>
                        ID: {data.id}&nbsp;&nbsp;
                        NAME: {data.name}&nbsp;&nbsp;
                        DESCRIPTION: {data.descriptiob}&nbsp;&nbsp;
                        CREATED ON: {data.created}&nbsp;&nbsp;
                    </li>
                )}
            </ul>
            <CSVLink data={csvData} headers={headers}>
                Download me
            </CSVLink>;
        </div>
    )
}

export default FileData;