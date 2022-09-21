import { useEffect, useState } from "react"

// components
import AnalystDetails from "../components/AnalystDetails"

const Home = () => {
    const [analysts, setAnalysts] = useState(null)

    useEffect(() => {
        const fetchAnalysts = async () => {
            const response = await fetch("/api/analysts")
            const json = await response.json()

            if (response.ok) {
                setAnalysts(json)
            }
        }

        fetchAnalysts() 
    }, [])

    return (
        <div className="home">
            <div className="analysts">
                {analysts && analysts.map((analyst) => (               
                    <AnalystDetails key = {analyst._id} analyst={analyst}/>     
                ))}
            </div>
        </div>
    )
}

export default Home