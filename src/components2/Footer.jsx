/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ShoppingBag, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronDown } from 'lucide-react';


const Footer = () => {
    // store selected language code (ISO-like) instead of name
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    // languages now include iso for flagcdn (expanded list)
    const languages = [
        { code: 'en', name: 'English', iso: 'us' },
        { code: 'en-GB', name: 'English (UK)', iso: 'gb' },
        { code: 'es', name: 'Español', iso: 'es' },
        { code: 'fr', name: 'Français', iso: 'fr' },
        { code: 'de', name: 'Deutsch', iso: 'de' },
        { code: 'it', name: 'Italiano', iso: 'it' },
        { code: 'pt', name: 'Português (PT)', iso: 'pt' },
        { code: 'pt-BR', name: 'Português (BR)', iso: 'br' },
        { code: 'ru', name: 'Русский', iso: 'ru' },
        { code: 'ja', name: '日本語', iso: 'jp' },
        { code: 'ko', name: '한국어', iso: 'kr' },
        { code: 'zh', name: '中文 (简体)', iso: 'cn' },
        { code: 'zh-TW', name: '中文 (繁體)', iso: 'tw' },
        { code: 'hi', name: 'हिन्दी', iso: 'in' },
        { code: 'bn', name: 'বাংলা', iso: 'bd' },
        { code: 'ur', name: 'اردو', iso: 'pk' },
        { code: 'ar', name: 'العربية', iso: 'sa' },
        { code: 'fa', name: 'فارسی', iso: 'ir' },
        { code: 'tr', name: 'Türkçe', iso: 'tr' },
        { code: 'nl', name: 'Nederlands', iso: 'nl' },
        { code: 'sv', name: 'Svenska', iso: 'se' },
        { code: 'no', name: 'Norsk', iso: 'no' },
        { code: 'da', name: 'Dansk', iso: 'dk' },
        { code: 'fi', name: 'Suomi', iso: 'fi' },
        { code: 'pl', name: 'Polski', iso: 'pl' },
        { code: 'cs', name: 'Čeština', iso: 'cz' },
        { code: 'hu', name: 'Magyar', iso: 'hu' },
        { code: 'ro', name: 'Română', iso: 'ro' },
        { code: 'el', name: 'Ελληνικά', iso: 'gr' },
        { code: 'he', name: 'עברית', iso: 'il' },
        { code: 'id', name: 'Bahasa Indonesia', iso: 'id' },
        { code: 'vi', name: 'Tiếng Việt', iso: 'vn' },
        { code: 'th', name: 'ไทย', iso: 'th' },
        { code: 'ms', name: 'Bahasa Melayu', iso: 'my' },
        { code: 'tl', name: 'Filipino', iso: 'ph' }
    ];

    const footerLinks = {
        about: [
            { label: 'About Us', href: '#' },
            { label: 'Find store', href: '#' },
            { label: 'Categories', href: '#' },
            { label: 'Blogs', href: '#' }
        ],
        partnership: [
            { label: 'About Us', href: '#' },
            { label: 'Find store', href: '#' },
            { label: 'Categories', href: '#' },
            { label: 'Blogs', href: '#' }
        ],
        information: [
            { label: 'Help Center', href: '#' },
            { label: 'Money Refund', href: '#' },
            { label: 'Shipping', href: '#' },
            { label: 'Contact us', href: '#' }
        ],
        forUsers: [
            { label: 'Login', href: '#' },
            { label: 'Register', href: '#' },
            { label: 'Settings', href: '#' },
            { label: 'My Orders', href: '#' }
        ]
    };

    const socialLinks = [
        { Icon: Facebook, href: '#', label: 'Facebook' },
        { Icon: Twitter, href: '#', label: 'Twitter' },
        { Icon: Linkedin, href: '#', label: 'LinkedIn' },
        { Icon: Instagram, href: '#', label: 'Instagram' },
        { Icon: Youtube, href: '#', label: 'YouTube' }
    ];

    // helper to get selected language object
    const currentLang = languages.find((l) => l.code === selectedLanguage) || languages[0];

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-6 gap-3 items-start">
                    {/* Brand Column (unchanged) */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-1 mb-4">
                            <div className="bg-blue-500 p-2 rounded-lg">
                                <ShoppingBag className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-blue-500">Brand</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4 max-w-xs">
                            Best information about the company gies here but now lorem ipsum is
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side: a compact nested grid for About, Partnership, Information, For users and Get app */}
                    <div className="col-span-4 grid grid-cols-5 gap-4">
                        {/* About Column */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                            <ul className="space-y-2">
                                {footerLinks.about.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Partnership Column */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Partnership</h3>
                            <ul className="space-y-2">
                                {footerLinks.partnership.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Information Column */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Information</h3>
                            <ul className="space-y-2">
                                {footerLinks.information.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* For Users Column */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">For users</h3>
                            <ul className="space-y-2 mb-6">
                                {footerLinks.forUsers.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Get App Column (now its own column beside the other parts) */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Get app</h3>
                            <div className="space-y-2">
                                <a href="#" className="block">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                        alt="Download on App Store"
                                        className="h-10 w-auto"
                                    />
                                </a>
                                <a href="#" className="block">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Get it on Google Play"
                                        className="h-10 w-auto"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile View - changed: make About+Partnership side-by-side, Information+Users side-by-side,
            Get app centered with App Store left & Play Store right */}
                <div className="md:hidden grid gap-6">
                    {/* Brand - spans full width */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-blue-500 p-2 rounded-lg">
                                <ShoppingBag className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-blue-500">Brand</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Best information about the company gies here but now lorem ipsum is
                        </p>
                        <div className="flex gap-2 px-9">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* About + Partnership side-by-side */}
                    <div className="grid grid-cols-2 gap-4 px-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                            <ul className="space-y-2">
                                {footerLinks.about.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Partnership</h3>
                            <ul className="space-y-2">
                                {footerLinks.partnership.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Information + For users side-by-side */}
                    <div className="grid grid-cols-2 gap-4 px-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Information</h3>
                            <ul className="space-y-2">
                                {footerLinks.information.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">For users</h3>
                            <ul className="space-y-2">
                                {footerLinks.forUsers.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-gray-600">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Get App - centered; App Store left, Play Store right */}
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center justify-center text-3xl">Get app</h3>
                    <div className="flex justify-center gap-4">

                        <a href="#" className="block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="Download on App Store"
                                className="h-10 w-auto"
                            />
                        </a>
                        <a href="#" className="block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left: copyright */}
            <div className="flex items-center">
              <p className="text-sm text-gray-600">© 2023 Ecommerce.</p>
            </div>

            {/* Right: language selector pinned to far right */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-md hover:bg-gray-50 transition-colors"
              >
                <img
                  src={`https://flagcdn.com/w20/${currentLang.iso}.png`}
                  alt={`${currentLang.name} flag`}
                  className="w-5 h-4 rounded-sm"
                />
                <span className="text-sm text-gray-700">{currentLang.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 bottom-full mb-2 bg-white border rounded-md shadow-lg py-1 min-w-[200px] z-50">
                  <div className="max-h-56 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                      >
                        <img
                          src={`https://flagcdn.com/w20/${lang.iso}.png`}
                          alt={`${lang.name} flag`}
                          className="w-5 h-4 rounded-sm"
                        />
                        <span className="text-sm text-gray-700">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
        </footer>
    );
};

export default Footer;