export default function AlertBar(props) {
  return (
    <div className={props.warning !== "" ? "bg-red-50 p-4 " : "hidden"} id="alertBar">
      <div className="flex flex-col justify-center ">
        <div className="flex flex-row justify-center  ">
          <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
          <h3 className="text-sm font-medium text-red-800 text-left ml-3 ">Errores en tu busqueda!</h3>
        </div>

        <div className=" text-sm text-red-700">
          <li className="text-center">{props.warning}</li>
        </div>
      </div>
      <hr className="border-4 shadow-xl shadow-red-600 border-b-red-700 float-right animate-alertLoader" />
    </div>
  )
}
