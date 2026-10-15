// Edit this file to change the text on your website.
const content = {
  brand: 'Avinash Mobile Store',
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact us' },
  ],
  home: {
    headline: 'Find the right phone for your everyday.',
    subhead:
      'Your local stop for mobile phones, useful accessories and friendly help in Indore. Get in touch with Avinash to ask about what you need.',
    cta: 'Visit or contact us',
    services: [
      { title: 'Mobile phones', text: 'Explore phones to suit your needs and budget. Ask us about available models.' },
      { title: 'Accessories', text: 'Find everyday essentials and accessories for your mobile.' },
      { title: 'Personal service', text: 'Get help choosing a phone from Avinash, your local mobile shop owner.' },
    ],
  },
  explore: {
    eyebrow: 'A few customer favourites',
    headline: 'Explore phones & accessories.',
    text: 'Browse a few popular picks. Prices are indicative and may vary; contact us to check local availability.',
    products: [
      {
        name: 'Apple iPhone 15',
        category: 'Smartphones',
        price: 'From ₹59,900',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Modern smartphone with a bright display',
        link: 'https://www.amazon.in/s?k=Apple+iPhone+15',
      },
      {
        name: 'Samsung Galaxy A55 5G',
        category: 'Smartphones',
        price: 'From ₹39,999',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Smartphone viewed from the back',
        link: 'https://www.amazon.in/s?k=Samsung+Galaxy+A55+5G',
      },
      {
        name: 'Nothing Phone (2a)',
        category: 'Smartphones',
        price: 'From ₹23,999',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'A smartphone ready for everyday use',
        link: 'https://www.amazon.in/s?k=Nothing+Phone+2a',
      },
      {
        name: 'Wireless earbuds',
        category: 'Audio',
        price: 'From ₹1,499',
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Compact wireless earbuds',
        link: 'https://www.amazon.in/s?k=wireless+earbuds',
      },
      {
        name: 'USB-C fast charger',
        category: 'Charging',
        price: 'From ₹799',
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Phone charger and charging cable',
        link: 'https://www.amazon.in/s?k=USB+C+fast+charger',
      },
      {
        name: 'Protective phone case',
        category: 'Accessories',
        price: 'From ₹399',
        image: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Protective case for a mobile phone',
        link: 'https://www.amazon.in/s?k=mobile+phone+case',
      },
    ],
  },
  about: {
    headline: 'Your neighbourhood mobile shop in Indore.',
    paragraphs: [
      'Avinash owns and runs this mobile shop in Indore, helping customers find phones and accessories that work for them.',
      'Whether you are comparing phones or looking for a mobile accessory, get in touch or stop by the shop to ask what is available.',
    ],
    facts: [
      { value: 'Avinash', label: 'shop owner' },
      { value: 'Indore', label: 'Madhya Pradesh' },
      { value: 'Phones', label: 'and mobile accessories' },
    ],
  },
  contact: {
    headline: 'Looking for a phone or accessory?',
    text: 'Send Avinash a message and let us know what you are looking for.',
    details: [
      { label: 'Owner', value: 'Avinash' },
      { label: 'Location', value: 'Indore, Madhya Pradesh' },
    ],
  },
  footer: '© ' + new Date().getFullYear() + ' Avinash Mobile Store. All rights reserved.',
};

export default content;
