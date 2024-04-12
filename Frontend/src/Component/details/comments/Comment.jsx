import { DataContext } from '../../../context/DataProvider';

import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../../service/api';

const Comment = ({ comment , setToggle}) => {
  const { account } = useContext(DataContext)

  const deleteComment = async () => {
    let response = await API.deleteComment(comment._id)
    if(response.isSuccess){
      setToggle(prevState => !prevState)
    }
  }

  

  return (
    <div>
      <section className="relative flex items-center justify-center   bg-white bg-gray-100 min-w-screen">
          <div className="flex-row w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">   
              <div className="flex-row mt-1">
              {
                account.username === comment.name ?
                  <DeleteIcon color='' className='md:mr-[100px]' style={{ padding: '5px',  fontSize: '30px', border: "1px solid #878787", borderRadius: "5px" , float:"right"}} onClick={() => deleteComment()} />
                  : null
              }
                <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                  {comment.name}
                  <span className="ml-2 text-xs font-normal text-gray-500">
                  {new Date(comment.date).toDateString()}
                  </span>
                </div>  
                
                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                {comment.comments}
                </div>
              </div>
            </div>
        
      </section>

    </div>
  )
}

export default Comment;
