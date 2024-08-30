import { Oval } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
        <Oval className="flex justify-center items-center"
            visible={true}
            height="80"
            width="80"
            color="#FDCF0B"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            secondaryColor="#000"
        />
    </div>
  )
}

export default Loader