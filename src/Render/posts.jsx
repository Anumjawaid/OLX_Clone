import React from 'react'
import '../App.css'
import  {Header,Homeimg,Contgrey,Cont,Footimg,Footer1,Footer2} from '../components/header'
import Home from '../components/home'
import { Post,ContPost} from '../components/posts'

function PostPage() {
  return (
    <div className="App">

<Post ></Post>
<ContPost></ContPost>
    </div>
  );
}

export default PostPage;