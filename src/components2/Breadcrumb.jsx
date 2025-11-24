import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Clothings', path: '/clothings' },
    { name: "Men's wear", path: '/clothings/mens-wear' },
    { name: 'Summer clothing', path: '/clothings/mens-wear/summer' }
  ];

  return (
    <div className="hidden lg:block bg-teal-50 py-4 px-14 mx-3 ">
      <nav className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.name} className="flex items-center space-x-2">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            <a
              href={breadcrumb.path}
              className={`${
                index === breadcrumbs.length - 1
                  ? 'text-gray-500 '
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors`}
            >
              {breadcrumb.name}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;