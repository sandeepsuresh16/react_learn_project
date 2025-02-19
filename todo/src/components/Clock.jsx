import { useState, useEffect } from "react"

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])
    return (
        <div>
            <h1>{currentTime}</h1>
        </div>

    )
}