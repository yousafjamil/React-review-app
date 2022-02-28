import React, { useState } from 'react'
import palace from '../data'

function Home() {
  const [index, setIndex] = useState(0);
  const { name, id, age, image } = palace[index];


  const checkindex = (num) => {
    if (num > palace.length - 1) {
      return 0
    } else if (num < 0) {
      return palace.length - 1
    }
    return num
  }

  // handle prev page
  const handlePrev = () => {
    setIndex(checkindex(index - 1))
  }
  // handle next fun
  const nextHandle = () => {
    setIndex((next) => {
      let newIndex = next + 1;
      return checkindex(newIndex)
    })
  }



  return (
    <div className='container py-2 '>
      <div className='row'>
        <div className='col-sm-8 col-md-8 col-lg-10'>
          <h1>Review our Team Members</h1>
          <div className="card " >
            <img className=" rounded " src={image} alt="Card image cap" style={{ height: '400px' }} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5><span>{age}</span>
              <p className="card-text"> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value</p>
              <div>
                <button className='btn btn-info w-25 m-3' onClick={handlePrev}>Prev</button>
                <button className='btn btn-success w-25' onClick={nextHandle}>Next</button>
              </div>

            </div>
          </div>

        </div>
      </div>
  
    </div>
  )
}

export default Home