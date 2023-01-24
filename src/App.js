import './App.css'
import React, { useState } from 'react'

const App = () => {
let bgren={border:'2px solid green'}
let bred={border:'2px solid red'}
let msggren={color:'green'}
let msgred={color:'red'}

let [firstname,setfirstname]=useState('')
let [fnborder,setfnborder]=useState({border:'2px solid black'})
let [fngmsg,setfngmsg]=useState('')
let [fnrmsg,setfnrmsg]=useState('')

let [lastname,setlastname]=useState('')
let [lnborder,setlnborder]=useState({border:'2px solid black'})
let [lngmsg,setlngmsg]=useState('')
let [lnrmsg,setlnrmsg]=useState('')

let[mail,setmail]=useState('')
let[mailborder,setmailborder]=useState({border:'2px solid black'})
let [mailgmsg,setmailgmsg]=useState('')
let [mailrmsg,setmailrmsg]=useState('')

let[pass,setpass]=useState('')
let[passborder,setpassborder]=useState({border:'2px solid black'})
let [passgmsg,setpassgmsg]=useState('')
let [passrmsg,setpassrmsg]=useState('')

let[cpass,setcpass]=useState('')
let[cpassborder,setcpassborder]=useState({border:'2px solid black'})
let [cpassgmsg,setcpassgmsg]=useState('')
let [cpassrmsg,setcpassrmsg]=useState('')


  function handlechange1(e){
    setfirstname(e.target.value);
  }
  function handlechange2(e){
    setlastname(e.target.value);
  }
  function handlechange3(e){
    setmail(e.target.value);
  }
  function handlechange4(e){
    setpass(e.target.value);
  }
  function handlechange5(e){
    setcpass(e.target.value);
  }



function start(e){
  e.preventDefault()
  let a= /^[a-zA-Z]+$/;
  if(firstname ==""){
    setfnborder(bred)
    setfnrmsg("Can't be empty")
  }
  else if(!a.test(firstname)){
    setfnborder(bred)
    setfnrmsg("Can't be alphabets")
  }
  else{
    setfnborder(bgren)
    setfngmsg('valid')
  }
// ------
  let b= /^[a-zA-Z]+$/;
  // 
  if(lastname==""){
    setlnborder(bred)
    setlnrmsg("Can't be empty")
  }
  else if(!b.test(lastname)){
    setlnborder(bred)
    setlnrmsg("Can't be alphabets")
  }
 
  else{
    setlnborder(bgren)
    setlngmsg("valid")
  }
  let c=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  // 
  if(mail==""){
    setmailborder(bred)
    setmailrmsg("Can't be empty")
  }
  else if(!c.test(mail)){
    setmailborder(bred)
    setmailrmsg("Enter the valid input")
  }
 
  else{
    setmailborder(bgren)
    setmailgmsg("valid")
  }
  let rule = /^[A-Za-z]\w{7,14}$/;
  if(pass==""){
    setpassborder(bred)
    setpassrmsg("Can't be empty")
  }
  else if(!rule.test(pass)){
    setpassborder(bred)
    setpassrmsg("Enter omly alphabets")
  }
 
  else{
    setpassborder(bgren)
    setpassgmsg("valid")
  }

  if(cpass==""){
    setcpassborder(bred)
    setcpassrmsg("Can't be empty")
  }
  else if(cpass===pass){
    setcpassborder(bgren)
    setcpassgmsg("valid")
  }
 
  else{
  
    setcpassborder(bred)
    setcpassrmsg("Both are not same")
  }
}


  return (

     <>
        <form className='block' onSubmit={start}>
          <h1 className=''>Create Account</h1>
          <div className='form-contrl m1'>
          <label>First Name</label>
          <input
          placeholder='FirstName'
          type='text'
          onChange={handlechange1}
          value={firstname}
          style={fnborder}

          >
          </input>
          <p style={msgred}>{fnrmsg}</p> <p style={msggren} className="m11">{fngmsg}</p>
          </div>


<div className='form-contrl m2'>
          <label>Last Name</label>
          <input
          placeholder='LastName'
          type='text'
          onChange={handlechange2}
          value={lastname}
          style={lnborder}



          >
          </input>
          <p style={msgred}>{lnrmsg}</p> <p style={msggren} className="m22">{lngmsg}</p>
          </div>



          <div className='form-contrl m3'>
          <label>Email </label>
          <input
          placeholder='EmailAddress'
          // type='email'
          onChange={handlechange3}
          value={mail}
          style={mailborder}


          >
          </input>
          <p style={msgred}>{mailrmsg}</p> <p style={msggren} className='m33'>{mailgmsg}</p>
          </div>



          <div className='form-contrl m4'>
          <label>Password</label>
          <input
          placeholder='Password'
          onChange={handlechange4}
          value={pass}
          style={passborder}
          type='password'

          >
          </input>
          <p style={msgred}>{passrmsg}</p> <p style={msggren} className='m44'>{passgmsg}</p>
          </div>



          <div className='form-contrl m5'>
          <label className='ml'>Confirm Password</label>
          <input
          placeholder='ConfirmPassword'
          onChange={handlechange5}
          value={cpass}
          style={cpassborder}
          type='password'
          >
          </input>
          <p style={msgred}>{cpassrmsg}</p> <p style={msggren} className='m55'>{cpassgmsg}</p>

          </div>


          <div >
            <button className='margindown'>Submit</button>
          </div>
<div >
          <p className='bottom'>already had an account<a href='#'>login</a></p>
          </div>
        </form>
        </>
    

      )
}

export default App
