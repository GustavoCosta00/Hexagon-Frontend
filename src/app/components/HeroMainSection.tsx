import React from 'react'
import { getHeroMainSection } from "@/lib/strapi";

const HeroMainSection = async () => {
  const mainSection = await getHeroMainSection();
  const base_url = process.env.STRAPI_URL;

  // PEGA OS DADOS INICIAIS SOBRE A HERO MAIN SECTION
  const getMainSection = mainSection.data.Home[0]

  // PEGA OS DADOS DOS CARDS DA HERO SECTION
  const getAllMainSectionContent = mainSection.data.Home

  // RETIRA O PRIMEIRO ITEM DO ARRAY
  const shiftFirst = getAllMainSectionContent.shift()

  return (
    <>
      <div>
        <h2>{getMainSection?.title}</h2>
        <p>{getMainSection?.description}</p>
          <br/> <br/> <br/>

        <div className='card-main-section'>
          {getAllMainSectionContent.map((item:any) => (
            <ul key={item.id} >
              <li className='img-align-center'><img src={base_url + item.image.formats.thumbnail.url} alt="" /></li>
              <li>{item.title}</li>
              <li>{item.description}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroMainSection