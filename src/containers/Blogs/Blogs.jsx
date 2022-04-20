import React, { useState } from 'react';
import blog from './Blogs.module.css'
import blog_img from '../../images/blog_image.png'

const Blogs = () => {
    const [anotherBlog, setAnotherBlog] = useState(false)
    return (
        <>
            <div className={blog.bg}>
            </div>
            {/* <div className={blog.main}> */}
            {anotherBlog ? (
                <div className={blog.container}>

                    <img className={blog.image_1} src={blog_img} alt="Blog_image"></img>
                    <h2>YES introduces The
                        Revenants iNFTs</h2>
                    <div className={blog.date}>
                        <p>March 25 2022</p>
                        <p>By Yes NFT</p>
                    </div>
                    <p>The Revenants is a first-of-its-kind collection, depicting historical and cultural icons reborn. From Nikola Tesla to Napoleon to Cleopatra, the world’s greatest minds and stories are now being brought to life as Intelligent NFTs. iNFTs are a powerful new medium that not only seeks to advance the utilities of NFTs but also unlock new economic, creative, and social possibilities. The First iNFT was auctioned successfully through Sotheby’s on June 10th, 2021 for nearly half a million USD.
                        You can find the Revenants by visiting alethea.ai and entering the Intelligent Metaverse known as Noah’s Ark. You can broadcast a custom video message that the iNFT, Robin Hood recites, or ask Snow White what the meaning of love is. On Noah’s Ark, all iNFTs have varying levels of intelligence that allow them to interact.</p>
                    <img src={blog_img} alt="blog_image"></img>
                    <p>Step 1: Choose a format
                        Pitch is your chance to show clients the designer behind the work. Here are a few different formats you can choose from to achieve this:
                        Present yourself — Film a short introductory video sharing your work history, experience, education, and more.
                        Create a sizzle reel — Showcase your work through a video montage to highlight the depth and breadth of your skills.
                        Share your creative process — Talk future clients through how you approach the design process and what it looks like to work with you.
                        While these are the most obvious formats for your Pitch, we encourage you to get creative with it! Let your imagination run wild and tell your story, your way.</p>
                </div>

            ) :
                (
                    <div className={blog.container}>

                        <img className={blog.image_1} src={blog_img} alt="blog_image"></img>
                        <h2>Alethea introduces The
                            Revenants iNFTs</h2>
                        <div className={blog.date}>
                            <p>March 25 2022</p>
                            <p>By Yes NFT</p>
                        </div>
                        <p>The Revenants is a first-of-its-kind collection, depicting historical and cultural icons reborn. From Nikola Tesla to Napoleon to Cleopatra, the world’s greatest minds and stories are now being brought to life as Intelligent NFTs. iNFTs are a powerful new medium that not only seeks to advance the utilities of NFTs but also unlock new economic, creative, and social possibilities. The First iNFT was auctioned successfully through Sotheby’s on June 10th, 2021 for nearly half a million USD.
                            You can find the Revenants by visiting alethea.ai and entering the Intelligent Metaverse known as Noah’s Ark. You can broadcast a custom video message that the iNFT, Robin Hood recites, or ask Snow White what the meaning of love is. On Noah’s Ark, all iNFTs have varying levels of intelligence that allow them to interact.</p>
                        <img src={blog_img} alt="blog_image"></img>
                        <p>Step 1: Choose a format
                            Pitch is your chance to show clients the designer behind the work. Here are a few different formats you can choose from to achieve this:
                            Present yourself — Film a short introductory video sharing your work history, experience, education, and more.
                            Create a sizzle reel — Showcase your work through a video montage to highlight the depth and breadth of your skills.
                            Share your creative process — Talk future clients through how you approach the design process and what it looks like to work with you.
                            While these are the most obvious formats for your Pitch, we encourage you to get creative with it! Let your imagination run wild and tell your story, your way.</p>
                    </div>

                )}

            <div className={blog.btn}>
                <button onClick={() => setAnotherBlog(!anotherBlog)}>Next</button>
            </div>

            <div className={blog.videos}>
                <h2>Featured Videos</h2>
                <iframe width="540" height="315" src="https://www.youtube.com/embed/eQ_VkewyxYk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="540" height="315" src="https://www.youtube.com/embed/rGs33UnB64g" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default Blogs