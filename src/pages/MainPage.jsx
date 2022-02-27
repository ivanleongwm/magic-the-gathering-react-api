import './MainPage.css'
import RandomCardPage from './RandomCardPage'
import NavBar from '../components/Navbar'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import MakeRow from './CardRow'
import SearchForm from './SearchForm'

const startURL = 'https://api.magicthegathering.io/v1/cards'

function MainPage() {
    const [cards,setCards] = useState([]);
    const [status,setStatus] = useState("idle");
    const [url,setUrl] = useState(startURL)
    const [searchParams] = useSearchParams({});
    console.log("search params rarity",searchParams.get("rarity"))
    // How to get the info from the searchForm
    // 
    const handleClick = () => {
        const searchUrl = 'https://api.magicthegathering.io/v1/cards?rarity=Common'
        setUrl(searchUrl)
        console.log('hello')
    }

    const fetchCard = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("data2",data)
            setCards(data.cards)
            setStatus("Loaded")
        } catch (error) {
            setStatus("error")
            console.log(error)
        }  
    }

    useEffect(()=>{   
        fetchCard();
    },[url]); //Trigger the state change

    return (
        <>
            <NavBar/>
            <SearchForm setUrl={setUrl}/>
            <div>Search either "rare", "common" or "mythic", or click card name button.</div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        status !== 'Loaded' ?
                        (<tr>
                            <td>"Loading"</td>
                        </tr>) :
                        (
                            cards.map((element, index) => <MakeRow element={element} index={index} />)
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
export default MainPage;