const Button = ({name}) => {
    return(
      <div className='my-2'>
          <button className="bg-red-400 text-white px-5 py-3 rounded-full">{name}</button>
      </div>
    );
}

export default  Button;