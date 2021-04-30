

import {useContext} from 'react'
import Layout from '../Component/Layout'
import AppContext from '../Component/Context/AppContext/AppContext'
import SelectingRange from '../Component/SelectingRange'
import RangeSelected from '../Component/RangeSelected'
import Styles from '../styles/Contest.module.css'



export default function contest() {
    const appContext = useContext(AppContext)
    const {firstRangeSelected, selectingRange,rangeSelected, setFirstRangeSelected, setSelectingRange, setRangeSelected, generatedRange} = appContext

    if (!firstRangeSelected) {
       return( <Layout>
            <div className={Styles.noRange}>
               <p> No surah range selected</p>
            </div>
        </Layout>
       )
    }
    else if(selectingRange){
        return (
<Layout>
    <SelectingRange/>
</Layout>)

// seRange will be set when a range has been selected
    }
    else {
        return (
        <Layout>
            <RangeSelected />
        </Layout>
        )
        // setRange(false)
    }
}
