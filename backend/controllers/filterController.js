import { traffic } from "../App"

export const getFilteredPackets = (req, res) => {
    try {
        const {time, name, size} = req.body

        let filteredPackets = traffic.filterPackets(time, name, size)

        res.status(200).json({filteredPackets})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    

    
}