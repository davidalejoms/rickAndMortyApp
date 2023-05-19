import React from "react"
export default function NotFound() {
  return (
    <>
      <div className="grid h-screen place-items-center text-white text-  bg-green-700">
        
        <div className="">
        <h1 className="text-5xl leading-loose font-black">
          {" "}
          lo que sea que busques no esta aqui,
          <br /> busca bien..
        </h1>
        <img className="mx-auto mb-[20%]"
          src={require("./not_found.png")}
          alt=""
        />
        </div>
      </div>
    </>
  )
}
