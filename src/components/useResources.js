import {useState, useEffect} from 'react';
import axios from 'axios';

//useResources is now completely reusable across components
const useResources = (resource) => {
    const [resources, setResources ] = useState([]);

    useEffect(()=>{
        (async (resource) => { //first time mounted and subsequent renders
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource); //you can't only define an async function here - it should be immediately invoked, else write a 
        //separate async function and call it from within useEffect
    }, [resource]);
    return resources;
};

export default useResources;