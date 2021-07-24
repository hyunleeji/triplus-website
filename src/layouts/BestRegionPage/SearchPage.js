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
        <div className="searching">
            <Search placeholder="input search text"
            onChange={searchHandler}
            value={SearchTerm}
            />
        </div>
    )
}

export default SearchPage
