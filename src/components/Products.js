import React, { useEffect, useRef, useState } from 'react';
import Product from './Product';
import { products } from '../utils/Products_details/products';
import { motion } from 'framer-motion';

function Video({ src, index, pos }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        root: null,
        threshold: 0.5, // Video plays only when 50% is in view
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      animate={{ y: -pos + `rem` }}
      className="w-full h-[20rem]">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        loop
        onError={() => console.error(`Error loading video: ${src}`)}
      />
    </motion.div>
  );
}

function Products() {
  const [pos, setpos] = useState(20);

  const mover = (val) => {
    setpos(val * 20); // val is the index for every product and 20 rem is the product height
  };

  const videoSources = [
    '/Videos/vidone.mp4',
    '/Videos/vidtwo.mp4',
    '/Videos/vidone.mp4',
    '/Videos/vidtwo.mp4',
    '/Videos/vidone.mp4',
    '/Videos/vidtwo.mp4',
    '/Videos/vidone.mp4',
  ];

  return (
    <div className="mt-32 relative">
      {products.map((e, i) => (
        <Product data={e} mover={mover} count={i} key={i} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: '-50%' }}
          animate={{ y: pos + `rem` }}
          className="window absolute w-[26rem] h-[20rem] bg-white left-[45%] overflow-hidden">
          {videoSources.map((src, index) => (
            <Video key={index} src={src} index={index} pos={pos} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;


// Key Changes:
// Video Component:

// Each video element has its own component, and it uses a ref to detect when it's in view.
// It uses the Intersection Observer API to play the video when it enters the viewport and pause it when it leaves.
// Threshold:

// The threshold is set to 0.5, so the video plays only when at least 50% of it is visible.
// Video List:

// I included a list of video sources to represent each video in your layout.
// Automatic Play/Pause:

// The videos automatically play and pause based on whether they are in view as the user scrolls.