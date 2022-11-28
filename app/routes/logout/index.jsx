import { useEffect } from "react";

import { SERVER_DNS } from "~/utils/constants";
import Cookies from 'js-cookie'
import { getAccessToken, getRefreshToken } from "~/session"
// import { redirect } from "react-router-dom";
import { redirect } from "@remix-run/node"; // or cloudflare/deno

import { useNavigate } from 'react-router-dom';
const validate = (value) => {
  return value != ''
}

// export async function loader()
// {
//   //let access = await getAccessToken()
//   // let response = await fetch(`${SERVER_DNS}/accounts/logout`,
//   // {
//   //   method:'POST',
//   //   mode:'cors',
//   //   body:{'access':access,'refresh':getRefreshToken()},
//   //   headers: {
//   //     'Authorization': `Bearer ${access}`,
//   //     'Content-Type': 'application/json',
//   //   }
//   // }).then((res)=>{
//   //   Cookies.remove('access_token')
//   //   Cookies.remove('refresh_token')
//   // }
//   // )
//   // .catch((error)=>{
//   // })

//   //return redirect("/");
// }




export default function Index() {
useEffect(async ()=>{
    await logOut()
    .then(()=>{
      console.log('logged out')
    })
    .catch((e)=>{
      console.log(e)
    })
    window.location.href = "/"
},[])

  async function logOut(){
    let access = await getAccessToken()
    let response = fetch(`${SERVER_DNS}/accounts/logout`,
          {
            method:'POST',
            mode:'cors',
            body:{'access':access,'refresh':getRefreshToken()},
            headers: {
              'Authorization': `Bearer ${access}`,
              'Content-Type': 'application/json',
            }
          }).then((res)=>{
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
          }
          )
          .catch((error)=>{
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
          })
  }

  return (
    <div className="logout-form">
    </div >
  );
}
