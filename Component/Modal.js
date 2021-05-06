import {useContext, useState} from 'react'
import AppContext from '../Component/Context/AppContext/AppContext'
import Styles from '../styles/Modal.module.css'
import Image from 'next/image'


export default function Modal() {
    const appContext = useContext(AppContext)
    const {selectedPages, showModal, setShowModal} = appContext
    const [index, setIndex] = useState(0)
const [current, setCurrent] = useState(selectedPages[index])

const DontShowModal = (e)=> {setShowModal(false)}


  async function changeMe(e){
    let len = selectedPages.length;
   console.log(len)
    setIndex(index+1)

    if(index <3){
      await  setCurrent(selectedPages[index])
    } else {
        // setIndex(0)
        setShowModal(false)
    }
    

}
    return (
        <div className={Styles.ModalMain}>
           <div className={Styles.backdrop} onClick={DontShowModal}>
           </div>
               
               <center>
                   <div className={Styles.myImgContainer}>
                 <img  src={current} alt=""/>
                 
                   </div>
                   <button onClick={changeMe}>Next</button>
               </center>
        </div>
    )
}


