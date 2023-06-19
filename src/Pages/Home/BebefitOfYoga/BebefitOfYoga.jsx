import Container from "../../../Components/Container";

const BebefitOfYoga = () => {
    return (
        <div className=" mt-32 p-8">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div>
                      <div className="ml-20">
                      <p className="uppercase text-orange-600 font-semibold" style={{ letterSpacing: '3px' }}>live & Brethe goodness</p>
                        <h2 className="uppercase text-3xl font-extrabold" style={{ letterSpacing: '6px' }}>
                            Benifits of Yoga
                        </h2>
                      </div>
                        <div className="gap-12 flex justify-center items-center mt-12  ">
                            <img className=" w-6 h-6 " src="https://img.freepik.com/free-vector/red-apple-with-happy-face_1308-9211.jpg?w=740&t=st=1687143161~exp=1687143761~hmac=54ab0a8ec032f9decd7089acd17a98547feda184232ccb4b4649c354102a89f3" alt="" />
                            <span className="w-96">
                                <h2>Healthy Diet Habit</h2>
                                <p>Have suffered alteration in some form make anything from it of it</p>
                                <hr className="mt-4" />
                            </span>



                        </div>
                        <div className="gap-12 flex justify-center items-center mt-8">
                            <img className=" w-6 h-6 " src="https://img.freepik.com/premium-vector/red-heart-icon-with-sign-heartbeat-vector-illustration-heart-sign-flat-design_118339-1424.jpg?w=740" alt="" />
                            <div className="w-96">
                                <h2>Healthy Heart</h2>
                                <p>Randomised words which do not look even slightly believable</p>
                                <hr className="mt-4" />
                            </div>

                        </div>
                        <div className="gap-12 flex justify-center items-center mt-8">
                            <img className=" w-6 h-6 " src="data:image/jpeg;base64,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" alt="" />
                            <div className="w-96">
                                <h2>Reduce Weight</h2>
                                <p>Weight are control then your are a fit name</p>
                                <hr className="mt-4" />
                            </div>

                        </div>
                        <div className="gap-12 flex justify-center items-center mt-8">
                            <img className=" w-6 h-6 " src="https://media.istockphoto.com/id/1258101935/vector/brainstorming-creative-idea-icon-design.jpg?s=1024x1024&w=is&k=20&c=FBPLpIOc_Khbk__TGVZn4F5mdvLjmEBXJgNlM4vN9Fs=" alt="" />
                            <div className="w-96">
                                <h2>Peace of Mind</h2>
                                <p>Mind are cool are all everything are cool in whole world</p>
                                <hr className="mt-4" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <img className="w-full h-full" src="https://img.freepik.com/free-photo/young-woman-pink-shirt-trousers-sitting-grass-inside-park-meditating-doing-yoga_140725-14099.jpg?w=740&t=st=1687143059~exp=1687143659~hmac=bc8b52184677c425538144f0a9c549b358cabdea553dab98f16a84ffc74a9b66" alt="" />
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem omnis nostrum architecto quas ipsum officiis quisquam sint quae delectus! */}
                    </div>
                </div>






            </Container>

        </div>
    );
};

export default BebefitOfYoga;