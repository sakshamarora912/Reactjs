import React from 'react'

const Tabs = ({button,children,buttonContainer}) => {
    const ButtonContainer=buttonContainer;
    return (
    <>
    <ButtonContainer>{button}</ButtonContainer>
    {children}
    </>
  )
}

export default Tabs