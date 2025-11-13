import React, { useState, useEffect, useRef } from 'react';
import ReactCountryFlag from "react-country-flag";
import {
  Menu,
  ChevronDown,
  Globe,
} from 'lucide-react';

function SubNav() {
  // -----------------------------------------------------
  // 2. ADD COMPONENT LOGIC (Inside SubNav function)
  // -----------------------------------------------------
  // --- Country Data (Using Emojis as flag image placeholders) ---
const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia (Plurinational State of)', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cabo Verde', code: 'CV' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Congo (the Democratic Republic of the)', code: 'CD' },
  { name: 'Congo (the)', code: 'CG' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Côte d’Ivoire', code: 'CI' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Eswatini', code: 'SZ' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Greece', code: 'GR' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran (Islamic Republic of)', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'Korea (the Republic of)', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Lao People’s Democratic Republic', code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia (Federated States of)', code: 'FM' },
  { name: 'Moldova (the Republic of)', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montenegro', code: 'ME' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'North Macedonia', code: 'MK' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Republic of Korea', code: 'KR' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation', code: 'RU' },
  { name: 'Rwanda', code: 'RW' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia', code: 'RS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Sudan', code: 'SS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania, United Republic of', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Türkiye', code: 'TR' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom of Great Britain and Northern Ireland', code: 'GB' },
  { name: 'United States of America', code: 'US' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela (Bolivarian Republic of)', code: 'VE' },
  { name: 'Viet Nam', code: 'VN' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' }
];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 3️⃣ Now useEffect can safely use countries
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const detected = countries.find((c) => c.code === data.country_code);
        if (detected) setSelectedCountry(detected);
      })
      .catch((err) => console.warn("Geo-location failed:", err));
  }, ); // countries is constant, no need to put in dependency array


  // Hook to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };
  // -----------------------------------------------------
  // END Component Logic
  // -----------------------------------------------------

  return (
    // The bar container: Responsive padding and layout
    <div className='border-b border-gray-200 bg-white mt-1 px-20'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between py-2 lg:py-0 h-auto lg:h-14 px-4 sm:px-6'>

        {/* Left Links Group - Desktop (Horizontal) | Mobile (Stacked/Hidden) */}
        <div className='flex flex-wrap lg:flex-nowrap items-center space-x-4 lg:space-x-8 text-sm font-medium text-gray-700 w-full lg:w-auto'>

          {/* All Category Link (Always prominent) */}
          <a href="#" className='flex items-center space-x-2 p-2 -ml-2 rounded-lg hover:bg-blue-400 hover:text-white transition whitespace-nowrap'>
            <Menu size={20} />
            <span>All category</span>
          </a>

          {/* Additional Links - Hidden on Mobile, Shown on Desktop */}
          <div className='hidden lg:flex items-center space-x-8'>
            <a href="#" className='p-2 -ml-2 rounded-lg hover:bg-blue-400 hover:text-white transition whitespace-nowrap'>Hot offers</a>
            <a href="#" className='p-2 -ml-2 rounded-lg hover:bg-blue-400 hover:text-white transition whitespace-nowrap'>Gift boxes</a>
            <a href="#" className='p-2 -ml-2 rounded-lg hover:bg-blue-400 hover:text-white transition whitespace-nowrap'>Projects</a>

            {/* Menu Item Dropdown */}
            <div className='flex items-center p-2 -ml-2 rounded-lg group cursor-pointer hover:bg-blue-400 hover:text-white transition'>
              <span>Menu item</span>
              {/* <ChevronDown size={16} className='ml-1 transition-transform  group-hover:rotate-180' /> */}
            </div>

            {/* Help Dropdown */}
            <div className='flex items-center p-2 -ml-2 rounded-lg group cursor-pointer hover:bg-blue-400 hover:text-white transition'>
              <span>Help</span>
              <ChevronDown size={16} className='ml-1 transition-transform group-hover:rotate-180' />
            </div>
          </div>
        </div>

        {/* Right Utility Group - Moves below links on Mobile, Aligned Right on Desktop */}
        <div className='flex items-center justify-between lg:justify-end space-x-4 sm:space-x-6 text-sm text-gray-700 w-full lg:w-auto mt-2 lg:mt-0 pt-2 lg:pt-0 border-t border-gray-100 lg:border-t-0'>

          {/* Language/Currency Dropdown */}
          <div className='flex items-center group cursor-pointer'>
            <span className='font-semibold text-black'>English, USD</span>
            <ChevronDown size={16} className=' ml-1 transition-transform group-hover:rotate-180' />
          </div>

          {/* 3. REPLACE SHIP TO DROPDOWN */}
          {/* Ship to Dropdown (Custom Interactive Selector) */}
          <div className='relative' ref={dropdownRef}>
            <button
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              className='flex items-center group cursor-pointer p-1 rounded-lg hover:bg-gray-50 transition'
              aria-expanded={isCountryDropdownOpen}
            >
              <span className='font-semibold text-black'>Ship to</span>
              {/* Display the selected country's flag here */}
              <span className='ml-2'>
                <ReactCountryFlag
                  countryCode={selectedCountry.code}
                  svg
                  style={{ width: '1.5em', height: '1.5em', borderRadius: '4px' }}
                  title={selectedCountry.name}
                />
              </span>
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Panel (Only visible when isCountryDropdownOpen is true) */}
            {isCountryDropdownOpen && (
              <div className='absolute right-0 mt-2 w-56 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-20 overflow-y-auto max-h-60'>

                <div className='py-1'>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleCountrySelect(country)}
                      className={`flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition ${selectedCountry.code === country.code ? 'bg-blue-100 text-blue-800' : ''
                        }`}
                    >
                      <div className="flex items-center">
                        <span className='text-xl mr-3'>
                          <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{ width: '1.5em', height: '1.5em', borderRadius: '4px' }}
                            title={country.name}
                          />
                        </span>
                        {country.name}
                      </div>
                      {selectedCountry.code === country.code && (
                        <span className='text-sm font-semibold text-blue-600'>Selected</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNav;