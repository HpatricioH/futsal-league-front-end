import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../../styles/global/forms.css';

export const SignUp = () => {
  const [registerError, setRegisterError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, password } = e.target;

    if (!userName.value) {
      e.target.userName.classList.add('border-red-500');
    }
    if (!email.value) {
      e.target.email.classList.add('border-red-500');
    }
    if (!password.value) {
      e.target.password.classList.add('border-red-500');
    }

    try {
      if (userName && email && password) {
        await axios
          .post('http://localhost:8080/users/register', {
            user_name: userName.value,
            email: email.value,
            password: password.value,
          })
          .then((res) => {
            if (res.status === 201) {
              setRegisterError(false);
            }

            history('/login', { replace: true });
          })
          .catch((err) => {
            if (err.response.status === 400) {
              setRegisterError(true);
              setErrorMessage(err.response.data.errorDetails);
            }
          });
      }
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <>
      <h2 className="text-4xl pb-4 font-bold">Register</h2>
      <div className="border rounded-xl bg-[#cfcfcf1d] shadow-lg shadow-slate-600/50 sm:w-80 xl:w-96">
        <form
          className="flex flex-col p-4 [&_input]:form__input focus:[&_input]:outline-none focus:[&_input]:shadow-outline [&_label]:form__label"
          onSubmit={handleSubmit}
        >
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="User Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          {registerError === true ? (
            <span className="text-[#bd0000] text-xs pt-2">{errorMessage}</span>
          ) : null}

          <button className="btn__primary">Register</button>
        </form>
      </div>
    </>
  );
};
