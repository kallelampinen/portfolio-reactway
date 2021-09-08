import React from 'react'

function NextPrevButton({titleText, handlePage}) {

    
    return (
  
        <button className="nextPrev" onClick={handlePage}>{titleText}</button>
        
    )
}

export default NextPrevButton
