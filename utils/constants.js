const APP = {
  API_URL: 'https://tiyatrogunlugu.com/wp-json/wp/v2',
};

const POST_CATEGORIES = [
  {
    id: 7,
    title: 'izlediklerim',
    featuredImage:
      'https://tiyatrogunlugu.com/wp-content/uploads/tirnak-icinde-hizmetciler-tiyatro-oyunu-1-750x484.jpg',
  },
  {
    id: 195,
    title: 'duyurduklarım',
    featuredImage:
      'https://tiyatrogunlugu.com/wp-content/uploads/tiyatro-ozgurluk-parkinda.jpeg',
  },
  {
    id: 355,
    title: 'fuaye konuşmaları',
    featuredImage:
      'https://tiyatrogunlugu.com/wp-content/uploads/kadikoy_haldun_taner_sahnesi-750x455.jpg',
  },
];

const SCREENS = {
  POSTS: 'PostsScreen',
  POST_DETAIL: 'PostDetailScreen',
  CATEGORIES: 'CategoriesScreen',
  CONTACT: 'ContactScreen',
};

export { APP, POST_CATEGORIES, SCREENS };
