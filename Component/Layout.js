import Image from 'next/image'
import Link from 'next/link'
import {useState, useContext} from 'react'
import LayoutStyles from './Layout.module.css'
import  AppContext from '../Component/Context/AppContext/AppContext'





export default function Layout({children}) {

    const appContext = useContext(AppContext)
    const {firstRangeSelected, selectingRange,rangeSelected, setFirstRangeSelected, setSelectingRange, setRangeSelected} = appContext

const dt = new Date()
let date = dt.getFullYear()

const ChangingState = ()=> {
    if (!firstRangeSelected) {
        setFirstRangeSelected(true)
        setSelectingRange(true)
    }
    else if(selectingRange){
setRangeSelected(true)
// setRange(true)

setSelectingRange(false)
// seRange will be set when a range has been selected
    }
    else {
        setRangeSelected(false) 
        setSelectingRange(true)
        // setRange(false)
    }
}
    return (
        <section>
            <center>
                 {/* logo and header  */}
                    {/* depends on firstRangeSelected State */}

                <>
                    <Image 
                    src='/images/Mobile Quran.png'
                    
                    height={354}
                width={354}/>
                {
                firstRangeSelected?
                <div className={LayoutStyles.firstSelected}>
                <h1> MQI QURAN FAIR  {date}</h1>
                    <h3>HIFZ CONTEST</h3>
                </div>
                : 
                <div className={LayoutStyles.firstUnselected}>
                    <h3>HIFZ CONTEST</h3>
                </div>
                
                }
                   
                </>

                <div>
                {children}
                </div>

                <div>

                {/* values depends on 3 state */}
                  <button onClick={ChangingState} className={LayoutStyles.btnStyle}>
                  {
                      !firstRangeSelected?
                      "Select Range":
                      selectingRange?
                      "Confirm":
                      rangeSelected?
                      "Change Range":
                      "Select Range"
                  }
                  </button>
                </div>
            </center>
           
        </section>
    )
}
