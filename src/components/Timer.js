import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Timer = () => {

    const setCountdown = 1000 * 60 * 60 * 24;
    const [timer, setTimer] = useState(setCountdown);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(interval);
                    console.log("Countdown Over !")
                    return 0;
                } else {
                    return prevTimer - 1;
                }
            })
        }, [1000])
        return () => clearInterval(interval);
    }, [])

    const getFormateTimer = (timer) => {
        const days = Math.floor((timer / 1000 / 60 / 60 / 24));
        const hours = Math.floor((timer / 1000 / 60 / 60) % 24)
        const minutes = Math.floor((timer / 1000 / 60) % 60)
        const seconds = timer % 60;

        return [days, hours, minutes, seconds]
    }

    const [days, hours, minutes, seconds] = getFormateTimer(timer)
    return (
        <>
            <div className="d-flex flex-row container">

                <h2 className="align-self-center fs-5">Flash Sales Live</h2>
                <ul className="timer">
                    <li>
                        <div>
                            <p>Day</p>
                            <h6>{days} <span className="px-1 text-danger">:</span></h6>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Hours</p>
                            <h6>{hours} <span className="px-1 text-danger">:</span></h6>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Minutes</p>
                            <h6>{minutes} <span className="px-1 text-danger">:</span></h6>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Seconds</p>
                            <h6>{seconds} </h6>
                        </div>
                    </li>
                </ul>

                <div className="fs-3 text-end flex-grow-1">
                    <BsArrowLeftCircleFill className="me-2 text-secondary text-opacity-25" />
                    <BsArrowRightCircleFill className=" text-secondary text-opacity-25" />

                </div>
            </div>

        </>
    )
}

export default Timer;