import React from 'react'
import {CiSettings} from "react-icons/ci";
import {CiUser} from "react-icons/ci"
import styles from "./Details.module.css"
import dash from "../Details/Dashboard.PNG"
import schedules from "../Details/schedules.PNG"
import transaction from "../Details/Transaction.PNG"
const Details = () => {
  return (
    <>
      <div className={styles.maindetaildiv}>
        <div>
          <h1>Board</h1>
        </div>

        <div className={styles.dashed}>
          <div>
            <img src={dash}/>
          </div>
          <div className={styles.dashp}>
          <p>Dashboard</p>
          </div>
        </div>

        <div className={styles.trans}>
          <div className={styles.transimg}>
          <img src={transaction}/>
          </div>
          <div className={styles.transp}>
          <p>Transactions</p></div>
        </div>

        <div className={styles.sched}>
          <div>
          <img src={schedules}/>

          </div>
          <div className={styles.schedp}>
          <p>Schedules</p></div>
        </div>

        <div className={styles.users}>
          <div>
            <CiUser className={styles.ciuser}/>
          </div>
          <div className={styles.divuser}>
          <p>Users</p></div>
        </div>


        <div className={styles.setings} >
          <div>
            <CiSettings className={styles.ciSettings}/>
          </div>
          <div className={styles.setp}>
          <p>Settings</p>
          </div>
        </div>



        <div className={styles.helpdiv}>
          <div className={styles.helpdivp}>
            <p>Help</p>
          </div>
          <div className={styles.contactp}><p>Contact Us</p></div>
        </div>
      </div>
    </>
  )
}

export default Details
