import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import picture from '../../images/download.jpg'


function Blog() {
    return(
        <div className="container my-5">
            <div className="row mt-5">
                <div className="col-sm-2"></div>
                    <div className="col-sm-12 col-lg-4 my-5">
                    <div class="card ">
                        
            {/*Whatever image you want, just download it in the PICTURES folder of this project,
                and write: import imagee from '../pictures/test.jpg' or whatever name is the picture
                and put it in between the curly braces of the src tag  */} 
                <img src={picture} class="card-img-top" alt="..." style={{width: "auto", height: "350px"}}></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Read full text</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-12 col-lg-4 my-5">
                    <div class="card">
                        
                {/*Whatever image you want, just download it in the PICTURES folder of this project,
                and write: import imagee from '../pictures/test.jpg' or whatever name is the picture
                and put it in between the curly braces of the src tag  */} 
                <img src={picture} alt="..." style={{width: "auto", height: "350px"}}></img>
                    <div class="card-body">
                    {/* Write the title here */} <h5 class="card-title">Card title</h5>
                    {/* Write the content here */} <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Read full text</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-2"></div>
                </div>
      </div>
      
    )
}
export default Blog;