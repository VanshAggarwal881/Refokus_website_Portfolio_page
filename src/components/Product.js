import React, { useEffect, useRef } from 'react';
import Button from './Button';

function Product({ data, mover, count }) {
  const productRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mover(count); // Call the mover function when the component is in view
        }
      },
      {
        root: null, // Use the viewport as the container
        threshold: 0.4, // Trigger when 10% of the component is in view
      }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, [mover, count]);

  return (
    <div ref={productRef} className='w-full py-10 h-[20rem] text-white '>
      <div
        onMouseEnter={() => mover(count)} // mover will also work on hover
        className='max-w-screen-lg mx-auto flex items-center justify-between'
      >
        <h1 className='text-6xl capitalize font-medium'>{data.title}</h1>
        <div className='details w-1/3'>
          <p className='mb-10'>{data.description}</p>
          <div className='flex items-center gap-10'>
            {data.live && <Button></Button>}
            {data.case && <Button title='Case Study'></Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;


// What’s changed:
// Ref: Added productRef using useRef to reference the DOM element.
// IntersectionObserver: Added an observer inside useEffect to detect when the component enters the viewport while scrolling and call mover(count).
