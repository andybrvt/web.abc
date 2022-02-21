/*
  This will be the core of the website building
  Here will be all the things that go on from building
  managing, and deploying etc

  How this iwll work (do this later)
  It will take in a hash from the url, hash out to get the
  wallet id, and the build id, once you got that you will then retrive
  the info from an api.

  You have to do a saving function on the information quite often

  -unhash info
  -load information
  -save intervals each type you add stuff
  -check ownership
  -upload to web



*/


import React, {useState, useEffect} from 'react';
import { Editor } from './Editor/Editor';


export const MainBuildContainer = (props) => {



  return(
    <div>
      <Editor {...props}/>

    </div>
  )

}
