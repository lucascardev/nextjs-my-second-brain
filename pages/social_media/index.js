import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Pagination } from 'swiper'
import 'swiper/css'
import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { DateTime } from 'luxon'



const SocialMedia = () => {

    const [date, setDateDay] = React.useState(DateTime.now())
    const [swiperIndex, setSwiperIndex] = React.useState(0)


  return (
    <main className="bg-neutral-50 flex flex-col justify-center px-6">
      <div className="flex flex-row self-center justify-evenly w-1/2">
        <h1 className="underline text-4xl pb-6">Instagram, Twiter</h1>
        <FiInstagram size="5em"/> <FiTwitter size="5em"/>
      </div>

      <img
        className="self-center pb-6"
        src="https://i.ibb.co/pPKRksQ/Screenshot-2022-07-15-at-21-10-19-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
        alt="Screenshot-2022-07-15-at-15-28-36-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
        border="0"
      />
      {/* lista com as tecnologias */}
      <ul>
        <li>
          <p className="text-2x1 py-6">Instagram API - IRÁ MOSTRAR CARROSEL COM PUBLICAÇÕES DO INSTAGRAM</p>
        </li>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            if(swiper.realIndex > swiperIndex){
                setDateDay(date.minus({ days: 1 }))
                setSwiperIndex(swiper.realIndex)
            } else {
                setDateDay(date.plus({ days: 1 }))
                setSwiperIndex(swiper.realIndex)
            }

           
          }}
          
          onSwiper={(swiper) => console.log(swiper)}
        >
           
          <SwiperSlide>
            <img
              src="https://i.ibb.co/dcSDLPK/Screenshot-2022-07-15-at-15-28-36-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
              alt="Screenshot-2022-07-15-at-15-28-36-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
              border="0"
            />
           
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/Jj66hCv/Screenshot-2022-07-15-at-15-28-29-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
              alt="Screenshot-2022-07-15-at-15-28-29-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/x5KgCw4/Screenshot-2022-07-15-at-15-28-26-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
              alt="Screenshot-2022-07-15-at-15-28-26-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/7G6GKKr/Screenshot-2022-07-15-at-15-28-16-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
              alt="Screenshot-2022-07-15-at-15-28-16-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/CnXckYy/Screenshot-2022-07-15-at-15-28-09-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
              alt="Screenshot-2022-07-15-at-15-28-09-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/pr1tTdb/Screenshot-2022-07-15-at-15-28-21-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram.png"
              alt="Screenshot-2022-07-15-at-15-28-21-Ze-Neto-depzeneto-Fotos-e-v-deos-do-Instagram"
              border="0"
            />
          </SwiperSlide>
           <div className="bg-red-200 z-50 flex justify-center">
           
                <p className="text-4xl"> {date.toLocaleString(DateTime.DATETIME_MED)}</p>
            </div>
         
        </Swiper>

        <li><p className="text-2x1 py-6" >Twiter API - ULTIMOS POSTS DO TWITER</p></li>
        <Swiper
          //   spaceBetween={50}
          //   slidesPerView="auto"
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: 'left center',
              translate: ['-5%', 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: 'right center',
              translate: ['5%', 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[Pagination, EffectCreative]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/n8BjfW5/Screenshot-2022-07-15-at-15-41-54-6-Z-Neto-depzeneto-Twitter.png"
              alt="Screenshot-2022-07-15-at-15-41-54-6-Z-Neto-depzeneto-Twitter"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/YDK7ZBN/Screenshot-2022-07-15-at-15-42-02-6-Z-Neto-depzeneto-Twitter.png"
              alt="Screenshot-2022-07-15-at-15-42-02-6-Z-Neto-depzeneto-Twitter"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/WzMbHwy/Screenshot-2022-07-15-at-15-42-36-6-Z-Neto-depzeneto-Twitter.png"
              alt="Screenshot-2022-07-15-at-15-42-36-6-Z-Neto-depzeneto-Twitter"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/x68b6nt/Screenshot-2022-07-15-at-15-42-40-6-Z-Neto-depzeneto-Twitter.png"
              alt="Screenshot-2022-07-15-at-15-42-40-6-Z-Neto-depzeneto-Twitter"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/Fq5Msgn/Screenshot-2022-07-15-at-15-42-45-6-Z-Neto-depzeneto-Twitter.png"
              alt="Screenshot-2022-07-15-at-15-42-45-6-Z-Neto-depzeneto-Twitter"
              border="0"
            />
          </SwiperSlide>

          <SwiperSlide>
            {' '}
            <img
              src="https://i.ibb.co/jRrtSLq/Screenshot-2022-07-15-at-15-42-51-6-Z-Neto-depzeneto-Twitter.png"
              alt="Screenshot-2022-07-15-at-15-42-51-6-Z-Neto-depzeneto-Twitter"
              border="0"
            />
          </SwiperSlide>
        </Swiper>
      </ul>
      <a
        href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_INSTAGRAM_AUTH_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`}
      >
        <button>Instagram Authentication Process</button>
      </a>
    </main>
  )
}

export default SocialMedia
