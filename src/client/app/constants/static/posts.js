import moment from 'moment';

export const posts = [
  {
    id: 0,
    image: {
      src: require('../../img/0.jpg'),
      alt: 'kek'
    },
    details: {
      author: 'Andrey',
      createdAt: moment('20170101', 'YYYYMMDD').fromNow(),
      updatedAt: moment('20170401', 'YYYYMMDD').fromNow()
    },
    likes: 10
  },
  {
    id: 1,
    image: {
      src: require('../../img/1.jpg')
    },
    text: 'Отзыв о курсе',
    details: {
      author: 'Zahar',
      createdAt: moment('20160101', 'YYYYMMDD').fromNow(),
      updatedAt: moment('20160901', 'YYYYMMDD').fromNow()
    },
    likes: 5
  },
  {
    id: 2,
    text: 'Полумарафон'
  }
];
