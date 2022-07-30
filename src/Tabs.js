import { useState } from 'react'
import './tabs.css'

const Tabs = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="Tabs">
            <div className="TabsList">
                <div className={`TabHead ${index===0? "active": 'null'}`} onClick={() => setIndex(0)}>Tab1</div>
                <div className={`TabHead ${index===1? "active": 'null'}`} onClick={() => setIndex(1)}>Tab2</div>
                <div className={`TabHead ${index===2? "active": 'null'}`} onClick={() => setIndex(2)}>Tab2</div>
            </div>
            <div className="TabContent" hidden={index !== 0}>
                This is First tab content
            </div>
            <div className="TabContent" hidden={index !== 1}>
            This is Second tab content
            </div>
            <div className="TabContent" hidden={index !== 2}>
            This is Third tab content
            </div>
            
        </div>
    )
}

export default Tabs