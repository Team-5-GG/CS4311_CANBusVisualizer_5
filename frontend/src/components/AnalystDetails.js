const AnalystDetails = ({ analyst }) => {
    return (
        <div className="analyst-details">
            <h4>{analyst.firstName}</h4>
            <p><strong>Username: </strong>{analyst.userName}</p>
            <p><strong>Email: </strong>{analyst.email}</p>
        </div>
    )
}

export default AnalystDetails