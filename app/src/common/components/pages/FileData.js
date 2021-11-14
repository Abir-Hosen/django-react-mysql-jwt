import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchusers, uploadFile } from '../../redux/resources/basicResources';
import useDocumentTitle from "../../../features/hooks/useDocumentTitle";

const FileData = () => {

    useDocumentTitle('Upload File')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchusers())
    }, [dispatch]);


    const [filename, setFilename] = useState("")
    const { basicData } = useSelector((state) => state)

    const submitFile = () => {

        console.log(filename)

    }

    return (
        <div>
            <p>File Data list procedure pending</p>
            <input type="file" name="file" onChange={(e) => setFilename(e.target.value)} />
            <button onClick={submitFile}>submit</button>
        </div>
    )
}

export default FileData;