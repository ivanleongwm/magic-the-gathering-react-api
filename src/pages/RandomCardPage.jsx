import NavBar from '../components/Navbar'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import initialCard from '../data/card'

function RandomCardPage() {
    const [card, setCard] = useState({});
    const [count, setCount] = useState(0);
    const [status,setStatus] = useState("idle");
    const {id} = useParams();
    
    const fetchCard = async () => {
        try {
            const response = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);
            const data = await response.json();
            console.log("data2",data)
            setCard(data.card)
            setStatus("Loaded")
        } catch (error) {
            setStatus("error")
            console.log(error)
        }  
    }

    useEffect(()=>{   
        fetchCard();
    },[count]);

    return (
        <>
            <NavBar />
            {id}
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>Fetch</button>
            <div>
                {status !== "Loaded" ? (status) : (
                    <img src={card?.imageUrl} alt="warrior" />
                )}
            </div>
            <div>
                {card?.name}
            </div>
        </>
    )
}

export default RandomCardPage