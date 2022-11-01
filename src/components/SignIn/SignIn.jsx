import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSession } from '../../recoil/atoms/userSession';
import { userData } from '../../recoil/atoms/userData';
import { useRecoilState } from 'recoil';
import '../../styles/global/button.css';
import '../../styles/global/forms.css';

// TODO: add google login button add remember me feature and forgot password!

export const SignIn = () => {
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useRecoilState(userSession);
  const [user, setUser] = useRecoilState(userData);

  const history = useNavigate();

  // get user data
  useEffect(() => {
    if (sessionStorage.getItem('userLoggedIn')) {
      const getUser = async () => {
        const users = await axios
          .post(
            `http://localhost:8080/users`,
            { id: userLoggedIn?.id },
            { withCredentials: true }
          )
          .catch((err) => console.log(err));
        setUser(users?.data);
      };

      getUser();
    }
  }, [setUser, userLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    if (!email.value) {
      e.target.email.classList.add('border-red-500');
    }

    if (!password.value) {
      e.target.password.classList.add('border-red-500');
    }

    try {
      if (email && password) {
        await axios
          .post(
            'http://localhost:8080/users/login',
            {
              username: email.value,
              password: password.value,
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.status === 200) {
              setLoginError(false);
            }
            sessionStorage.setItem(
              'userLoggedIn',
              JSON.stringify(res.data.user.user)
            );
            setUserLoggedIn(res.data.user);
            history('/');
          })
          .catch((error) => {
            if (error.response.status === 404) {
              setLoginError(true);
              setErrorMessage(error.response.data.message);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col p-4" onSubmit={handleSubmit}>
      <div className="[&_input]:form__input focus:[&_input]:outline-none focus:[&_input]:shadow-outline [&_label]:form__label">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" />
      </div>
      {loginError === true ? (
        <p className="text-[#bd0000] text-xs pt-2">{errorMessage}</p>
      ) : null}
      <div className="flex flex-col justify-center items-center text-[#6b7290] text-xs gap-2 mb-3 sm:flex-row sm:justify-between sm:items-baseline">
        <div className="flex flex-row gap-2 mt-4 sm:items-center xl:mt-5">
          <p>Remember me</p>
          <input type="checkbox" />
        </div>
        <p>Forgot your Password?</p>
      </div>
      <button className="btn__primary">Sing In</button>
      {/* <p className="text-center mt-4">Or Continue With</p> */}
    </form>
  );
};
