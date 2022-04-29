import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import picture from '../../images/download.jpg';
import '../Blog/Blog.css';


function Blog() {
    const [showMoreOne, setShowMoreOne] = useState(false);
    const [showMoreTwo, setShowMoreTwo] = useState(false);

    // Steps how to add new blog:
    //  1. textThree = paste the code here
    //  2. const  setShowMoreThree
    //  3. Copy div exactly as shown below and change the names
    // For another text or blog, just make const textThree = ` paste the code here `. You need to copy the same div from below
    // and write exactly as me in the other 2 cases(cards). If you have any question I can show you on sharescreen,don't hesistate
    // to contact me.
    const textOne = `
        What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    Where does it come from?
    
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    Where can I get some?
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    const  textTwo = "tetexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextexttexttexttexttexttexttextttextxt";
    
    return(
        <div className="container my-5">
            <div className="row mt-5">
                <div className="col-sm-3"></div>
                    <div className="col-sm-12 col-lg-6 my-5">
                    <div class="card ">
            {/*Whatever image you want, just download it in the PICTURES folder of this project,
                and write: import imagee from '../pictures/test.jpg' or whatever name is the picture
                and put it in between the curly braces of the src tag  */}
                <img src={picture} class="card-img-top" alt="..." style={{width: "auto", height: "350px"}}></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p>
                        <p className="span cardOne">
                        {showMoreOne ? textOne : `${textOne.substring(0, 130)}`}
                         </p>
                         <button className="btn btn-primary" onClick={() => setShowMoreOne(!showMoreOne)}>
                         {showMoreOne ? "  Show less" : "Show more"}
                         </button>
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-sm-3"></div>
                </div>
                <div className="container my-5">
            <div className="row mt-5">
                <div className="col-sm-3"></div>
                    <div className="col-sm-12 col-lg-6 my-5">
                    <div class="card ">
            {/*Whatever image you want, just download it in the PICTURES folder of this project,
                and write: import imagee from '../pictures/test.jpg' or whatever name is the picture
                and put it in between the curly braces of the src tag  */}
                <img src={picture} class="card-img-top" alt="..." style={{width: "auto", height: "350px"}}></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p>
                        <p>
                         {showMoreTwo ? textTwo : `${textTwo.substring(0, 130)}`}
                         </p>
                         <button className="btn btn-primary" onClick={() => setShowMoreTwo(!showMoreTwo)}>
                         {showMoreTwo ? "  Show less" : "Show more"}
                         </button>
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-sm-3"></div>
                </div>
      </div>
      </div>
    )
}
export default Blog;