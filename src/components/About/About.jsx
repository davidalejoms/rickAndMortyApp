import React from "react"
import profilePic from "./profilePic.png"
function AddRandom(props) {
  return (
    <div className="pt-1
    ">
      <div
        className="text-white text-left mt-10 w-2/3 p-8 mx-auto flex flex-row items-center flex-wrap-reverse"
        id="ProfileWrapper"
      >
        <div id="profileInfo" className="bg-slate-900 bg-opacity-90  min-w-[350px]   shadow-green-300 shadow-2xl  rounded-l-2xl p-8 my-12">
          <h1 className="text-4xl font-semibold"> David Alejandro Mejia </h1>
          <hr className="border-1 mt-1 mr-10 shadow shadow-green-300 border-green-300 rounded" />
          <br />
          <h2 className="mt-3">
            <i class="fa-solid fa-code mr-4 text-xl "></i>Desarrollador de Software
          </h2>
          <h2 className="mt-3">
            <i class="fa-solid fa-flag mr-4 text-xl "></i>Colombiano
          </h2>
          <h2 className="mt-3">
            <i class="fa-solid fa-share-nodes mr-4 text-xl "></i>NodeJS - Express for Backend
          </h2>
          <h2 className="mt-3">
            <i class="fa-solid fa-atom mr-4 text-xl "></i>React - Next - tailwind for Frontend
          </h2>
          <h2 className="mt-3">
            <i class="fa-solid fa-code mr-4 text-xl "></i>Desarrollador de Software
          </h2>
          <div className="my-6 text-center rounded-full px-6 py-2 bg-slate-400 text-slate-900 hover:bg-black hover:text-slate-50">
            <a href="https://api.whatsapp.com/send?phone=573115228664&text=Hola,me%20Interesa%20trabajar%20Contigo%20David" target="_blank">
              <i class="fa-brands fa-whatsapp mr-4 text-xl "></i>Contacto
            </a>
          </div>

          <div className="flex items-center  justify-around    mb-3 " id="networkContainer">
            <a href="https://www.facebook.com/davidalejoms" target="_blank">
              <i className="text-5xl text-slate-50 fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/davidalejoms/" target="_blank">
              <i className="text-5xl text-slate-50 fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/davidalejoms" target="_blank">
              <i className="text-5xl text-slate-50 fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC5S3jOutLdbAeDTT67XWB4g " target="_blank">
              <i className="text-5xl text-slate-50 fa-brands fa-youtube"></i>
            </a>
            <a href="https://github.com/davidalejoms" target="_blank">
              <i className="text-5xl text-slate-50 fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div id="pictureProfile" className="w-2/5 min-w-[350px]  bg-green-400 bg-opacity-70 rounded-r-3xl">
          <img src={profilePic} alt="David Mejia" className="" />
        </div>
      </div>
    </div>
  )
}

export default AddRandom
