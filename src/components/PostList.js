import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PostList = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                setPosts(result.data);
            })
    }, [])

    return ( 
        <h2>Post List</h2>
     );
}
 
export default PostList;