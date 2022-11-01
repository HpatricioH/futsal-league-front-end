import teamOne from '../../assets/images/team1.jpg';
import teamTwo from '../../assets/images/team2.jpg';
import teamThree from '../../assets/images/team3.jpg';

const Ourteam = () => {
  return (
    <>
      <section className="xl:m-auto xl:w-[75%] 2xl:w-[65%]" id="ourTeam">
        <h2 className="uppercase font-extrabold pt-6 pb-2 text-xl self-start md:text-3xl md:pt-10 lg:pb-6 lg:px-[2.4rem] xl:pt-14 xl:pl-[0] 2xl:pt-16">
          our team
        </h2>

        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between md:justify-evenly xl:gap-[5rem]">
          <div className="relative h-72 w-[18.1rem] rounded-xl bg-[#7b9ce71d] shadow-lg shadow-slate-600/50 lg:h-[20rem] lg:w-[21rem] xl:h-[22rem] xl:w-[24rem] 2xl:h-[26rem] 2xl:w-[29rem]">
            <div className="absolute bg-cover top-5 left-[5.2rem] lg:left-[6.2rem] xl:left-[6.7rem] 2xl:left-[8.7rem]">
              <img
                className="h-[11rem] w-[12rem] rounded-xl object-fill lg:h-[12.5rem] lg:w-[14rem] xl:h-[14rem] xl:w-[16.5rem] 2xl:h-[17rem] 2xl:w-[18.8rem]"
                src={teamThree}
                alt="coaches talking"
              />
            </div>
            <div className="absolute left-[1rem] top-[3rem] lg:left-[1.5rem] xl:left-[1rem] 2xl:left-[1.5rem]">
              <img
                className="h-[6.5rem] w-[7.5rem] rounded-xl object-fill lg:h-[6.8rem] lg:w-[8.5rem] xl:h-[7.8rem] xl:w-[9.5rem] 2xl:h-[8.8rem] 2xl:w-[10.5rem]"
                src={teamTwo}
                alt="referee and player"
              />
            </div>
            <div className="absolute top-[11rem] left-[3.5rem] lg:top-[12rem] lg:left-[4.5rem] xl:top-[13rem] 2xl:top-[15rem] 2xl:left-[6.5rem]">
              <img
                className="h-[6rem] w-[12rem] object-cover rounded-xl lg:h-[6.8rem] lg:w-[13rem] xl:h-[7rem] xl:w-[14rem] 2xl:h-[8.5rem] 2xl:w-[15.8rem]"
                src={teamOne}
                alt="coach with team"
              />
            </div>
          </div>
          <div className="pt-[1.5rem] text-center sm:w-1/2 lg:w-[40%]">
            <p className="font-extrabold text-lg md:text-xl lg:text-2xl">
              We believe the Waterloo Region has a{' '}
              <span className="capitalize text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9f07e0] to-[#2c4ec6] md:text-2xl">
                walth of talent
              </span>{' '}
              in coaches and players
            </p>
            <p className="pt-4 text-[#6b7290] md:text-lg">
              Our team always seek to make home for those that want to develop
              and mature that talent onto grater opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteam;
