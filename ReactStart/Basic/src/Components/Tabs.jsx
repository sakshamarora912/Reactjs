import React from 'react'

const Tabs = ({buttonTitle,button,children}) => {
    const ButtonTitle=buttonTitle
    return (
        <>
            <ButtonTitle>{button}</ButtonTitle>
            {children}
        </>
    )
}

export default Tabs