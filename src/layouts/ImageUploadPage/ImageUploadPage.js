import React, { useState } from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Continent = [
    { key:1, value: "Europe"},
    { key:2, value: "Asia"},
    { key:3, value: "Oceania"},
    { key:4, value: "North America"},
    { key:5, value: "South America"},
    { key:6, value: "Africa"},
]

const Mood = [
    { key:1, value: "Modern"},
    { key:2, value: "Calm"},
    { key:3, value: "Traditional"},
    { key:4, value: "City"},
    { key:5, value: "Natural"},
]

function ImageUploadPage(props) {

    const [Region, setRegion] = useState("")
    const [Country, setCountry] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continents, setContinents] = useState("Europe")
    const [Moods, setMoods] = useState("Modern")
    const [Images, setImages] = useState([])

    const onDrop = (files) => {

        let forData = new FormData();
        
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        forData.append("file", files[0])

        Axios.post('/api/images/uploadfiles', forData, config)
            .then(response => {
                if(response.data.success){
                    console.log(response.data)

                    setImages([...Images, response.data.filePath, response.data.fileName ])
                
                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }

    const deletefiles = (image) => {

        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
    }


    const submitHandler = (e) => {
        e.preventDefault();

        if(!Region || !Country || !Description || !Price || !Continents || !Moods || !Images)
            return alert("모든 정보를 기입해 주십시오.")

        const body = {
            writer: props.user.userData._id,
            region: Region,
            country: Country,
            description : Description,
            continents : Continents,
            images : Images,
            mood : Moods,
            price : Price
        }

        Axios.post('/api/images', body)
            .then(response => {
                if(response.data.success) {
                    console.log('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                } else {
                    alert('업로드에 실패 했습니다.')
                }
            })
    }

    const regionChangeHandler = (e) => {
        setRegion(e.currentTarget.value)
    }

    const countryChangeHandler = (e) => {
        setCountry(e.currentTarget.value)
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.currentTarget.value)
    }

    const priceChangeHandler = (e) => {
        setPrice(e.currentTarget.value)
    }

    const continentsChangeHandler = (e) => {
        setContinents(e.currentTarget.value)
    }

    const moodChangeHandler = (e) => {
        setMoods(e.currentTarget.value)
    }


    //1 
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p> Upload Video</p>
            </div>

            <Form >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={8000000000}>
                        {({ getRootProps, getInputProps }) => (
                             <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', 
                             display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                             {...getRootProps()}
                            >
                             <input {...getInputProps()} />
                             <PlusCircleOutlined style={{ fontSize: '3rem', color: 'gray' }} />
                         </div>
                        )

                        }
                    </Dropzone>
                        <div style={{ display:'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
                            
                            
                            {Images.map((image, index) => (
                                <div key='index' onClick={deletefiles}>
                                    <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
                                    src={`http://localhost:5000/${image}`} />
                                </div>
                            ))}
                        </div>
                </div>

                <br />
                <br />
                <label>Region</label>
                <Input onChange={regionChangeHandler} value={Region}
                   
                />
                <br /><br />
                <label>Country</label>
                <Input onChange={countryChangeHandler} value={Country}
                   
                />
                <br /><br />
                <label>Description</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}
                    
                />
                <br /><br />
                <label>Price(원)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}
                   
                />
                <br /><br />        
                <select onChange={continentsChangeHandler}>
                    {Continent.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <select onChange={moodChangeHandler}>
                    {Mood.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size ="large" onClick={submitHandler} >
                    Submit
                </Button>
            </Form>
        </div>
    )
} 

export default ImageUploadPage
