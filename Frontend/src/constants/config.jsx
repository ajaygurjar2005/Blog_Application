export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title:"Loading....",
        message:"Data being loaded , please wait ..."
    },
    success : {
        title:"Success",
        message:"Data Successfully loaded"
    },
    responseFailure: {
        title:"Error",
        message:"An error occured by fetching response from the server. please try again ... / error in backend"
    },
    requestFailure:{
        title:"Error",
        message:"An error occured while parsing request data / "
    },
    networkError:{
        title:"network Error",
        message:"Unable to connect with the server. please check internet connectivity and try again later"
    }
}

// SAMPLE REQUEST
// NEED SERVICE CALL : { url: "/", method:"",params: true/false, query: true/false}


  

export const SERVICE_URLS = {
    userSignup:{ url:"/signup",method:'POST'},
    userLogin:{url:"/login",method:"POST"},
    uploadFile:{url:"/file/upload", method:"POST"},
    createPost:{url:"/create",method:"POST"},
    getAllPost:{url:"/posts",method:"GET",params:true},
    getPostById:{url:'/post',method:"GET",query:true},
    updatePost:{url:'/update',method:'PUT',query:true},
    deletePost:{url:'delete',method:'DELETE',query:true},
    newComment:{url:'/comment/new',method:'POST'},
    getAllComments:{url:'/comments',method:'GET',query:true},
    deleteComment:{url:'/comment/delete',method:'DELETE',query:true}
}