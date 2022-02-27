import Image from './Image'
import {useNavigate} from 'react-router-dom'

const MakeRow = ({element, index}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(element.multiverseid)
        navigate(`/card/${element.multiverseid}`)
    }

    return (<tr key={index}>
        <td key={index}>
            <Image imageUrl={element.imageUrl} index={index}/>
        </td>
        <td><button onClick={handleClick}>{element.name}</button></td>
     </tr>)
}
export default MakeRow;