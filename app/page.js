'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);

  const selected = (id) => {
    setSelectedId(id);
  }
  return (
    <div className="conMain">
      <div>
        <h1 className={`${selectedId === null ? 'hideTextBG' : 'textBG'}`}>ALL YOU</h1>
        <h1 style={{zIndex: "10"}} className={`${selectedId === null ? 'hideTextBG2' : 'textBG2'}`}>NEED</h1>
      </div>
      
      <button onClick={() => selected(null)} className={`${selectedId === null ? 'hideBtnBack' : 'btnBack'}`}>BACK</button>

      {[1, 2, 3, 4].map((id) => {
        const itemData = [
          {
            id: 1,
            image: "/Unif_AllYouNeed_Green.png",
            namebrand: "Unif",
            name: "AllYouNeed Green",
            flavor: "Delicious Flavor",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          },
          {
            id: 2,
            image: "/Unif_AllYouNeed_Orange.png",
            namebrand: "Unif",
            name: "AllYouNeed Orange",
            flavor: "Delicious Flavor",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          },
          {
            id: 3,
            image: "/Unif_AllYouNeed_pink.png",
            namebrand: "Unif",
            name: "AllYouNeed Pink",
            flavor: "Delicious Flavor",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          },
          {
            id: 4,
            image: "/CocoDee.png",
            namebrand: "Unif",
            name: "CocoDee",
            flavor: "Coconut Flavor",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        ][id - 1];

        return (
          <div
            key={id}
            className={`${selectedId === null ? 'conItem' : 'hide'} Item${id} ${selectedId === null ? '' : `Item${id}_2`} ${selectedId === id ? 'show' : ''}`}
          >
            <Image
              className={`${selectedId === null ? `img img${id}` : 'img'}`}
              src={itemData.image}
              alt={itemData.name}
              width={400}
              height={400}
            />
            <div className={`${selectedId === null ? `group_text group_text${id}` : 'groupTextSelected'}`}>
              <div>
                <p>0{id}</p>
                <h2>{itemData.namebrand}</h2>
                <h2>{itemData.name}</h2>
                <div style={{ display: "flex", gap: "1rem", width: "15rem" }}>
                  <h3>{itemData.flavor}</h3>
                  <h4 className={`${selectedId === null ? 'hideh4' : 'showh4'}`}>Price: 30 Bath</h4>
                </div>
              </div>
              <h4 className={`${selectedId === null ? 'hideh4' : 'showh5'}`}>
                {itemData.detail}
              </h4>
              <button className={`${selectedId === null ? 'btnView' : 'hideBtn'}`} onClick={() => selected(id)}>View more</button>
              <button className={`${selectedId === null ? 'hideBtn' : 'btnAdd'}`}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
