import React, { useRef , useState} from "react"
import { Form, Button, Card ,Alert} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signup.css'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        if (passwordRef.current.value.length < 6) {
            return setError("Password must be at least 6 characters")
        }
    
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch (err) {
 
            setError(err.message || "Failed to create an account")
            console.error("Signup error:", err)
        }
    
        setLoading(false)
      }

    return (
        <>
         <div className="container">
            <Card className="mt-5">
                <Card.Body>
                    <h2 className="text-center mt-1">SIGN UP</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100 mt-5" type="submit" disabled={loading}>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to={"/Signin"}>Sign In</Link> 

            </div>

            <div className="w-100 text-center mt-2">
               <Link to={"/"}>Home</Link>
            </div>
        </>
    )
}