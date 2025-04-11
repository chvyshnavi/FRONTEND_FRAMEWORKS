import React, { useRef , useState} from "react"
import { Form, Button, Card ,Alert} from "react-bootstrap"

import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './Signin.css'




export default function Signin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/map")
        } catch (err) {
            // Show the specific Firebase error message
            setError(err.message || "Failed to log in")
            console.error("Signup error:", err)
        }
    
        setLoading(false)
      }

    return (
        <>
        
            <Card className="mt-5">
                <Card.Body>
                    <h2 className="text-center mb-4">SIGN IN</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit"  disabled={loading} >
                            SIGN IN
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center ">
               Need an account? <Link to={"/signup"}>Sign Up</Link>
            </div>
            <div className="w-100 text-center ">
               <Link to={"/"}>Home</Link>
            </div>
        </>
    )
}