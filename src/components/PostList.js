import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { directive } from '@babel/types';

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
        <> 
        <h2>Post List</h2>
        {
            posts.length > 0 && posts.map(p => <div key={p.id}>{p.title}</div>)
        }
        </>
     );
}
 
export default PostList;