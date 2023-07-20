import React from 'react';

export const TopNav = () => {
  return (
    <nav>
      <ul className="flex flex-row text-sm">
        <li>
          <a
            className="mx-2 px-2 py-1 text-base rounded-full text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500"
            href="https://github.com/"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="mx-2 px-2 py-1 text-base rounded-full text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500"
            href="https://github.com/"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className="mx-2 px-2 py-1 text-base rounded-full text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500"
            href="https://github.com/"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="mx-2 px-2 py-1 text-base rounded-full text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500"
            href="https://github.com/"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="mx-2 px-2 py-1 text-base rounded-full text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500"
            href="https://github.com/"
          >
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
};
