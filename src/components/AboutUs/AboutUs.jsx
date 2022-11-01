import aboutUsOne from '../../assets/images/about-us.jpg';
import aboutUsTwo from '../../assets/images/about-us2.jpg';
import aboutUsThree from '../../assets/images/about-us3.jpg';

const AboutUs = () => {
  return (
    <>
      <section className="xl:m-auto xl:w-[75%] 2xl:w-[65%]" id="about">
        <h2 className="uppercase font-extrabold pt-6 pb-2 text-xl self-start md:text-3xl md:pt-10 lg:pb-6 lg:px-[2.4rem] xl:pt-14 xl:pl-[0] 2xl:pt-16">
          about us
        </h2>

        <div className="flex flex-col justify-center items-center sm:flex-row-reverse sm:justify-between md:justify-evenly xl:gap-[5rem]">
          <div className="relative h-72 w-[18.1rem] rounded-xl bg-[#7b9ce71d] shadow-lg shadow-slate-600/50 lg:h-[20rem] lg:w-[21rem] xl:h-[22rem] xl:w-[24rem] 2xl:h-[26rem] 2xl:w-[29rem]">
            <div className="absolute bg-cover top-8 left-5 xl:left-9">
              <img
                className="h-[8.7rem] w-[12rem] rounded-xl object-fill lg:h-[9.5rem] lg:w-[13rem]  xl:h-[10.5rem] xl:w-[14rem] 2xl:h-[12.5rem] 2xl:w-[16rem]"
                src={aboutUsOne}
                alt="goal net and ball"
              />
            </div>
            <div className="absolute left-[8rem] top-[8rem] lg:left-[8.7rem] xl:left-[9.9rem] 2xl:left-[13rem]">
              <img
                className="h-[6.5rem] w-[9rem] rounded-xl object-fill lg:h-[7.5rem] lg:w-[11.5rem] xl:h-[8.5rem] xl:w-[12.5rem] 2xl:h-[10.5rem] 2xl:w-[14.5rem]"
                src={aboutUsTwo}
                alt="soccer shoes"
              />
            </div>
            <div className="absolute top-[12rem] left-10 lg:top-[13.2rem] xl:top-[14.2rem] 2xl:top-[16.2rem] 2xl:left-[4.5rem]">
              <img
                className="h-[4rem] w-[10rem] object-cover rounded-xl lg:h-[5rem] lg:w-[12rem] xl:h-[6rem] xl:w-[13rem] 2xl:h-[8rem] 2xl:w-[15rem]"
                src={aboutUsThree}
                alt="kid in a soccer field"
              />
            </div>
          </div>
          <div className="pt-[1.5rem] text-center sm:w-1/2 lg:w-[40%]">
            <p className="font-extrabold text-lg md:text-xl lg:text-2xl">
              We are a dedicated{' '}
              <span className="capitalize text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9f07e0] to-[#2c4ec6] md:text-2xl">
                football-first
              </span>{' '}
              community of passionate coaches and parents.
            </p>
            <p className="pt-4 text-[#6b7290] md:text-lg">
              Our sole purpose is to elevate each player to reach his or her
              maximum level.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
