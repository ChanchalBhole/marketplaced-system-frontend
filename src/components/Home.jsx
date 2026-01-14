// import { Box,Slider,Typography,Button } from '@mui/material'
// import React, { useState } from 'react'

// const Home = () => {
// let[counter,setcounter]=useState(0)
// let[mColor,setmColor]=useState("blue")
// let[mfontsize,setmfontsize]=useState(50)
// let friends=["chanchal","isha","swarangii","mona","payal","hitesh","pooja","mohit","rohan"]
//   return (
//     <>
//      <Box>
//       <Button onClick={()=>{
//         setcounter(--counter)
//         if (counter >0) {
//           setcounter(counter)
//         } else {
//           setcounter(0)
//         }
//         }}
//         variant='outlined' color='primary'>-</Button>
//       <Typography varient='h3'>{counter}</Typography> 
//       <Typography varient='h3'>{friends[counter]}</Typography>     
//       <Button onClick={()=>{
//         setcounter(++counter)
//         if (counter < friends.length) {
//           setcounter(counter);
//         } else {
//           setcounter(0)
//         }
//       }}
//         variant='outlined' color='primary'>+</Button>

//      </Box>
//      <Box sx={{
      
//       backgroundColor:mColor
//      }}height={200}width={200}
//      onClick={()=>setmColor('red')}>
//     </Box>
//       <Slider
//         aria-label="font Size"
//         defaultValue={0}
//         step={6}
//         onChange={(e)=>setmfontsize(e.target.value)}
//         color="secondary"
//         />
//   <Typography sx={{fontSize:mfontsize}}>hiii</Typography>
   
//     </>
//   ) 
// }

// export default Home
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showAmenities, setShowAmenities] = useState(false);
  const [slide, setSlide] = useState(0);

  const bannerImages = [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1503602642458-232111445657",
    "https://images.unsplash.com/photo-1503602642557-9e7dcc1b3278"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { name: "Laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { name: "Sofa", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
    { name: "Perfume", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
    { name: "Grocery Pack", img: "https://images.unsplash.com/photo-1500835556837-99ac94a94552" },
    { name: "Makeup Kit", img: "https://images.unsplash.com/photo-1500835556837-99ac94a94552" },
  ];

  const categories = [
    { name: "Beauty", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" },
    { name: "Furniture", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4" },
    { name: "Grocery", img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443" },
    { name: "Fragrance", img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fafafa" }}>

      {/* Slider */}
      <div style={{
        width: "100%",
        height: "600px",
        overflow: "hidden"
      }}>
        <img
          src={bannerImages[slide]}
          alt="banner"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            transition: "0.5s ease"
          }}
        />
      </div>

      {/* Products */}
      <section style={{ padding: "40px" }}>
        <h2>Featured Products</h2>
        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "15px"
        }}>
          {products.map((p, i) => (
            <div key={i} style={{
              width: "200px",
              height: "230px",
              background: "#fff",
              borderRadius: "10px",
              border: "1px solid #ccc",
              overflow: "hidden"
            }}>
              <img src={p.img} alt={p.name} style={{
                width: "100%",
                height: "70%",
                objectFit: "cover"
              }} />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30%",
                fontWeight: "bold"
              }}>
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Button */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          onClick={() => setShowAmenities(!showAmenities)}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "6px"
          }}
        >
          Amenities
        </button>
      </div>

      {/* Categories */}
      {showAmenities && (
        <section style={{ padding: "40px", background: "#eee", marginTop: "20px" }}>
          <h2>Categories</h2>
          <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "15px"
          }}>
            {categories.map((c, i) => (
              <div key={i} style={{
                width: "180px",
                height: "210px",
                background: "#fff",
                borderRadius: "10px",
                border: "1px solid #444",
                overflow: "hidden"
              }}>
                <img src={c.img} alt={c.name} style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover"
                }} />
                <div style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: "10px",
                  fontSize: "18px"
                }}>
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer Down */}
      <footer style={{
        background: "#222",
        color: "#fff",
        padding: "35px",
        marginTop: "40px",
        textAlign: "center"
      }}>
        <div style={{ marginBottom: "10px" }}>
          <span style={{ marginRight: "25px", cursor: "pointer" }}>Home</span>
          <span style={{ marginRight: "25px", cursor: "pointer" }}>About</span>
          <span style={{ marginRight: "25px", cursor: "pointer" }}>Product</span>
          <span style={{ marginRight: "25px", cursor: "pointer" }}>Profile</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
        <p>© 2026 My Store — All Rights Reserved</p>
      </footer>
    </div>
  );
}
