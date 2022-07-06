import React from 'react'
import ProductCart from './ProductCart'
import style from './style.module.css'

function Post() {
    let posts = [
        "All",
"Artificial Intelligence",
"Cloud Computing",
"DevOps",
"Programming Languages",
"Mobile Application Development",
"Technology and Tools",
"Get a Job in a Tech Company",
"Others"
    ]
  return (
    <div id = {style.post}>
        <h2 className= {style.latestpost}>Latest Posts</h2>
        <p id= {style.p}><i className='fa fa-filter' id= {style.filter}></i>Filter by Category</p>
        <div>
            {posts.map((item,i)=>{
                return <a href="./index.html" key={i} className = {style.items}> {item} </a>
            })}
        </div>

        <ProductCart />
    </div>
  )
}

export default Post