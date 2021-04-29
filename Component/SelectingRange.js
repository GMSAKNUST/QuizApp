import {useContext, useState, useEffect} from 'react'
import AppContext  from '../Component/Context/AppContext/AppContext'
import Styles from '../styles/SelectingRange.module.css'


export default function SelectingRange() {

    const appContext = useContext(AppContext)
    const {allSurahs , setRangeSelected, setSelectingRange, selectingRange , rangeSelected} = appContext
    const [validate, setValidate] = useState()
const [Startval, setStartVal] = useState()
const [Endval, setEndval] = useState()




useEffect(() => {

     if( (Startval != undefined && Startval != 'focused' )&& (Endval != undefined && Endval !='focused2')){
        setRangeSelected(true)
        // setSelectingRange(false)
        // console.log("selected")

    }
    else {
        // console.log("not")
        setRangeSelected(false)
        // setSelectingRange(true)
        setValidate("Please pick a range")
        setTimeout(() => {
            setValidate(undefined)
        }, 3000);
    }
  
}, [Startval, Endval])

const myRange = (e)=> {
    // console.log(val)
    // console.log(e.target.value)
    // console.log(selectingRange)

    let myv = e.target.value;
   
    // console.log(val)

    if(e.target.name=="StartRange"){
        setStartVal(myv)

    }
    else{
        setEndval(myv)


    }


   
}

    return (
        <div className={Styles.main}>
            <h1>Select Surah Range</h1>
            {/* selecting Range */}
            {/* {allSurahs} */}
            <center>
                <div>
<select name="StartRange" id="StartRange" value={Startval} onChange={myRange} required>
<option value='focused'  >Select Start Range</option>

{allSurahs.map(surah => 
    <option value={surah} key={surah}>{surah}</option>
    )}

</select>
                </div>
                <div>
                <select name="StopRange" value={Endval}  onChange={myRange} id="StopRange">
<option value="focused2"  >Select Stop Range</option>

{allSurahs.map(surah => 
    <option value={surah} key={surah}>{surah}</option>
    )}

</select>
                </div>
            </center>
{!rangeSelected? <span>
    {validate}
</span>:
null
}
        </div>
    )
}
