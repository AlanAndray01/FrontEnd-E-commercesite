import React from 'react';

const Supplier = () => {
  const suppliers = [
    { id: 1, country: 'Arabic Emirates', website: 'shopname.ae' },
    { id: 2, country: 'Australia', website: 'shopname.ae' },
    { id: 3, country: 'United States', website: 'shopname.ae' },
    { id: 4, country: 'Russia', website: 'shopname.ru' },
    { id: 5, country: 'Italy', website: 'shopname.it' },
    { id: 6, country: 'Denmark', website: 'denmark.com.dk' },
    { id: 7, country: 'France', website: 'shopname.com.fr' },
    { id: 8, country: 'Arabic Emirates', website: 'shopname.ae' },
    { id: 9, country: 'China', website: 'shopname.ae' },
    { id: 10, country: 'Great Britain', website: 'shopname.co.uk' }
  ];

  // mapping from displayed country name -> ISO 3166-1 alpha-2 (lowercase) for flagcdn
  const countryToIso = {
    'Arabic Emirates': 'ae',
    'Australia': 'au',
    'United States': 'us',
    'Russia': 'ru',
    'Italy': 'it',
    'Denmark': 'dk',
    'France': 'fr',
    'China': 'cn',
    'Great Britain': 'gb'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 -my-6 sm:px-6 lg:px-10 mb-6">
      <div className=" rounded-lg px-2">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Suppliers by region</h2>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-x-8 gap-y-4">
          {suppliers.map((supplier) => {
            const code = countryToIso[supplier.country];
            const flagUrl = code ? `https://flagcdn.com/w40/${code}.png` : null;

            return (
              <a
                key={supplier.id}
                href="#"
                className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                {/* Flag image */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  {flagUrl ? (
                    <img
                      src={flagUrl}
                      alt={`${supplier.country} flag`}
                      className="w-8 h-6 object-cover rounded-sm"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-2xl">🏳️</span>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {supplier.country}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">
                    {supplier.website}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto scrollbar-hide gap-4 pb-2 -mx-2 px-2">
          {suppliers.map((supplier) => {
            const code = countryToIso[supplier.country];
            const flagUrl = code ? `https://flagcdn.com/w40/${code}.png` : null;

            return (
              <a
                key={supplier.id}
                href="#"
                className="flex-shrink-0 w-44 flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors border border-gray-200"
              >
                {/* Flag image */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  {flagUrl ? (
                    <img
                      src={flagUrl}
                      alt={`${supplier.country} flag`}
                      className="w-8 h-6 object-cover rounded-sm"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-2xl">🏳️</span>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {supplier.country}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">
                    {supplier.website}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Supplier;