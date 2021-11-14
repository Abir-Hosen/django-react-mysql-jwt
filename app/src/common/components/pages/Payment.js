import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchusers, uploadFile } from '../../redux/resources/basicResources';
import useDocumentTitle from "../../../features/hooks/useDocumentTitle";

const Payment = () => {

    useDocumentTitle('Payment & Members')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchusers())
    }, [dispatch]);

    const { basicData } = useSelector((state) => state)

    return (
        <div>
            <p>Payment and Member</p>
            <ul>
                {basicData.userList.length>0 && basicData.userList.map(member =>
                    <li>
                        ID: {member.id}&nbsp;&nbsp;
                        USERNAME: {member.username}&nbsp;&nbsp;
                        EMAIL: {member.email}&nbsp;&nbsp;
                        STATUS: {member.is_active?'active':'inactive'}&nbsp;&nbsp;
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Payment;