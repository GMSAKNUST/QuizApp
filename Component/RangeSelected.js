import {useContext} from 'react'
import AppContext from '../Component/Context/AppContext/AppContext'
import Styles from '../styles/RangeSelected.module.css'


export default function RangeSelected() {
    const appContext = useContext(AppContext)
    const {generatedRange} = appContext
// console.log(generatedRange[0])

console.log(Object.keys(generatedRange))
const change = (e)=> {
    console.log(e.target.value)
}

// console.log(Object.keys(generatedRange["1"]))
    return (
        <div>
            {/* modal */}
         <center className={Styles.rangeContainer}>

        
{Object.keys(generatedRange).map(res =>
<span key={res} onClick={change}>
    <input type='radio'  name="RangeSelected" id={`Range${res}`}  keys={res} value={res}/>
    <label  key={res}>{res}</label>

    </span>
    
    )}
     </center>
         
      


        </div>
    )
}




// export async function getStaticProps() {
    
//     return {
//       props: {
// generatedRange:"love",
//       }, // will be passed to the page component as props
//     }
//   }


