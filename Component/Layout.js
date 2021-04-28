import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import LayoutStyles from './Layout.module.css'
export default function Layout({children}) {
    //this will be change one time
const [firstRangeSelected, setFirstRangeSelected] = useState(false)

const [selectingRange, setSelectingRange] = useState(false)
const [RangeSelected, setRangeSelected] = useState(false)
const [Range, setRange] = useState(true)
const dt = new Date()
let date = dt.getFullYear()

const ChangingState = ()=> {
    if (!firstRangeSelected) {
        setFirstRangeSelected(true)
        setSelectingRange(true)
    }
    else if(selectingRange&& Range){
setRangeSelected(true)
setSelectingRange(false)
    }
    else {
        setRangeSelected(false) 
        setSelectingRange(true)
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
                      RangeSelected?
                      "Change Range":
                      "Select Range"
                  }
                  </button>
                </div>
            </center>
           
        </section>
    )
}
