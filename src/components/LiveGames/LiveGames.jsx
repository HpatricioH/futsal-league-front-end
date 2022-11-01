import React from 'react';

const VideoAudience = () => {
  return (
    <section className="container mx-auto justify-center items-center text-center mt-2 ">
      <h1 className="uppercase font-extrabold pt-6 pb-2 text-xl self-start md:text-3xl md:pt-10 lg:pb-6 xl:pt-14 2xl:pt-16">
        video stream
      </h1>
      <div className="flex justify-center mt-1">
        <iframe
          className="aspect-[16/9] w-full px-4 lg:w-[45.5rem] xl:w-[55.5rem]"
          src="https://www.youtube.com/embed/pdqQ78XN128"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoAudience;
