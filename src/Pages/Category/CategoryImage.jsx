import img from "../../assets/home/chef-service.jpg";

const CategoryImage = () => {
  return (
    <div className="mb-7">
      <div className="relative">
        <img src={img} alt="" />
      </div>
      {/* <div className='bg-[#FFFFFF] h-[120px] w-[500px] absolute ml-40 -mb-40'>
          <h1>Bistro Boss</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div> */}
    </div>
  );
};

export default CategoryImage;
