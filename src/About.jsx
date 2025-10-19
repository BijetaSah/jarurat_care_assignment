function About() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img src="hero_jarurat.png" alt="Image of Jarurat Volunteer" />
      <h1 className="text-[42px] text-center font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        About Us
      </h1>
      <p className="text-center mt-2 text-lg">
        At Jarurat Care Foundation, we understand that facing cancer can be
        overwhelming, and no one should have to go through it alone. That’s why
        we’ve made it our mission to stand by those affected by cancer, offering
        unwavering support every step of the way. We’re a community-driven NGO
        dedicated to bringing hope, care, and strength to patients, caregivers,
        and healthcare professionals across India.
      </p>
      <button className=" px-6 hover:cursor-pointer py-2 text-white capitalize font-semibold rounded-full bg-blue-600 text-lg hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition-all duration-200">
        <a href="#">seek cancer support</a>
      </button>
    </div>
  );
}

export default About;
