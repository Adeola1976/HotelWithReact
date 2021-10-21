import React from 'react'
import {Link} from 'react-router-dom'
import room1 from '../image/Room/room1.jpg'
import room2 from '../image/Room/room2.jpg'
import room3 from '../image/Room/room3.jpg'
import room4 from '../image/Room/room4.jpg'
import About_img from '../image/elements/about_bg.jpg'
import testimony from '../image/User/testtimonial-1.jpg'

export default function Home() {
    return (
        <>
      <section className="banner_area">
            <div className="booking_table d_flex align-items-center">
            	<div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div className="container">
					<div className="banner_content text-center">
						<h6>Away from monotonous life</h6>
						<h2>Relax Your Mind</h2>
						<p>If you are looking at blank cassettes on the web, you may be very confused at the<br/> difference in price. You may see some for as low as $.17 each.</p>
						<a href="#" className="btn theme_btn button_hover">Get Started</a>
					</div>
				</div>
            </div>
        </section>

     
      {/* second section*/} .

      <section className="accomodation_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Hotel Accomodation</h2>
                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, </p>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room1} alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                            <h5>$250<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room2} alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room3}  alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                            <h5>$750<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room4}  alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        


        {/*third section */}
        <section className="facilities_area section_gap">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">  
            </div>
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_w">Royal Facilities</h2>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="lnr lnr-dinner"></i>Restaurant</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="lnr lnr-bicycle"></i>Sports CLub</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="lnr lnr-shirt"></i>Swimming Pool</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="lnr lnr-car"></i>Rent a Car</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="lnr lnr-construction"></i>Gymnesium</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="lnr lnr-coffee-cup"></i>Bar</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
     

     {/*fouth section*/}
        <section className="about_history_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d_flex align-items-center">
                        <div className="about_content ">
                            <h2 className="title title_color">About Us <br/>Our History<br/>Mission & Vision</h2>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                            <a href="#" className="button_hover theme_btn_two">Request Custom Price</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={ About_img} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonial_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Testimonial from our Clients</h2>
                    <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
                </div>
               
                      
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="media testimonial_item">
                                <img className="rounded-circle" src={testimony}alt=""/>
                                <div className="media-body">
                                    <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                    <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                                
                                </div>
                            </div>
                        </div>

                       <div className="col-sm-12 col-md-6">
                            <div className="media testimonial_item">
                                <img className="rounded-circle" src={testimony} alt=""/>
                                <div className="media-body">
                                    <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                    <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                                
                                </div>
                            </div> 
                          </div>
                           
                   




                   </div>
                </div>
          
        </section>








        </>
    )
}
