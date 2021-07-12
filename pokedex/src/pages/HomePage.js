import React from 'react'
import styled from 'styled-components'
import axios from 'axios' 
import banner from '../img/banner.jpeg'

const Banner = styled.div`
    
`

const BannerImg = styled.img`
    width: 100vw;
    height: 500px;
`

export const HomePage = () => {
    return (
        <div>
            <Banner>
                <BannerImg src={banner} />;
            </Banner>
        </div>
    )
}