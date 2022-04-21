import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import picture from '../../images/download.jpg'


function Blog() {
    const [showMoreOne, setShowMoreOne] = useState(false);
    const [showMoreTwo, setShowMoreTwo] = useState(false);
    const [showMoreThree, setShowMoreThree] = useState(false);
    const [showMoreFour, setShowMoreFour] = useState(false);
    const [showMoreFive, setShowMoreFive] = useState(false);

    const  textOne = "tetexttexttexttexttexttexttexttexttexnbrttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextexttexttexttexttexttexttextttextxt";
    const  textTwo = "tetexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextexttexttexttexttexttexttextttextxt";
    const  textThree = "tetexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextexttexttexttexttexttexttextttextxt";
    const  textFour = "this is new card";
    {/* Write the content in another text const as shown above, you have to make another const showMoreFive for example
                    and make the same logic  */}
    
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
                    <p>
                        <p>
                         {showMoreOne ? textOne : `${textOne.substring(0, 130)}`}
                         </p>
                         <button className="btn btn-primary" onClick={() => setShowMoreOne(!showMoreOne)}>
                         {showMoreOne ? "  Show less" : "Show more"}
                         </button>

                    </p>
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
                    {/* Write the content here */} <p>
                        <p>
                         {showMoreTwo ? textTwo : `${textTwo.substring(0, 150)}`}
                         </p>
                         <button className="btn btn-primary" onClick={() => setShowMoreTwo(!showMoreTwo)}>
                         {showMoreTwo ? "  Show less" : "Show more"}
                         </button>

                    </p>
                    </div>
                </div>
                </div>
                <div className="col-sm-2"></div>
                </div>
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
                    <p>
                        <p>
                         {showMoreThree ? textOne : `${textThree.substring(0, 130)}`}
                         </p>
                         <button className="btn btn-primary" onClick={() => setShowMoreThree(!showMoreThree)}>
                         {showMoreThree ? "  Show less" : "Show more"}
                         </button>

                    </p>
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
                    {/* Write the content in another text const as shown above, you have to make another const showMoreFive for example
                    and make the same logic  */} <p>
                        <p>
                         {showMoreFour ? textTwo : `${textFour.substring(0, 150)}`}
                         </p>
                         <button className="btn btn-primary" onClick={() => setShowMoreFour(!showMoreFour)}>
                         {showMoreFour ? "  Show less" : "Show more"}
                         </button>

                    </p>
                    </div>
                </div>
                </div>
                <div className="col-sm-2"></div>
                </div>
      </div>
      </div>
      
    )
}
export default Blog;