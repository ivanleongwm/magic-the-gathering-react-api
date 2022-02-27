
const Image = (props) => {
    return (
            props.imageUrl ?
            <img src={props.imageUrl} alt={props.name} key={props.index}/>
            : "No Image"
    )
}
export default Image;