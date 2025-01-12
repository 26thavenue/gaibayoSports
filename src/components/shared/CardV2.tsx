

interface ICardV2{
    icon :any
    header:string
    actionWord:string
    description:string
}

const CardV2 = ({icon, header,actionWord,description}:ICardV2) => {
  return (
    <div className="shadow-sm rounded-md p-6 border-[1px] border-gray-200 max-w-64 hover:shadow-md transition-shadow cursor-pointer">
       <p className=" my-8 "> {icon}</p> 
        <p className=" mb-2 font-bold ">{actionWord}</p>
        <p className="text-gray-400 mb-2 text-[14px]">{header}</p>
        
        <p className="underline text-[14px]">{description}</p>
    </div>
  )
}

export default CardV2