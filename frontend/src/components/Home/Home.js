import { React, useEffect, useRef, useState } from "react";
import { Container, Form, Button, Dropdown, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { SAVE_WALLET_API, WALLET_PDF_API } from '../../config';
import fileDownload from 'js-file-download'

const Home = () =>{

    const walletAddress = useRef("");
    const username = useRef("");
    const transferredAmount = useRef("");
    const password = useRef("");
    const repeatPassword = useRef("");
    const [blockchainType, setBlockchainType] = useState("Ethereum");
    const [clientIpAddress, setClientApiAddress] = useState("");
    const fileName = "crypto.pdf"
    const [ errors, setErrors ] = useState({})
    const [ form, setForm ] = useState({});
    let data = {};

    
    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
          ...errors,
          [field]: null
        })
      }

    //get values from form inputs
    const setInputsInDataObject = () =>{
       data = {
            walletAddress: walletAddress.current.value,
            username: username.current.value,
            transferredAmount: parseFloat(transferredAmount.current.value),
            password: password.current.value,
            walletType: blockchainType,
            ipAddress : clientIpAddress
          }
    };
  
    //get selected type of blockchain
    const blockchainTypeChoice = (event) =>{
        setBlockchainType(event.target.innerText);
    }

    //send request to backend to create pdf and download it
    const printPDF = () =>{
        setInputsInDataObject();

        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if ( Object.keys(newErrors).length > 0 ) {
            // We got errors!
            setErrors(newErrors)
        } else {
        // No errors! 
            axios
            .post(WALLET_PDF_API, data, {
                contentType: 'application/pdf',
                responseType: 'blob' 
            })
            .then(response => {
                fileDownload(response.data, fileName)
            });
        } 
    };
  
    //on submit save wallet in database
    const saveWallet = (event) =>{
        event.preventDefault();
      
        setInputsInDataObject();

        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if ( Object.keys(newErrors).length > 0 ) {
            // We got errors!
            setErrors(newErrors)
        } else {
        // No errors! 
            axios
            .post(SAVE_WALLET_API, data)
            .then(response => {
                alert("Form submitted!");
            });
        }       
    };

    //get ip addrerss of client
    const getIpAddress = async () =>{
        const res = await axios.get('https://geolocation-db.com/json/')
        setClientApiAddress(res.data.IPv4);
    }

    //check if password and confirm password match
    const findFormErrors = () => {
        const { password, repeatPassword } = form
        const newErrors = {}
        
        // passworod errors
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) 
            newErrors.password = 'password needs to have at least 6 characters, one special character, one number, one uppercase, one lowercase latter'
        else if ( password !== repeatPassword ){
            newErrors.repeatPassword = 'password and re-enter password does not match'
        }
        return newErrors
    }

    useEffect (() => {
        getIpAddress();
    }, [])

    return (
        <Container className="mb-5">
            <div className='text-center mt-4' style={{width: "350px", margin: "auto"}}>
            <h2>Comming soon</h2>
            {/* <Link to={{pathname: "/"}}> */}
                <a href="#">How to use this services</a>
            {/* </Link> */}
            <Form className="mt-5" onSubmit={saveWallet}>
                <Dropdown style={{marginBottom: "80px"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Choose wallet type:
                    </Dropdown.Toggle>
                    <Dropdown.Menu onClick={blockchainTypeChoice}>
                        <Dropdown.Item>Ethereum</Dropdown.Item>
                        <Dropdown.Item>Bitcoin</Dropdown.Item>
                        <Dropdown.Item>Tether</Dropdown.Item>
                    </Dropdown.Menu>
                    <h5 className={"mt-3"}>{blockchainType}</h5>
                </Dropdown>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your wallet address: </Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        ref={walletAddress}
                        maxLength="64"
                        placeholder="Enter wallet address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Transfferd amount:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        step="any"
                        ref={transferredAmount}
                        placeholder="Amount" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control 
                        required
                        type="text"
                        ref={username}
                        placeholder="Desired Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        required
                        type="password"
                        ref={password}
                        onChange={ e => setField('password', e.target.value) }
                        isInvalid={ !!errors.password }
                        placeholder="Desired Password" 
                        autoComplete="on"/>
                        <Form.Control.Feedback type='invalid'>
                            { errors.password }
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="repeatPassword">
                    <Form.Label>Re-enter password:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        ref={repeatPassword}
                        onChange={ e => setField('repeatPassword', e.target.value) }
                        isInvalid={ !!errors.repeatPassword }
                        placeholder="Re-enter desired passord" 
                        autoComplete="on"/>
                        <Form.Control.Feedback type='invalid'>
                            { errors.repeatPassword }
                        </Form.Control.Feedback>
                </Form.Group>

                <Button style={{width: "110px"}} variant="success" type="submit">
                    Submit
                </Button>

                <Button style={{width: "110px"}} className="m-3" variant="primary" onClick={printPDF}>
                    Print
                </Button>
            </Form>
            </div>
        </Container>
    );
}

export default Home;