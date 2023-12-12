export const menu = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/search?category=men",
    label: "Men",
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            path: "/search?category=men",
            label: "Clothes",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=men",
                label: "Tops and T-Shirts"
              },
              {
                id: 2,
                path: "/search?category=men",
                label: "Jeans"
              },
              {
                id: 3,
                path: "/search?category=men",
                label: "Jumpers and Sweaters"
              },
              {
                id: 4,
                path: "/search?category=men",
                label: "Shorts"
              },
              {
                id: 5,
                path: "/search?category=men",
                label: "Activewear"
              },
              {
                id: 6,
                path: "/search?category=men",
                label: "Suits and Blazers"
          },
          {
            id: 7,
            path: "/search?category=men",
            label: "Other Clothing"
          }
        ]
      },
      {
        id: 2,
        path: "/search?category=women",
                label: "Shoes",
              }
            ]
          },
          {
            id: 2,
                    columnItems: [
          {
            id: 1,
            path: "/search?category=sneakers",
            label: "Accessories",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=sneakers",
                label: "Jewellery"
              },
              {
                id: 2,
                path: "/search?category=sneakers",
                label: "Belts"
              },
              {
                id: 3,
                path: "/search?category=sneakers",
                label: "Watches"
              },
              {
                id: 4,
                path: "/search?category=sneakers",
                label: "Ties"
      },
      {
        id: 5,
        path: "/search?category=sneakers",
                label: "Ties"
              },
              {
                id: 6,
                            path: "/search?category=sneakers",
            label: "Hat and Caps"
              },
              {
                id: 7,
                path: "/search?category=sneakers",
                label: "Bags"
              },
              {
                id: 8,
                path: "/search?category=sneakers",
                label: "Others"
          }
        ]
      },
      ]
          },
    ]
              },
              {
                id: 3,
                    path: "/search?category=men",
    label: "Women",
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            path: "/search?category=sneakers",
            label: "Clothes",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=sneakers",
                label: "Tops and T-Shirts"
              },
              {
                id: 2,
                path: "/search?category=sneakers",
                label: "Jeans"
          },
          {
            id: 3,
            path: "/search?category=sneakers",
            label: "Jumpers and Sweaters"
          },
          {
            id: 4,
            path: "/search?category=sneakers",
            label: "Shorts"
              },
              {
                id: 5,
                path: "/search?category=sneakers",
                label: "Dresses"
              },
              {
                id: 6,
                path: "/search?category=sneakers",
                label: "Trousers and Leggings"
              },
          {
            id: 7,
            path: "/search?category=sneakers",
            label: "Skirts"
              },
              {
                id: 8,
                path: "/search?category=sneakers",
                label: "Activewear"
              },
              {
                id: 9,
                path: "/search?category=sneakers",
                label: "Suits and Blazers"
              },
              {
                id: 10,
                path: "/search?category=sneakers",
                label: "Other Clothing"
              }
            ]
          },
        ]
              },
              {
                id: 2,
                        columnItems: [
          {
            id: 1,
            path: "/search?category=men",
            label: "Accessories",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=men",
                label: "Bags"
              },
              {
                id: 2,
                path: "/search?category=men",
                label: "Jewellery"
              },
              {
                id: 3,
                path: "/search?category=men",
                label: "Belts"
              },
              {
                id: 4,
                path: "/search?category=men",
                label: "Watches"
              },
              {
                id: 5,
                path: "/search?category=men",
                label: "Scarves"
              },
              {
                id: 6,
                path: "/search?category=men",
                label: "Others"
              }
            ]
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "Shoes",
          }
        ]
      },
      ]
              },
              {
                id: 4,
                path: "/search?category=men",
                label: "Pet Products",
  },
  {
    id: 5,
    path: "/about-us",
    label: "About Us"
  },
];

export const mobileMenu = [
  {
    id: 1,
    path: "/",
    label: "Home",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-modern"
      },
      {
        id: 2,
        path: "/standard",
        label: "menu-standard"
      },
      {
        id: 3,
        path: "/minimal",
        label: "menu-minimal"
      },
      {
        id: 4,
        path: "/vintage",
        label: "menu-vintage"
      },
      {
        id: 5,
        path: "/classic",
        label: "menu-classic"
      },
      {
        id: 6,
        path: "/trendy",
        label: "menu-trendy"
      },
      {
        id: 7,
        path: "/elegant",
        label: "menu-elegant"
      },
      {
        id: 8,
        path: "/refined",
        label: "menu-refined"
      },
      {
        id: 9,
        path: "/fashion",
        label: "menu-fashion"
      },
    ]
  },
  {
    id: 2,
    path: "/search?category=men",
    label: "menu-men-wear",
    subMenu: [
      {
        id: 1,
        path: "/search?category=men",
        label: "menu-top-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=men",
            label: "menu-t-shirt"
          },
          {
            id: 2,
            path: "//search?category=men",
            label: "menu-casual-shirts"
          },
          {
            id: 3,
            path: "/search?category=men",
            label: "menu-formal-shirts"
          },
          {
            id: 4,
            path: "/search?category=men",
            label: "menu-blazwers-coats"
          },
          {
            id: 5,
            path: "/search?category=men",
            label: "menu-suits"
          },
          {
            id: 6,
            path: "/search?category=men",
            label: "menu-jackets"
          }
        ]
      },
      {
        id: 2,
        path: "/search?category=women",
        label: "menu-belt-scarves"
      },
      {
        id: 3,
        path: "/search?category=women",
        label: "menu-watches-wearables"
      },
      {
        id: 4,
        path: "/search?category=women",
        label: "menu-western-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-dresses"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-jumpsuits"
          },
          {
            id: 3,
            path: "/search?category=men",
            label: "menu-tops-shirts"
          },
          {
            id: 4,
            path: "/search?category=men",
            label: "menu-shorts-skirts"
          },
          {
            id: 5,
            path: "/search?category=men",
            label: "menu-shurgs"
          },
          {
            id: 6,
            path: "/search?category=men",
            label: "menu-blazers"
          }
        ]
      },
      {
        id: 5,
        path: "/search?category=women",
        label: "menu-plus-size"
      },
      {
        id: 6,
        path: "/search?category=women",
        label: "menu-sunglasses-frames"
      },
      {
        id: 7,
        path: "/search?category=women",
        label: "menu-footwear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-flats"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-casual-shoes"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-heels"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-boots"
          }
        ]
      },
      {
        id: 8,
        path: "/search?category=women",
        label: "menu-sports-active-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-clothing"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-footwear"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-sports-accessories"
          }
        ]
      },
      {
        id: 9,
        path: "/search?category=women",
        label: "menu-lingerie-sleepwear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-bra"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-briefs"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-sleepwear"
          }
        ]
      },
      {
        id: 10,
        path: "/search?category=women",
        label: "menu-belt-scarves",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-makeup"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-skincare"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-premium-beauty"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-lipsticks"
          }
        ]
      },
      {
        id: 11,
        path: "/search?category=sports",
        label: "menu-gadgets",
        subMenu: [
          {
            id: 1,
            path: "/search?category=sports",
            label: "menu-smart-wearables"
          },
          {
            id: 2,
            path: "/search?category=sports",
            label: "menu-headphones"
          }
        ]
      },
      {
        id: 12,
        path: "/search?category=women",
        label: "menu-jewellers",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-fashion-jewellers"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-fine-jewellers"
          }
        ]
      },
      {
        id: 13,
        path: "/search?category=bags",
        label: "menu-backpacks"
      },
      {
        id: 14,
        path: "/search?category=bags",
        label: "menu-handbags-wallets"
      }
    ]
  },
  {
    id: 3,
    path: "/search?category=women",
    label: "menu-women-wear",
    subMenu: [
      {
        id: 1,
        path: "/search?category=men",
        label: "menu-top-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-t-shirt"
          },
          {
            id: 2,
            path: "//search?category=women",
            label: "menu-casual-shirts"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-formal-shirts"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-blazwers-coats"
          },
          {
            id: 5,
            path: "/search?category=women",
            label: "menu-suits"
          },
          {
            id: 6,
            path: "/search?category=women",
            label: "menu-jackets"
          }
        ]
      },
      {
        id: 2,
        path: "/search?category=women",
        label: "menu-belt-scarves"
      },
      {
        id: 3,
        path: "/search?category=women",
        label: "menu-watches-wearables"
      },
      {
        id: 4,
        path: "/search?category=women",
        label: "menu-western-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-dresses"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-jumpsuits"
          },
          {
            id: 3,
            path: "/search?category=men",
            label: "menu-tops-shirts"
          },
          {
            id: 4,
            path: "/search?category=men",
            label: "menu-shorts-skirts"
          },
          {
            id: 5,
            path: "/search?category=men",
            label: "menu-shurgs"
          },
          {
            id: 6,
            path: "/search?category=men",
            label: "menu-blazers"
          }
        ]
      },
      {
        id: 5,
        path: "/search?category=women",
        label: "menu-plus-size"
      },
      {
        id: 6,
        path: "/search?category=women",
        label: "menu-sunglasses-frames"
      },
      {
        id: 7,
        path: "/search?category=women",
        label: "menu-footwear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-flats"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-casual-shoes"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-heels"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-boots"
          }
        ]
      },
      {
        id: 8,
        path: "/search?category=women",
        label: "menu-sports-active-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-clothing"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-footwear"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-sports-accessories"
          }
        ]
      },
      {
        id: 9,
        path: "/search?category=women",
        label: "menu-lingerie-sleepwear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-bra"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-briefs"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-sleepwear"
          }
        ]
      },
      {
        id: 10,
        path: "/search?category=women",
        label: "menu-belt-scarves",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-makeup"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-skincare"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-premium-beauty"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-lipsticks"
          }
        ]
      },
      {
        id: 11,
        path: "/search?category=sports",
        label: "menu-gadgets",
        subMenu: [
          {
            id: 1,
            path: "/search?category=sports",
            label: "menu-smart-wearables"
          },
          {
            id: 2,
            path: "/search?category=sports",
            label: "menu-headphones"
          }
        ]
      },
      {
        id: 12,
        path: "/search?category=women",
        label: "menu-jewellers",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-fashion-jewellers"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-fine-jewellers"
          }
        ]
      },
      {
        id: 13,
        path: "/search?category=bags",
        label: "menu-backpacks"
      },
      {
        id: 14,
        path: "/search?category=bags",
        label: "menu-handbags-wallets"
      }
    ]
  },
  {
    id: 4,
    path: "/search?category=women",
    label: "menu-casual-wear",
    subMenu: [
      {
        id: 1,
        path: "/search?category=men",
        label: "menu-top-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=me",
            label: "menu-t-shirt"
          },
          {
            id: 2,
            path: "/search?category=me",
            label: "menu-casual-shirts"
          },
          {
            id: 3,
            path: "/search?category=me",
            label: "menu-formal-shirts"
          },
          {
            id: 4,
            path: "/search?category=me",
            label: "menu-blazwers-coats"
          },
          {
            id: 5,
            path: "/search?category=me",
            label: "menu-suits"
          },
          {
            id: 6,
            path: "/search?category=me",
            label: "menu-jackets"
          }
        ]
      },
      {
        id: 2,
        path: "/search?category=women",
        label: "menu-belt-scarves"
      },
      {
        id: 3,
        path: "/search?category=women",
        label: "menu-watches-wearables"
      },
      {
        id: 4,
        path: "/search?category=women",
        label: "menu-western-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-dresses"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-jumpsuits"
          },
          {
            id: 3,
            path: "/search?category=men",
            label: "menu-tops-shirts"
          },
          {
            id: 4,
            path: "/search?category=men",
            label: "menu-shorts-skirts"
          },
          {
            id: 5,
            path: "/search?category=men",
            label: "menu-shurgs"
          },
          {
            id: 6,
            path: "/search?category=men",
            label: "menu-blazers"
          }
        ]
      },
      {
        id: 5,
        path: "/search?category=women",
        label: "menu-plus-size"
      },
      {
        id: 6,
        path: "/search?category=women",
        label: "menu-sunglasses-frames"
      },
      {
        id: 7,
        path: "/search?category=women",
        label: "menu-footwear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-flats"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-casual-shoes"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-heels"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-boots"
          }
        ]
      },
      {
        id: 8,
        path: "/search?category=sports",
        label: "menu-sports-active-wear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=sports",
            label: "menu-clothing"
          },
          {
            id: 2,
            path: "/search?category=sports",
            label: "menu-footwear"
          },
          {
            id: 3,
            path: "/search?category=sports",
            label: "menu-sports-accessories"
          }
        ]
      },
      {
        id: 9,
        path: "/search?category=women",
        label: "menu-lingerie-sleepwear",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-bra"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-briefs"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-sleepwear"
          }
        ]
      },
      {
        id: 10,
        path: "/search?category=women",
        label: "menu-belt-scarves",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-makeup"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-skincare"
          },
          {
            id: 3,
            path: "/search?category=women",
            label: "menu-premium-beauty"
          },
          {
            id: 4,
            path: "/search?category=women",
            label: "menu-lipsticks"
          }
        ]
      },
      {
        id: 11,
        path: "/search?category=sports",
        label: "menu-gadgets",
        subMenu: [
          {
            id: 1,
            path: "/search?category=sports",
            label: "menu-smart-wearables"
          },
          {
            id: 2,
            path: "/search?category=sports",
            label: "menu-headphones"
          }
        ]
      },
      {
        id: 12,
        path: "/search?category=women",
        label: "menu-jewellers",
        subMenu: [
          {
            id: 1,
            path: "/search?category=women",
            label: "menu-fashion-jewellers"
          },
          {
            id: 2,
            path: "/search?category=women",
            label: "menu-fine-jewellers"
          }
        ]
      },
      {
        id: 13,
        path: "/search?category=bags",
        label: "menu-backpacks"
      },
      {
        id: 14,
        path: "/search?category=bags",
        label: "menu-handbags-wallets"
      }
    ]
  },
  {
    id: 5,
    path: "/search",
    label: "menu-search"
  },
  {
    id: 6,
    path: "/shops",
    label: "menu-shops"
  },
  {
    id: 7,
    path: "/",
    label: "menu-pages",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-users",
        subMenu: [
          {
            id: 1,
            path: "/my-account",
            label: "menu-my-account"
          },
          {
            id: 2,
            path: "/signin",
            label: "menu-sign-in"
          },
          {
            id: 3,
            path: "/signup",
            label: "menu-sign-up"
          },
          {
            id: 4,
            path: "/forget-password",
            label: "menu-forget-password"
          }
        ]
      },
      {
        id: 2,
        path: "/faq",
        label: "menu-faq"
      },
      {
        id: 3,
        path: "/privacy",
        label: "menu-privacy-policy"
      },
      {
        id: 4,
        path: "/terms",
        label: "menu-terms-condition"
      },
      {
        id: 5,
        path: "/contact-us",
        label: "menu-contact-us"
      },
      {
        id: 6,
        path: "/checkout",
        label: "menu-checkout"
      },
      {
        id: 7,
        path: "/collections/on-sale",
        label: "menu-collection"
      },
      {
        id: 8,
        path: "/search",
        label: "menu-category"
      },
      {
        id: 9,
        path: "/my-account/orders",
        label: "menu-order"
      },
      {
        id: 10,
        path: "/404",
        label: "menu-404"
      }
    ]
  }
]