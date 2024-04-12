import React from 'react'
import { useState, useEffect } from 'react';
import { API } from '../../../service/api';
import { useSearchParams , Link} from 'react-router-dom';
import Post from './Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getAllPost({category:category || ''});
            if (response.isSuccess) {
                
                setPosts(response.data)
                
            }
        };
        fetchData();
    }, [category]);

    return (
        <div className="flex flex-row-reverse flex-wrap mt-4">
            {posts && posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="md:w-1/3 w-1/1">
                    <Link  to={`details/${post._id}`}>
                        <Post prop={post} />
                        </Link>
                    </div>
                ))
            ) : (
                <div>No data available to display</div>
            )}
        </div>

    );
}

export default Posts
