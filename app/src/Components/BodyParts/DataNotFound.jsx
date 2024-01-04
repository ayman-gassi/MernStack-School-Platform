import DataF from '../../Assets/img/NoDataFound.png'
export default function DataNotFound (props){
    return(
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <img  className='w-20' src={DataF} />
                <div className=" px-2 text-sm rounded ">
                    {props.title}
                </div>
            </div>
        </>
    )
}