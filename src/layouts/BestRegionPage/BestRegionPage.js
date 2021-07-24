import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import Fade from "react-reveal/Fade";
import SearchPage from './SearchPage';
import CheckBox from './CheckBox';
import MoodCheckBox from './MoodCheckBox';
import RadioBox from './RadioBox'
import { continents, price, mood } from './Data'

function BestRegionPage() {
    const [BestImg, setBestImg] = useState([])
    const [Filters, setFilters] = useState({
        continents: [],
        price: [],
        mood : []
    })
    // const [Skip, setSkip] = useState(0)
    const [SearchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        
        getProducts()

    }, [])

    const getProducts = (body) => {

    Axios.post('/api/images/viewimages', body)
    .then(response => {
        if(response.data.success) {
            setBestImg(response.data.viewimg)
        } else {
            alert('상품을 가져오는데 실패했습니다.')
        }
    })
    
    console.log(BestImg)
    console.log(body)
    }

    const BestRegionLists = BestImg.map((value, index) => {

        return <React.Fragment>
                    <li style={{marginRight: '1rem'}}key='index'>
                    <div className='ranking'>
                        <span className='first'>{index + 1}st</span>
                    </div>
                        <div className='thumbnail'>
                            <div className='slideimg'>
                                <a href={`/images/${value._id}`}>
                                    <img style={{ width:'350px', height:'350px'}}src={`http://localhost:5000/${value.images[0]}`} />
                                </a>
                            </div>
                        </div>
                        <div className='description'>
                            <div className='info'>
                                <h4 style={{ textAlign: 'center' }}>{value.continents}</h4>
                                <h2>{value.region}</h2>
                                <strong>{value.country}</strong>
                                <p>~{value.price}won</p>
                            </div>
                        </div>
                    </li>
        </React.Fragment>
    })

    
    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if(data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        return array;
    }


    const showFilteredResults = (filters) => {
        
        let body = {
            filters: filters
        }

        console.log(filters)
        console.log(body)
        getProducts(body)
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if(category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }

        console.log(Filters)
        console.log(filters)
        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updataSearchTerm = (newSearchTerm) => {

        let body = {
            filters: Filters,
            searchTerm: newSearchTerm
        }
        setSearchTerm(newSearchTerm)
        getProducts(body)
    }


    
    return (
        <div>
            <Fade bottom>
            <div style={{ margin:'0 auto'}}className='section' id='bestregion'>
            <div className='bestregion'>
                <div style={{ height: '400px'}} className='regionimg-bg'>
                <div style={{ height: '400px'}} className='regionimg'>
                <p style={{ position : 'absolute', fontWeight: '600'}} className='heading'>Best Region</p>
                <p style={{ position : 'absolute', fontWeight: '300', fontSize: '1rem', bottom: '15px'}} className='heading'>지금 가장 많은 분들이 찾고있는 여행지입니다</p>
                </div>
                </div>
                <div className='searchBox'>
                <SearchPage refreshFunction={updataSearchTerm}/>
                <CheckBox list={continents} handleFilters={filters => handleFilters(filters, "continents")}/><br/>
                <RadioBox list={price} handleFilters={filters => handleFilters(filters, "price")} /><br/>
                <MoodCheckBox list={mood} handleFilters={filters => handleFilters(filters, "mood")}/>
                </div>
                <ul className='bestwrapper'>
                {BestRegionLists}
                </ul>
            </div>
            </div>
            </Fade>
        </div>
    )
}

export default BestRegionPage
