import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Pic = styled.div`
    clip-path: polygon(0% 0%, 100% 0%, 100% 72%, 80% 100%, 0% 100%);
    height: 55%;
    width: 65%;
    padding-left: 5%;
    margin-top: -10%;
    z-index:50;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
function Slider() {
    const data = [
        {
            id:1,
            name:'AFRICAN BUSINESS LEADERS REECHO COMMITMENT FOR SUCCESSFUL CONTINENTAL TRADE ENGAGEMENT',
            title:'Recieve and track and Manage payments from hundreds of sources in asingle dashboard',
            pic:'/sg.webp',
            btn:'Read More...'
        },
        {
            id:1,
            name:'THE POSITION OF THE MANUFACTURERS ASSOCIATION OF NIGERIA ON THE RECENT INCREASE IN ELECTRICITY TARIFF',
            title:'Be the sure padi for every Money-Related activity people need to make in your area',
            pic:'/three.jpg',
            btn:'Read More...'
        },
        {
            id:1,
            name:'MANUFACTURERS ASSOCIATION OF NIGERIA ON CBN INTERVENTION FUND TO MANUFACTURERS AND POLICY ON FOREX SQUEEZE',
            title:'There are super agents creating wealth and building a network of new agents',
            pic:'/two.jpeg',
            btn:'Read More...'
        }
    ]
  return (
    <Swiper className='swiper'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
      {
          data.map((item)=>(
              <SwiperSlide className='slider' key={item.id}>
                  <Pic><img src={item.pic} alt="" /></Pic>
                  <p><b>{item.name}</b></p>
                  <p>{item.title}</p>
                  <Link to='/'>{item.btn}</Link>
              </SwiperSlide>
          ))
      }
  </Swiper>
  )
}

export default Slider