import React from 'react';
import './DummyTest.css'

const DummyTest = () => {

  // Relevant data for this project
  const data = [
    {
      id: 1,
      title: "Title 1",
      about: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
      id: 2,
      title: "Title 1",
      about: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
      id: 3,
      title: "Title 1",
      about: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
      id: 4,
      title: "Title 1",
      about: "Lorem ipsum dolor sit amet, consectetur"
    }
  ]

  const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor sit ame,consectetur ";


  // Returning the JSX

  return (
    <div className="container">

      {/* Header section */}

      <div className='header'>
        <p className='heading'>Find the project you love</p>
        <p className='description'>{longString}</p>
        <button>
          Explore
        </button>
      </div>

      {/* Hero section with description */}
      <div className='desc'>
        <div className='content'>
          <div className='title-content'>
            <div className='title'>
              {data.map((item) =>
                <div key={item.id} className='item-container'>
                  <div>
                    <p className='item-title'>
                      {item.title}
                    </p>
                  </div>
                  <div className='horizontal-line'></div>
                  <div>
                    <p className='item-about'>{item.about}</p>
                  </div>
                </div>)
              }
            </div>
          </div>

          <img src='image1.jpg' alt='' height='526px' width='1322px' className='image1' />
        </div>
      </div>

      {/* All Images carousel */}

      <div className='image-container'>
        <div className='images'> 
          <div className='image'>
            <img src='image2.jpg' alt='' height='344px' />
            <img src='image2.jpg' alt='' height='594px' />
          </div>

          <div className='image'>
            <img src='image3.jpg' alt='' height='403px' />
            <img src='image3.jpg' alt='' height='344px' />
            <img src='image4.jpg' alt='' height='156px' />
          </div>

          <div className='image'>
            <img src='image4.jpg' alt='' height='344px' />
            <img src='image4.jpg' alt='' height='594px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyTest;
