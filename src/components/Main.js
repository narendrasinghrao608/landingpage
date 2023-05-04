import React from "react";
import img0 from "../img/Pancha-Tattwa.jpg";
function Main() {
  return (
    <div className="container mx-auto mtn-h-screen ">
      <section className="section1">
        <div className="flex rp1 ">
          <div className="topleft flex rp2  flex-col justify-center ">
            <h1 className="my-1">The Best krishna consicous society: ISKCON</h1>
            <p>
              The International Society for Krishna Consciousness (ISKCON),
              otherwise known as the Hare Krishna movement, includes five
              hundred major centers, temples and rural communities, nearly one
              hundred affilated vegetarian restaurants, thousands of namahattas
              or local meeting groups, a wide variety of community projects, and
              millions of congregational members worldwide. Although less than
              fifty years on the global stage, ISKCON has expanded widely since
              its founding by His Divine Grace A. C. Bhaktivedanta Swami
              Prabhupāda in New York City in 1966. ISKCON belongs to the
              Gaudiya-Vaishnava sampradāya, a monotheistic tradition within the
              Vedic or Hindu culture. Philosophically it is based on the
              Sanskrit texts Bhagavad-gītā and the Bhagavat Purana, or Srimad
              Bhagavatam. These are the historic texts of the devotional bhakti
              yoga tradition, which teaches that the ultimate goal for all
              living beings is to reawaken their love for God, or Lord Krishna,
              the “all-attractive one”.
            </p>
          </div>
          <div className="rp2 topright flex justify-center align-items heigh">
            <img className="overflow-hidden" src={img0} alt="" />
          </div>
        </div>
      </section>
      <hr />
      <section className="section2">
        <h1 className="text-center my-2">How We serve</h1>
        <p className="my-2">
        ISKCON’s founder, Srila Prabhupada, has drawn appreciation from scholars and religious leaders alike for his remarkable achievement in presenting India’s Vaishnava spiritual culture in a relevant manner to contemporary Western and worldwide audiences.
        </p>
        <div className="boxes flex justify-center rp1">
          <div className="box ">
            <h2>Hari nam sankirtan</h2>
            <ul>
              <li>Nagar Sankirtan(in city)</li>
              <li>Gram Sankirtan(in village)</li>
              <li>Nam hata(chanting holy name)</li>
              <li>
                <button className="btn">See For Latest Program</button>
              </li>
            </ul>
          </div>
          <div className="box ">
            <h2>Daily bhagwatam and bhagwat geeta classes</h2>
            <ul>
              <li>In temple hole at 8:00 A.M</li>
              <li>Bhagwat Spatahs</li>
              <li>Bhagwat geeta Seminars</li>
              <li>
                <button className="btn">See For Latest Program</button>
              </li>
            </ul>
          </div>
          <div className="box ">
            <h2>Spiritual programs for Youths</h2>
            <ul>
              <li>Utsav Festivals</li>
              <li>Youths Forams Program</li>
              <li>Spiritual Party</li>
              <li>
                <button className="btn">See For Latest Program</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section className="section3">
        <h1 className="text-center my-2">
          Eternal Shelter Of Guru Shisy prmpara
        </h1>
        <h2 className="text-center my-1">
          Starting From Suprem Personality Of Godhead
        </h2>
        <div  className="container flex text-center rp1 pbox justify-center ">
          <div className="prampara ">
            <p>Shri krishna</p>
            <p>Bramaji</p>
            <p>Narad</p>
            <p>Vyas</p>
            <p>Madv</p>
            <p>Padmnabh</p>
            <p>Narhari</p>
            <p>Madhav</p>
            <p>Akshobhay</p>
            <p>Jaytirth</p>
            <p>Gyansindhu</p>
            <p>Dyanidhi</p>
            <p>Vidhyanidhi</p>
            <p>Rajendra</p>
            <p>Jaydharm</p>
            <p>Purshotam</p>
          </div>
          <div className="prampara">
            <p>Bramantirth</p>
            <p>Vidhyatirth</p>
            <p>Laxmipati</p>
            <p>Madvendrapuri</p>
            <p>Isvarpuri</p>
            <p>Shri chetany mahaprabhu</p>
            <p>Rup goswami(svrup,snatan)</p>
            <p>Ragunath,jiv</p>
            <p>Krishna das</p>
            <p>Narotam</p>
            <p>Visvnath</p>
            <p>Jagatnath</p>
            <p>Bhativinod thakur</p>
            <p>Gorkishor das babaji maharaj</p>
            <p>Bhatisidant sarsvati thakur</p>
            <p>A.c bhativedant swami prabhupad</p>
            <li>
              <button className="btn">Detail discription</button>
            </li>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Main;
