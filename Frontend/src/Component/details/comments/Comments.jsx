import React, { useState , useContext, useEffect} from 'react'
import { DataContext } from '../../../context/DataProvider'
import { API } from '../../../service/api'
import Comment from './Comment'

const Comments = ({ post }) => {
    let url = "https://static.thenounproject.com/png/12017-200.png"

    const intialValue = {
        name:'',
        postId:'',
        comments:'',
        date: new Date()
    }

    const [comment,setComment] = useState(intialValue);
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)

    const {account} = useContext(DataContext)

    const handleChange = (e) =>{
        setComment({
            ...comment,
            name:account.username,
            postId:post._id,
            comments:e.target.value,
        })
    }
    const addComment = async(e) =>{
        let response = await API.newComment(comment);
        if(response.isSuccess){
            setComment(intialValue);
        }
        setToggle(prevState => !prevState)
    }

    useEffect(()=>{
        let getData = async() =>{
            let response = await API.getAllComments(post._id)
            if(response.isSuccess){
                setComments(response.data)
            }
        };
        getData();
    },[post , toggle])

    
    return (
        <div>
        <div className='flex mt-8'>
            <img
                src={url}
                alt=''
                className='h-[60px] w-[80px] ml-10'
            />
            <div className='flex justify-center items-center mb-8 w-full ml-4 mt-2'>
                <textarea
                    className='w-[100%] text-center'
                    placeholder='Comment Here  .....'
                    id=''
                    value={comment.comments}
                    onChange={(e)=>handleChange(e)}
                    name='description'
                />
            </div>
            <button class="bg-white w-[100px] h-[40px] mr-12 mt-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  ml-12" 
                onClick={(e)=>addComment(e)} >
                    Post
                </button>
           
        </div>
        <div>
        {
            comments && comments.length > 0 && comments.map(data => {
                return <Comment key={data.id} comment={data}  setToggle={setToggle}/>;
            })
            
        }
        </div>
        </div>
    )
}

export default Comments
