export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
        BOOKSHELF
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
        bookshelf เว็บไชต์ที่รวบรวมหนังสือน่าอ่านและกำลังเป็นที่นิยม
          <br />
          ต้องการหาหนังสืออ่านไว้ใจเราได้เลย
        </h2>
        <div className="ml-6 text-center">

          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent mr-4 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="register"
          >
            <div className="flex text-lg">
              <span className="justify-center">สมัครเลย</span>
            </div>
          </a>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt="Placeholder Image"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/96/40/00/the-new-fiction-table.jpg?w=1200&h=-1&s=1"
        ></img>
      </div>
      
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
