import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div class="flex items-center justify-center h-screen bg-gray-200">
  <div class="container">
    <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
      <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          BOOK<span class="text-indigo-600">SHELF</span>
        </h2>
        <h3 class='text-xl md:text-3xl mt-10'>Coming Soon</h3>

      </div>
      <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3">
          <a href="https://www.facebook.com/QuickToolz" title="Quicktoolz On Facebook"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Facebook</span>
          </a>
        </div>



      </div>
    </div>
  </div>
</div>
  );
}