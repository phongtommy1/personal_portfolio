import { useState } from 'react';
import './contact.scss'
import { LinkedIn, GitHub, Email } from '@material-ui/icons';

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    };
    return (
        <div className="contact" id='contact'>
            {/* <div className="left">
                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
            </div> */}
            <div className="right">
                <h2>Contact</h2>
                <div className="container">
                    <a href="https://www.linkedin.com/in/tommy-phong-914959185/" target="_blank"><LinkedIn /></a>
                    <a href="https://github.com/phongtommy1/ " target="_blank"><GitHub /></a>
                    <a href="mailto: phongtommy78@gmail.com" target="_blank"><Email /></a>
                </div>
                <a href="https://docs.google.com/document/d/1iC39jB3NYTu_YzooeBbgCJDuA56PtZ6lo1xou3LGSgs/edit?usp=sharing" target="_blank">Resume</a>

            </div>

        </div>
    )
}
