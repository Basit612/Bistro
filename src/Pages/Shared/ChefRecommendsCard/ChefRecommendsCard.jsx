import React from 'react';

const ChefRecommendsCard = ({chef}) => {
  const {category,name,image}= chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl text-center">{category}</h2>
    <p className='text-center'>{name}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary bg-[#BB8506]">add to cart</button>
    </div>
  </div>
</div>
  );
};

export default ChefRecommendsCard;