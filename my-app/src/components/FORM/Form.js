import React from 'react'
import style from './form.module.css'

export default function FORM() {

    const  handleNameChange=(e)=>{
        console.log(e.target.value)
    }

    const  handleNameChange2=(e)=>{
        console.log(e.target.value)
    }

    const  handleNameChange3=(e)=>{
        console.log(e.target.value);

   
    }
    return (
        
        <div className={style.fomGroup}>
            <h1>Registration</h1>
            <form action=''>

                <div className={style.fomGroup}>
                    <label htmlFor='name'> Name: </label>
                    <input type="text" name="name" id="name" required onChange={handleNameChange} />
                </div>

                <div className={style.fomGroup}>
                    <label htmlFor='email'> Email: </label>
                    <input type="email" name="email" id="email" required  onChange={handleNameChange2}/>
                </div>

                <div className={style.fomGroup}>
                    <label htmlFor='password'> Password: </label>
                    <input type="password" name="password" id="password" required  onChange={handleNameChange3}/>
                </div>

                <div className={style.fomGroup}>
                    <button type='submit'>Register</button>
                </div>




            </form>



        </div>
    )
}
