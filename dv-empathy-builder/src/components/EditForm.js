import React, { useState, useEffect } from 'react';
import { userInfo } from 'os';

const EditForm = props => {
    const [name, setName] = useState();

    useEffect(() => {
        setName();
    }, [props]);

    const handleInputChange = e => {
        const { name, value } = e.targer;
        setName({ ...userInfo, [name]: value });
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
            }}>
            <input type='text' name='name' value={``} />
        </form>
    );
};

export default EditForm;
