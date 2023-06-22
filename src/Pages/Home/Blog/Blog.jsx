
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='mt-12'>
            <div className='text-center'>
            <h2 className="text-4xl text-extrabold text-center mt-8 text-orange-400 font-extrabold">Our Blog</h2>
                <h2 className='text-black font-semibold text-3xl mt-4'>Some tips and triks about yoga</h2>
                <p className='mt-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusantium delectus
                    <br />
                    ipsam sed magni dolor quisquam eveniet sunt incidunt laboriosam?</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6'>
                <div className='text-start'>
                    {/* left side */}
                    <img className='rounded-lg' src="https://img.freepik.com/free-photo/sporty-young-woman-doing-yoga-practice-isolated-concept-healthy-life-natural-balance-body-mental-development_231208-10353.jpg?w=740&t=st=1687148587~exp=1687149187~hmac=7d3c9bc7869e93700250a8eab1ea15b8e8020a7b47ba501b832e532df8735291" alt="" />
                     <h2 className='text-3xl text-orange-600 mt-4'>meditation and mindfulness retreats in the UK</h2>
                    <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, eligendi!</p>
                    <Link to='' className="btn bg-green-950 text-white hover:bg-red-500 p-2 rounded-md mt-4 border-b-2">Read More  </Link>

                </div>
                <div className='space-y-4'>
                    {/* right side */}
                    <div className='md:flex-row lg:flex  gap-4 items-center'>
                    <img className='w-full lg:w-56 rounded-lg'  src="https://img.freepik.com/free-photo/concept-yoga-handsome-man-doing-yoga-exercise-isolated-white-background_231208-8218.jpg?w=740&t=st=1687149156~exp=1687149756~hmac=02382bdec75028744f18a6522fdf8da227cca6e230e9ea954d6638f736708196" alt="" />
                        <div className='lg:text-start text-center'>
                             <h2 className='text-xl text-gray-500 lg:mt-0 mt-4'>The best Teachers on to keep you calm in lockdown</h2>
                            <span className='text-gray-700'>25 Aug 2023</span>
                        </div>
                    </div>
                    <div className='md:flex-row lg:flex  gap-4 items-center'>
                        <img className='w-full lg:w-56 rounded-lg' src="https://img.freepik.com/free-photo/beautiful-girl-is-engaged-yoga-studio_1157-29600.jpg?w=740&t=st=1687152348~exp=1687152948~hmac=2d3760e4f39fdaf1c29099018c96155324d74a4b00074714f4db55148b7fc6fc" alt="" />
                        <div className='lg:text-start text-center'>
                             <h2 className='text-xl text-gray-500 lg:mt-0 mt-4'>The best Teachers on to keep you calm in lockdown</h2>
                            <span className='text-gray-700'>25 Aug 2023</span>
                        </div>
                    </div>
                    <div className='md:flex-row lg:flex  gap-4 items-center'>
                    <img className='w-full lg:w-56 rounded-lg' src="https://as2.ftcdn.net/v2/jpg/00/52/72/37/1000_F_52723787_gekCDsX7HyUc90VeiRWIIFPPr0x0bxM8.jpg" alt="" />
                    <div className='lg:text-start text-center '>
                             <h2 className='text-xl text-gray-500 lg:mt-0 mt-4'>The best Teachers on to keep you calm in lockdown</h2>
                            <span className='text-gray-700'>25 Aug 2023</span>
                        </div>
                    </div>
                    <div className='md:flex-row lg:flex  gap-4 items-center'>
                    <img className='w-full lg:w-56 rounded-lg' src="https://as2.ftcdn.net/v2/jpg/02/45/65/33/1000_F_245653305_WPr0Hr5jNBI5eOmrphQRt9hm1BmJzoPL.jpg" alt="" />
                    <div className='lg:text-start text-center'>
                             <h2 className='text-xl text-gray-500 lg:mt-0 mt-4'>The best Teachers on to keep you calm in lockdown</h2>
                            <span className='text-gray-700'>25 Aug 2023</span>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};

export default Blog;