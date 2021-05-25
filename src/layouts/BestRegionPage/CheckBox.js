import React,{ useState } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse 


function CheckBox(props) {

    const [Checked, setChecked] = useState([])


const handleToggle = (value) => {

    const currentIndex = Checked.indexOf(value)
    const newChecked = [...Checked]

    if(currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    // console.log(Checked)
    console.log(currentIndex)
    console.log(value)
    // console.log(newChecked)
    setChecked(newChecked)
    props.handleFilters(newChecked)
}


const renderCheckbox = () => props.list && props.list.map((value, index) => (
    <React.Fragment key={index}>
        <Checkbox onChange={() => handleToggle(value.name)} checked={Checked.indexOf(value.name) === -1 ? false : true }/>
        <span>{value.name}</span>
    </React.Fragment>
))

    return (
        <div>
        <Collapse defaultActiveKey={['1']} style={{ width: '35%'}}>
            <Panel header="Continents" key="1">
                {renderCheckbox()}
            </Panel>
        </Collapse>  
        </div>
    )
}

export default CheckBox
