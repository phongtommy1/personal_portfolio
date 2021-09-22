import './intro.scss'
import { ArrowDownward } from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backspeed: 60,
            strings: ["Driven.", "Motivated.", "Hard Working."],
        });
    }, []);
    return (
        <div className='intro' id='intro'>
            {/* <div className="left">
                <div className="imgContainer">
                    <img src="https://images.unsplash.com/photo-1631804925725-a40d31dbcc3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="" />
                </div>
            </div> */}
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Tommy Phong.</h1>
                    <h3>I am <span ref={textRef}></span></h3>

                </div>
                <a href="#portfolio">
                    <ArrowDownward className="arrow" />
                </a>

            </div>
        </div>
    )
}
