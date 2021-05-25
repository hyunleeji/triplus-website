import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchPage(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div>
            <Search placeholder="input search text"
            onChange={searchHandler}
            style={{ width: '35%'}} 
            value={SearchTerm}
            />
        </div>
    )
}

export default SearchPage
