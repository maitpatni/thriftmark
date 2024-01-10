export const footer = {
  widgets: [
    {
      id: 3,
      widgetTitle: 'Quick Links',
      lists: [
        {
          id: 1,
          title: 'Home',
          path: '/',
        },
        {
          id: 2,
          title: 'link-about-us',
          path: 'about-us',
        },
        
        {
          id: 3,
          title: 'FAQs',
          path: '/faq',
        },
        {
          id: 4,
          title: 'Contact Us',
          path: 'contact-us',
        },
        
      ],
    },
   
   
    {
      id: 4,
      widgetTitle: 'Best Sellers',
      lists: [
        {
          id: 1,
          title: 'T-Shirts',
          path: '/search?category=tops-%26-shirts',
        },
        {
          id: 2,
          title: 'Shorts',
          path: '/search?category=shorts',
        },
        {
          id: 3,
          title: 'Jewellery',
          path: '/search?category=jewellery',
        },
        {
          id: 4,
          title: 'Bags',
          path: '/search?category=bags',
        },
      ],
    },
    {
      id: 5,
      widgetTitle: 'Trending',
      lists: [
        {
          id: 1,
          title: 'Under ₹500',
          path: '/search?price=0-500',
        },
        {
          id: 2,
          title: 'Activewear',
          path: '/search?category=activewear',
        },
        {
          id: 3,
          title: 'Pet Products',
          path: '/search?brand=pet-products',
        },
        {
          id: 4,
          title: 'Most Liked',
          path: '',
        },
      ],
    },


    {
      id: 6,
      widgetTitle: 'Policies',
      lists: [
     
        {
          id: 1,
          title: 'link-privacy',
          path: '/privacy',
        },
        {
          id: 2,
          title: 'link-terms',
          path: '/terms',
        },
        {
          id: 3,
          title: 'Cancellation & Returns',
          path: '/returns',
        },
        {
          id: 4,
          title: 'Shipping & Delivery',
          path: '/',
        },
      ],
    },
  ],
  payment: [
    {
      id: 1,
      path: '/',
      image: '/assets/images/payment/mastercard.png',
      name: 'payment-master-card',
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: '/',
      image: '/assets/images/payment/visa.png',
      name: 'payment-visa',
      width: 50,
      height: 20,
    },
    {
      id: 3,
      path: '/',
      image: '/assets/images/payment/paypal.png',
      name: 'payment-paypal',
      width: 76,
      height: 20,
    },
    {
      id: 4,
      path: '/',
      image: '/assets/images/payment/jcb.png',
      name: 'payment-jcb',
      width: 26,
      height: 20,
    },
    // {
    //   id: 5,
    //   path: "/",
    //   image: "/assets/images/payment/skrill.png",
    //   name: "payment-skrill",
    //   width: 39,
    //   height: 20,
    // },
  ],
};