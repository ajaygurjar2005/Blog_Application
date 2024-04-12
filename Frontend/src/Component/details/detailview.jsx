import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { API } from '../../service/api.js';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataContext } from '../../context/DataProvider.jsx';
import Comments from './comments/Comments.jsx';

const Detailview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { account } = useContext(DataContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getPostById(id);
        setPost(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    try {
      const response = await API.deletePost(post._id);
      if (response.isSuccess) {
        navigate('/');
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className='container mx-auto mb-4'>

      
      <div className='flex justify-center items-center'>
        <img src={post.picture} alt='' className='w-full md:w-[70%] h-[300px]' />
      </div>

      
      <div className='flex justify-end mt-4 mr-4'>
        {account.username === post.username &&
          <>
            <Link to={`/update/${post._id}`}>
              <EditIcon  color='primary' className='mr-2'style={{ padding: '5px', fontSize: '30px', border: "1px solid #878787", borderRadius: "5px" }} />
            </Link>
            <DeleteIcon color='error' className='md:mr-[175px]' style={{ padding: '5px', fontSize: '30px', border: "1px solid #878787", borderRadius: "5px" }} onClick={() => deleteBlog()} />
          </>
        }
      </div>

     
      <div className='ml-6 mt-4'>
        <h1 className='text-center text-3xl font-bold mt-6'>{post.title}</h1>
        <p className='text-right mt-2 mr-2'>{new Date(post.createDate).toDateString()}</p>
        <h2 className='font-bold mt-2'>{post.username}</h2>
        <p className='mt-2'>{post.description}</p>
      </div>

      <Comments  post = {post}/>
    </div>
    
  );
};

export default Detailview;
