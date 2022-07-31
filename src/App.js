// import React, { Component } from 'react'
import React from 'react'
import Nav from './components/Nav/Nav'
import AllCards from './components/AllCards/AllCards'
import { BrowserView, MobileView } from 'react-device-detect';
//Before Importing BrowserView, MobileView, we have to Install react-device-detect package
// We can do it by npm install react-device-detect --save

// All Components which are HC1, HC3, HC5, HC6, HC9 are written using Class Components
// Only this App.js is written in Functional Component 
// because Functional Component have Easy Implementation of BrowserView and MobileView

function App() {
  return (<>
    <Nav />

    {/* '<BrowserView>' Means View of Application you will get from PC or Laptop Browsers */}
    <BrowserView>
      <h3 style={{ textAlign: "center" }}>
        Hey Fam! <br />
        This website is currently available for mobile devices only.
        Please switch to a mobile device : ) <br />
        [ And For Web Developers, just simulate to inspect element to Mobile View and Reload the page ^=^ ]
      </h3>
    </BrowserView>

    {/* '<MobileView>' Means View of Application you will get from Mobiles Only */}
    <MobileView>
      <div>
        <div className="container">
          <AllCards />

        </div>
      </div>
    </MobileView>
  </>
  )
} //Here small error is coming because of '<> and </>'

export default App
