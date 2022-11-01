import { SignIn } from '../../components/SignIn/SignIn';

const Login = () => {
  return (
    <>
      <section className="p-4 flex flex-col justify-start items-center md:pt-10 min-h-min">
        <h2 className="text-4xl pb-4 font-bold">Sign In</h2>
        <div className="border rounded-xl bg-[#cfcfcf1d] shadow-lg shadow-slate-600/50 sm:w-80 xl:w-96">
          <SignIn />
        </div>
      </section>
    </>
  );
};

export default Login;
