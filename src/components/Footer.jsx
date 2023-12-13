import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container bg-white border border-gray-500 my-5 rounded-lg pt-5">
      <div className="max-w-6xl m-auto text-gray-900 flex flex-wrap justify-left">
        <div className="p-5 w-full">
          <div className="text-xs uppercase text-gray-900 font-bold mb-6">
            Getting Started
          </div>

          <Link to="/about" className="my-3 block text-gray-700 hover:text-gray-500 hover:underline text-sm font-medium duration-700">
            About
          </Link>

          <a href="#" className="my-3 block text-gray-700 hover:text-gray-500 hover:underline text-sm font-medium duration-700">
            Release Notes
          </a>

          <a href="#" className="my-3 block text-gray-700 hover:text-gray-500 hover:underline text-sm font-medium duration-700">
            Browser Support
          </a>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-900 text-sm 
            flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © Copyright 2023 shibilicv.
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <i className="cursor-pointer fa fa-facebook"></i>
            </a>

            <a href="#" className="w-6 mx-1">
              <i className="cursor-pointer fa fa-twitter"></i>
            </a>

            <a href="#" className="w-6 mx-1">
              <i className="cursor-pointer fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
