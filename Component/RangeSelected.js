import {useState, useContext} from 'react'
import AppContext from '../Component/Context/AppContext/AppContext'
import Styles from '../styles/RangeSelected.module.css'
import Modal from './Modal'


export default function RangeSelected() {
    const appContext = useContext(AppContext)
    const {generatedRange, setSelectedPages, showModal, setShowModal} = appContext



 const change = (e)=> {
    // console.log(e.target.value)
   

    let pages = []
    Object.values(generatedRange[e.target.value]).forEach(ress=> 
        // console.log(ress.page_url)
        pages.push(ress.page_url)
        // setPages([...ress.page_url])
        )
    setSelectedPages(pages)
    
    setShowModal(true);

   
   

   

   
}

    return (
        <div>
            {showModal?
        <Modal/>:
        null    
        }


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


