import React, { useEffect, useState, useContext } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useLocation , useNavigate } from 'react-router-dom';

import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import axios from 'axios';

const initialPost = {
    title: "",
    description: "",
    picture: "",
    username: "",
    categories: "",
    createDate: new Date()
}


const CreatePost = () => {
    const navegate = useNavigate();

    const [post, setPost] = useState(initialPost);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const url = post.picture ? post.picture : "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1520x800.webp"
    const location = useLocation();

    const { account } = useContext(DataContext)


    const [file, setFile] = useState('')
    useEffect(() => {
        const getImage = async () => {
            try {
                if (file) {
                    const formData = new FormData();
                    formData.append('image', file);
                    const response = await (axios.post('http://localhost:8000/file/upload',formData))
                    .then((succes)=>{
                        console.log("true",succes.data)
                        post.picture = succes.data.imageUrl;
                        console.log(post.picture)
                    }).catch((err)=>{
                        console.log("err",err)
                    })
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
        getImage();
        post.categories = location.search?.split("=")[1] || "All";
        post.username = account.username;
    }, [file])


    const savePost =  async (e) => {
        e.preventDefault();
       let response =  await API.createPost(post);
       if(response.isSuccess){
        navegate('/')
       }
    }

    return (
        <form className=' mt-8' action="/upload" enctype="multipart/form-data">
            <div className='flex justify-center items-center'>
                <img src={url} alt='' className='w-[80%] h-[400px] ' />
            </div>
            <div className='grid grid-cols-1   md:flex w-[80%] justify-center item-center mt-2 p-8 md:ml-[120px]'>
                <label htmlFor='fileinput'>
                    <ControlPointIcon className=' md:mt-1' />
                </label>
                <input
                    type='file'
                    name='file'
                    id='fileinput'
                    style={{ display: 'none' }}
                    onChange={(e) => { setFile(e.target.files[0])}}
                />

                <div className="w-[70%] ml-8">
                    <div className="relative h-10">
                        <input
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                            placeholder=""
                            name='title'
                            onChange={(e) => {handleChange(e) }}
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                            Title
                        </label>

                    </div>
                </div>

                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  ml-12" 
                 onClick={(e)=>savePost(e)}>
                    Post
                </button>
            </div>
            <div className='flex justify-center items-center mb-8'>
                <textarea
                    className='w-[80%] text-center'
                    placeholder='Tell Your story .....'
                    id=''
                    name='description'
                    onChange={(e) => { handleChange(e) }}
                />
            </div>

        </form>
    )
}

export default CreatePost
