interface Image {
    id: number
}

export const Image = ({ id }: Image) => {
    return (
        <div>
            <img src={`../../../assets/${id}.jpg`} alt={`Feedback ${id}`} />
        </div>
    )
}