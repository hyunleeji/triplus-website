import React, { useState , useEffect} from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {
       
        if(props.list.images && props.list.images.length > 0) {
            let imagearr = []

            props.list.images.map(item => {
                imagearr.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(imagearr)
        }

    }, [props.list])
    
    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
