import React from 'react'
import styles from "./Homepage.module.css"
import {CiSearch} from "react-icons/ci"
import {CiBellOn} from "react-icons/ci"
import Details from '../Details/Details';
import {AiOutlineLike} from 'react-icons/ai'
import totalr from "../Home/totalr.PNG"
import totalsec from "../Home/totalsec.PNG"
import totaluser from "../Home/totaluser.PNG"
const Homepage = () => {
  return (
    <>
      <div className={styles.mainhead}>
      <Details/>
      
      <div className={styles.hmain}>
      <div className={styles.hcontain}>
      <div>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.navdivs}>

        <div className={styles.searchbox}>
      <input type="text" placeholder="Search..." />
      <CiSearch className={styles.cisearch}/>

    </div>


        <div className={styles.divcibell}>
        <CiBellOn className={styles.cibell}/>

        </div>
        <div className={styles.imgnav}>
        <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'/>

        </div>
        
        </div>
      </div>
      
    
      <div className={styles.total}>
        <div className={styles.totalr}>
          <div className={styles.paradiv}>
          <p>Total Revenues</p>
          <h2>$2,129,430</h2>
          </div>

          <div>
            <img src={totalr}/>
          </div>
        </div>

        <div className={styles.totalt}>
          <div className={styles.paradiv}>
          <p>Total Transactions</p>
          <h2>1,520</h2>
          </div>

          <div>    
                  <img src={totalsec}/>
          </div>
        </div>

        <div className={styles.totallikes}>
          <div className={styles.paradiv}>
          <p>Total Likes</p>
          <h3>9,721</h3>
          </div>

          <div>
            <AiOutlineLike className={styles.ailikes}/>
          </div>
        </div>

        <div className={styles.totalu}>
          <div className={styles.paradiv}>
          <p>Total Users</p>
          <h2>892</h2>
          </div>

          <div>
          <img src={totaluser}/>

          </div>
        </div>
  
</div>
      <div className={styles.tproductcontain}>
      <div>

  <div className={styles.tpdiv}>
  <div>
    <h2>Top products</h2>
  </div>
  <div> 
  <p>May-June 2021</p>
  </div>


  </div>
  <div className={styles.mainbasic}>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/3589/3589863.png"/>
    </div>
    <div>
    <div>
      <h2>Basic Tees</h2>
      <p>55%</p>
    </div>

    <div>
      <h2>Custom Short Pants</h2>
      <p>31%</p>
    </div>    <div>
      <h2>Super Hoodies</h2>
      <p>14%</p>
    </div>
    </div>
  </div>
  </div>

  

  <div className={styles.charts}>
  
  <div>
    <h2>Today's schedule</h2>

    <div>
      <p>Meeting with suppliers from Kuta Bali</p>
      <p>14.00-15.00</p>
      <p>at Sunset Road, Kuta, Bali</p>
    </div>
    <div>
      <p>Check operation at Gita Fatctory 1</p>
      <p>18.00-20.00</p>
      <p>at Central Jakarta</p>
    </div>
  </div>
    
    <div>
      <p>See All</p>
    </div>
  </div>
</div>
      </div>






      </div>
    </>
  )
}

export default Homepage






