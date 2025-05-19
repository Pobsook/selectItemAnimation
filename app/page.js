'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [selectedId, setSelectedId] = useState(null); // ค่าเริ่มต้นยังไม่เลือก

  const selected = (id) => {
    setSelectedId(id);
  }

  return (
    <>
      <div className="conMain">
        <h1 className={`${selectedId === null ? 'hideTextBG' : 'textBG'}`}>All YOU NEED</h1>
        <button onClick={() => selected(null)} className={`${selectedId === null ? 'hideBtnBack' : 'btnBack'}`}>BACK</button>
        <div className={`${selectedId === null ? 'conItem' : 'hide'} ${selectedId === null ? '' : 'Item1_2'} Item1  ${selectedId === 1 ? 'show' : ""}`}>
          <Image className={`${selectedId === null ? 'img img1' : 'img'}`} src="/Unif_AllYouNeed_Green.png" alt="Unif_AllYouNeed_Green" width={400} height={400} />
          <div className={`${selectedId === null ? 'group_text group_text1' : 'groupTextSelected'}`}>
            <div>
              <p>01</p>
              <h2>Unif <br />AllYouNeed Green</h2>
              <div style={{ display: "flex", gap: "1rem", width: "15rem" }}>
                <h3>Delicious Flavor</h3>
                <h4 className={`${selectedId === null ? 'hideh4' : 'showh4'}`}>Price : 30 Bath</h4>
              </div>
            </div>
            <div>
              <h4 className={`${selectedId === null ? 'hideh4' : 'showh5'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .
              </h4>
            </div>
            <button className={`${selectedId === null ? 'btnView' : 'hide'}`} onClick={() => selected(1)}>View more</button>
            <button className={`${selectedId === null ? 'hide' : 'btnAdd'}`}>Add to cart</button>
          </div>
        </div>
        <div className={`${selectedId === null ? 'conItem' : 'hide'} Item2 ${selectedId === null ? '' : 'Item2_2'} ${selectedId === 2 ? 'show' : ""}`}>
          <Image className={`${selectedId === null ? 'img img2' : 'img'}`} src="/Unif_AllYouNeed_Orange.png" alt="Unif_AllYouNeed_Orange" width={400} height={400} />
          <div className={`${selectedId === null ? 'group_text group_text2' : 'groupTextSelected'}`}>
            <div>
              <p>02</p>
              <h2>Unif <br />AllYouNeed Orange</h2>
              <div style={{ display: "flex", gap: "1rem", width: "15rem" }}>
                <h3>Delicious Flavor</h3>
                <h4 className={`${selectedId === null ? 'hideh4' : 'showh4'}`}>Price : 30 Bath</h4>
              </div>
            </div>
            <div>
              <h4 className={`${selectedId === null ? 'hideh4' : 'showh5'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .
              </h4>
            </div>
            <button className={`${selectedId === null ? 'btnView' : 'hide'}`} onClick={() => selected(2)}>View more</button>
            <button className={`${selectedId === null ? 'hide' : 'btnAdd'}`}>Add to cart</button>
          </div>
        </div>
        <div className={`${selectedId === null ? 'conItem' : 'hide'} Item3 ${selectedId === null ? '' : 'Item3_2'} ${selectedId === 3 ? 'show' : ""}`}>
          <Image className={`${selectedId === null ? 'img img3' : 'img'}`} src="/Unif_AllYouNeed_pink.png" alt="Unif_AllYouNeed_pink" width={400} height={400} />
          <div className={`${selectedId === null ? 'group_text group_text3' : 'groupTextSelected'}`}>
            <div>
              <p>03</p>
              <h2>Unif <br />AllYouNeed Pink</h2>
              <div style={{ display: "flex", gap: "1rem", width: "15rem" }}>
                <h3>Delicious Flavor</h3>
                <h4 className={`${selectedId === null ? 'hideh4' : 'showh4'}`}>Price : 30 Bath</h4>
              </div>
            </div>
            <div>
              <h4 className={`${selectedId === null ? 'hideh4' : 'showh5'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .
              </h4>
            </div>
            <button className={`${selectedId === null ? 'btnView' : 'hide'}`} onClick={() => selected(3)}>View more</button>
            <button className={`${selectedId === null ? 'hide' : 'btnAdd'}`}>Add to cart</button>
          </div>
        </div>
        <div className={`${selectedId === null ? 'conItem' : 'hide'} Item4 ${selectedId === null ? '' : 'Item4_2'} ${selectedId === 4 ? 'show' : ""}`}>
          <Image className={`${selectedId === null ? 'img img4' : 'img'}`} src="/CocoDee.png" alt="CocoDee" width={400} height={400} />
          <div className={`${selectedId === null ? 'group_text group_text4' : 'groupTextSelected'}`}>
            <div>
              <p>04</p>
              <h2>Unif <br />CocoDee</h2>
              <div style={{ display: "flex", gap: "1rem", width: "15rem" }}>
                <h3>Coconut Flavor</h3>
                <h4 className={`${selectedId === null ? 'hideh4' : 'showh4'}`}>Price : 30 Bath</h4>
              </div>
            </div>
            <div>
              <h4 className={`${selectedId === null ? 'hideh4' : 'showh5'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .
              </h4>
            </div>
            <button className={`${selectedId === null ? 'btnView' : 'hide'}`} onClick={() => selected(4)}>View more</button>
            <button className={`${selectedId === null ? 'hide' : 'btnAdd'}`}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
