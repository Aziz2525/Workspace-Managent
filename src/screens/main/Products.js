import React, { useState } from "react";
import Sidenav from "../components/Sidenav";

function Products() {
  const [urunTipiEkleModal, setUrunTipiEkleModal] = useState(false);
  const [urunTipiDuzenleModal, setUrunTipiDuzenleModal] = useState(false);
  const [urunAdi, setUrunAdi] = useState("");
  const [urunTipi, setUrunTipi] = useState("");
  const [urunTipleri, setUrunTipleri] = useState([]);
  const [urunTipiModalText, setUrunTipiModalText] = useState("");
  const [tumUrunler,setTumUrunler] = useState([])
  const [urunTipiDuzenleModalText, setUrunTipiDuzenleModalText] = useState("");
  const urunTipiEkle = () => {
    setUrunTipleri((urunTipleri) => [...urunTipleri, urunTipiModalText]);
    setUrunTipiEkleModal(false);
  };
  const urunTipiDuzenle = () => {
   
  };
  const urunEkle = () =>{
      alert('deneme')
  }
  return (
    <>
      <div className="flex">
        <Sidenav />
        <div
          className={`
                flex-auto 
                ${
                  urunTipiEkleModal || urunTipiDuzenleModal
                    ? "opacity-20"
                    : null
                }
                    h-screen
                    px-8
                    py-8
                    bg-white
                    dark:bg-gray-800 dark:border-gray-600
                    `}
        >
          <div className="flex justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white ml-5">
                Ürün Tanımlama
              </h2>
            </div>
            <div className="flex">
              <button
                className="
                            text-purple-500
                            bg-transparent
                            border border-solid border-purple-500
                            hover:bg-purple-500 hover:text-white
                            active:bg-purple-600
                            font-bold
                            uppercase
                            text-xs
                            px-4
                            py-2
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                            flex justify-between
                        "
                type="button"
                onClick={() => setUrunTipiDuzenleModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Ürün Tipi Düzenle
              </button>
              <button
                className="
                            text-purple-500
                            bg-transparent
                            border border-solid border-purple-500
                            hover:bg-purple-500 hover:text-white
                            active:bg-purple-600
                            font-bold
                            uppercase
                            text-xs
                            px-4
                            py-2
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                            flex justify-between
                        "
                type="button"
                onClick={() => setUrunTipiEkleModal(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clip-rule="evenodd"
                  />
                </svg>
                Ürün Tipi
              </button>
            </div>
          </div>

          <div className="border-b-2 mt-6"></div>
          <div className="flex">
            <div className="flex-1 p-3">
              <div className="p-4 shadow-md rounded-md text-left w-full mt-10">
                <label className="block">
                  <span className="text-gray-600 font-semibold">Ürün Adı</span>
                  <input className="form-input mt-1 block w-full font-semibold p-2 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 focus:rounded-sm" onChange={(e)=>setUrunAdi(e.target.value)}/>
                </label>

                <div className="mt-4">
                  <span className="text-gray-600 font-semibold">Ürün Tipi</span>
                  <div className="mt-2">
                    {urunTipleri.map((data, index) => {
                      return (
                        <label
                          className="inline-flex items-center ml-2"
                          key={index}
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            name="accountType"
                            value="personal"
                          />
                          <span className="ml-2">{data}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div></div>
                  <button
                    className="
                                bg-green-500
                                text-white
                                active:bg-green-600
                                font-bold
                                uppercase
                                text-sm
                                mt-7
                                px-6
                                py-3
                                rounded
                                shadow
                                hover:shadow-lg
                                outline-none
                                focus:outline-none
                                mr-1
                                mb-1
                                ease-linear
                                transition-all
                                duration-150
                            "
                    type="button"
                    onClick={()=>urunEkle()}
                  >
                    <i className="fas fa-gem"></i> Ekle
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="p-4 shadow-md rounded-md text-left w-full mt-10">
                <h2 className="text-1xl font-semibold text-gray-800 dark:text-white">
                  Tüm Ürünler
                </h2>
                <div
                  className="
    my-3
    block
    text-sm text-left text-purple-600
    bg-purple-500 bg-opacity-10
    border border-purple-400
    h-12
    flex
    items-center
    p-4
    rounded-md
  "
                  role="alert"
                >
                  Henüz bir ürün eklemediniz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
                ${
                  !urunTipiEkleModal
                    ? "hidden"
                    : "animate__animated animate__jackInTheBox "
                }
                     
               
    flex  
    overflow-x-hidden overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    justify-center
    items-center
    `}
        id="modal-example-regular"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div
            className={`
      
        border-2
        rounded-lg
        shadow-lg
        relative
        flex flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
        `}
          >
            <div
              className="
          flex
          items-start
          justify-between
          p-5
          border-b border-solid border-gray-200
          rounded-t 
        "
            >
              <h3 className="text-3xl font-semibold">Ürün Tipi Ekle</h3>
              <button
                className="
            p-1
            ml-auto
            bg-transparent
            border-0
            text-gray-300
            float-right
            text-3xl
            leading-none
            font-semibold
            outline-none
            focus:outline-none
          "
                onclick="toggleModal('modal-example-regular')"
              >
                <span
                  className="
              bg-transparent
              h-6
              w-6
              text-2xl
              block
              outline-none
              focus:outline-none
            "
                >
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <input
                onChange={(e) => setUrunTipiModalText(e.target.value)}
                className="form-input mt-1 block w-full font-semibold p-2 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 focus:rounded-sm"
              />
            </div>
            <div
              className="
          flex
          items-center
          justify-end
          p-6
          border-t border-solid border-gray-200
          rounded-b
        "
            >
              <button
                className="
            text-purple-500
            background-transparent
            font-bold
            uppercase
            px-6
            py-2
            text-sm
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
                type="button"
                onClick={() => setUrunTipiEkleModal(false)}
              >
                Kapat
              </button>
              <button
                className="
            bg-purple-500
            text-white
            active:bg-purple-600
            font-bold
            uppercase
            text-xs
            px-4
            py-2
            rounded
            shadow
            hover:shadow-md
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
                type="button"
                onClick={() => urunTipiEkle()}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
                ${
                  !urunTipiDuzenleModal
                    ? "hidden"
                    : "animate__animated animate__jackInTheBox "
                }
                     
               
    flex  
    overflow-x-hidden overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    justify-center
    items-center
    `}
        id="modal-example-regular"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div
            className={`
      
        border-2
        rounded-lg
        shadow-lg
        relative
        flex flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
        `}
          >
            <div
              className="
          flex
          items-start
          justify-between
          p-5
          border-b border-solid border-gray-200
          rounded-t 
        "
            >
              <h3 className="text-3xl font-semibold">Ürün Tipi Düzenle</h3>
              <button
                className="
            p-1
            ml-auto
            bg-transparent
            border-0
            text-gray-300
            float-right
            text-3xl
            leading-none
            font-semibold
            outline-none
            focus:outline-none
          "
                onclick="toggleModal('modal-example-regular')"
              >
                <span
                  className="
              bg-transparent
              h-6
              w-6
              text-2xl
              block
              outline-none
              focus:outline-none
            "
                >
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
                {
                    urunTipleri.map((data,index)=>{
                        return(
                            <input value={data} className=""/>
                        )
                    })
                }
            </div>
            <div
              className="
          flex
          items-center
          justify-end
          p-6
          border-t border-solid border-gray-200
          rounded-b
        "
            >
              <button
                className="
            text-purple-500
            background-transparent
            font-bold
            uppercase
            px-6
            py-2
            text-sm
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
                type="button"
                onClick={() => setUrunTipiDuzenleModal(false)}
              >
                Kapat
              </button>
              <button
                className="
            bg-purple-500
            text-white
            active:bg-purple-600
            font-bold
            uppercase
            text-xs
            px-4
            py-2
            rounded
            shadow
            hover:shadow-md
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
                type="button"
                onClick={() => urunTipiDuzenle()}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
