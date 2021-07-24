import React,{ useState } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse 


function MoodCheckBox(props) {

    const [MoodChecked, setMoodChecked] = useState([])


const handleToggle = (value) => {

    const currentIndex = MoodChecked.indexOf(value)
    const newChecked = [...MoodChecked]

    if(currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setMoodChecked(newChecked)
    props.handleFilters(newChecked)
}


const renderCheckbox = () => props.list && props.list.map((value, index) => (
    <React.Fragment key={index}>
        <Checkbox onChange={() => handleToggle(value.name)} checked={MoodChecked.indexOf(value.name) === -1 ? false : true }/>
        <span>{value.name}</span>
    </React.Fragment>
))

    return (
        <div>
        <Collapse defaultActiveKey={['1']} className="moodCheck">
            <Panel header="Mood" key="1">
                {renderCheckbox()}
            </Panel>
        </Collapse>  
        </div>
    )
}

export default MoodCheckBox


