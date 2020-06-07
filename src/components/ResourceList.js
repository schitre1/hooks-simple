import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {

    const [resources, setResources ] = useState([]);

    useEffect(()=>{
        (async (resource) => { //first time mounted and subsequent renders
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource); //you can't only define an async function here - it should be immediately invoked, else write a 
        //separate async function and call it from within useEffect
    }, [resource]);
    return (
    <ul>
        {resources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
    );

}

export default ResourceList;