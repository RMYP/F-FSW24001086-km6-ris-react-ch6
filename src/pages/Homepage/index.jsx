import HeroesComponent from "../../component/Hero";
import carImage from "../../assets/img_car.svg"
import serviceImage from "../../assets/img_service.svg"
import ListBody14Light from "../../component/List";
import CardHomepage from "../../component/Card";
import cardIcon1 from "../../assets/icon/icon_complete.svg"
import cardIcon2 from "../../assets/icon/icon_price.png"
import cardIcon3 from "../../assets/icon/icon_24hrs.svg"
import cardIcon4 from "../../assets/icon/icon_professional.svg"
import profileImg from "../../assets/img_photo.png"
import { CarouselParent, CarouselChild } from "../../component/Carousel";
import { AccordionParent, AccordionChild } from "../../component/Accordion";
import ButtonBody14 from "../../component/button/button";


export default function HomePage(){
    return(
        <>
            <section id="heroes">
                <HeroesComponent img={carImage} button={true} btnText="Mulai Sewa Mobil" btnLink="/cars"/>
            </section>
            <section id="our-service">
                <div class="container">
                    <div class="row" id="row-section-ourservice">
                        <div class="col-10 col-sm-8 col-lg-6" id="div-img-icon-complete">
                            <img id="img_icon_complete" src={serviceImage} alt=""/>
                        </div>
                        <div class="col-lg-6 my-auto mx-auto">
                            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                            <p id="body-14-light">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <ul>
                                <ListBody14Light text="Sewa Mobil Dengan Supir di Bali 12 Jam"/>
                                <ListBody14Light text="Sewa Mobil Lepas Kunci di Bali 24 Jam"/>
                                <ListBody14Light text="Sewa Mobil Jangka Panjang Bulanan"/>
                                <ListBody14Light text="Gratis Antar - Jemput Mobil di Bandara"/>
                                <ListBody14Light text="Layanan Airport Transfer / Drop In Out"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Us Section */}
            <section>
                <div class="container" id="why-us">
                <h2>Why Us?</h2>
                <p id="body-14-light">Mengapa harus memilih Binar Rental Car?</p>
                    <div class="row row-cols-4 justify-content-around">
                    <CardHomepage title="Mobil Lengkap" body="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat" img={cardIcon1}/>
                    <CardHomepage title="Harga Murah" body="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain" img={cardIcon2}/>
                    <CardHomepage title="Layanan 24 Jam" body="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu" img={cardIcon3}/>
                    <CardHomepage title="Sopir Profesional" body="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu" img={cardIcon4}/>
                    </div>
                </div>
            </section>
            {/* Carousel */}
            <section>
                <div class="container" id="testimonial-section"   >
                <div class="text-center">
                    <h2 id="heading-24-bold">Testimonial</h2>
                    <p id="body-14-light">Berbagai review positif dari para pelanggan kami</p>
                </div>
                {/* <!-- carousel --> */}
                </div>
                <CarouselParent>
                    <CarouselChild body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" name="Rizki Mauludin 20, Samarinda" img={profileImg}/>
                    <CarouselChild body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" name="Imam Ganteng 27, Jakarta" img={profileImg}/>
                </CarouselParent>
            </section>
            {/* <!-- register section --> */}
            <section id="getting-started">
                <div class="container" id="register-section">
                <h2 id="heading-36-bold">Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p id="body-14-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. </p>
                <ButtonBody14 btnLink="/cars" btnText="Mulai Sewa Sekarang" />                </div>
            </section>
            {/* <!-- end register section --> */}
            {/* <!-- FAQ section --> */}
            <section id="FAQ">
                <div class="container" id="faq-section">
                <div class="row">
                    <div class="col-md-5">
                    <h2 id="heading-24-bold">Frequently Asked Question</h2>
                    <p id="body-14-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div class="col-md-7">
                    {/* <!-- accordion --> */}
                    <AccordionParent>
                        <AccordionChild id="1" title="Apa saja syarat yang dibutuhkan" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua"/>
                        <AccordionChild id="2" title="Berapa hari minimal sewa mobil lepas kunci" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua"/>
                        <AccordionChild id="3" title="Berapa hari sebelumnya sabaiknya booking sewa mobil?" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua"/>
                        <AccordionChild id="4" title="Apakah Ada biaya antar-jemput?" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua"/>
                        <AccordionChild id="5" title="Bagaimana jika terjadi kecelakaan" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua"/>
                    </AccordionParent>
                    {/* <!-- end accordion --> */}
                    </div>
                </div>
                </div>
            </section>
            {/* <!-- end FAQ section --> */}
            <footer>
                <div class="container mb-3">
                <div class="row justify-content-between">
                    <div class="col-md-3">
                    <p id="body-14-light">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p id="body-14-light">binarcarrental@gmail.com</p>
                    <p id="body-14-light">081-233-334-808</p>
                    </div>
                    <div class="col-md-2">
                    <p id="body-14-regular">Our services</p>
                    <p id="body-14-regular">Why Us</p>
                    <p id="body-14-regular">Testimonial</p>
                    <p id="body-14-regular">FAQ</p>
                    </div>
                    <div class="col-md-3">
                    <p id="body-14-light">Connect with us</p>
                    <img src="assets/icon/list item.svg" a  lt=""/>
                    </div>
                    <div class="col-md-2">
                    <p id="body-14-light">Copyright Binar 2022</p>
                    <img src="assets/icon/Rectangle 74.svg" alt=""/>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}
