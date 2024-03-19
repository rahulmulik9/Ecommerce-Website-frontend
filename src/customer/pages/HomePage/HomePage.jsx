import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import {mens_kurta} from '../../../Data/Men/men_kurta'
const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <HomeSectionCarousel data={mens_kurta} section={"Men's Kurta"}> </HomeSectionCarousel>
        </div>
    </div>
  )
}

export default HomePage