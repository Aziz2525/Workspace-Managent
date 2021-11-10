import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginBtn = () => {
    dispatch({
      type: 'LOGIN',
      payload: {
        username: username,
        isLogin: true,
        authority: "Yetkili",
      }
    })
  };
  return (
    <div class="flex h-screen bg-gray-800">
      <div class="w-full max-w-xs m-auto">
        <p className="font-semibold text-white">WORKSPACE MANAGEMENT</p>

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Kullanıcı Adı
            </label>
            <input
              class="shadow Loginearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="username"
              type="text"
              placeholder="Kullanıcı Adı"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Şifre
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="">
            <button
              class=" hover:bg-green-900 bg-green-700 text-white font-bold py-1.5 px-5 w-full rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => loginBtn()}
            >
              Giriş Yap
            </button>
            <a
              class="inline-block align-baseline text-sm mt-3 text-gray-500 hover:text-gray-800"
              href="#"
            >
              Şifreni mi unuttun ?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-400 text-xs">
          &copy;2020 Apithon Software. Her hakkı saklıdır.
        </p>
      </div>
    </div>
  );
}

export default Login;
