import Swiper from 'react-id-swiper';

export default (props) => {
  
   const images = [
      {
         img: require("../static/images/s1.jpg"),
         title: "Get Sale Alert"
      },
      {
         img: require("../static/images/s2.jpg"),
         title: "Get Sale Alert"
      },
      {
         img: require("../static/images/s3.jpg"),
         title: "Get Sale Alert"
      },
      {
         img: require("../static/images/s4.jpg"),
         title: "Get Sale Alert"
      },
      {
         img: require("../static/images/s5.jpg"),
         title: "Get Sale Alert"
      },
      {
         img: require("../static/images/s6.jpg"),
         title: "Get Sale Alert"
      },
      {
         img: require("../static/images/s7.jpg"),
         title: "Get Sale Alert"
      },
   ]
   return (
      <Swiper {...props.params}>
         {images.map((item, index) => {
            return (
               <div className="item-swiper">

                  <a href="#">
                     <div 
                     className="item-swiper-img"
                     style={{
                        backgroundImage: "url(" + `${item.img}` + ")",
                     }}>
                        <img style={{  }} src={images[1].img} />
                     </div>
                     <div className="item-swiper-title">
                        <i class="far fa-heart"></i>
                        <span>{item.title}</span>
                     </div>
                  </a></div>
            )
         })}
      </Swiper>
   );
}