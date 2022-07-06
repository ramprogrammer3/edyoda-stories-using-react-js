
import React from 'react'
import style from './style.module.css'
function ProductCart() {
    let cardItems = [
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-computing-an-umbrella-term-that-enables-digital-transformation.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/the-new-way-to-encrypt-cloud-data-cloud-cryptography.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/cyber-security-analysis-of-digital-world.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },
        {
            url : "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
            title : "Introducing you all to EdYoda - www.edyoda.com",
            author : "ram kumar",
            date : "06-jul 20122",
            description : `Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of
            Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe.`

        },

    ]
  return (
    <div id = {style.productcart} >
        {cardItems.map((item,i)=>{
           return <div className={style.card}>
            <img className= {style.img} src= {item.url} alt="" />
                <div className= {style.titledesc}>
                <p className= {style.title}> {item.title} </p>
                <p className= {style.author}><span> {item.author} </span>| {item.date} </p>
                <p className= {style.description}> {item.description} </p>
                </div>
            </div>
        })}
       
    </div>
  )
}

export default ProductCart