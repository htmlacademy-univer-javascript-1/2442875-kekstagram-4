const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const NAMES = [
  'Иван',
  'Мария',
  'Софья',
  'Антон',
  'Виктор',
  'Юлия',
  'Кекс',
  'Евгений',
  'Савелий',
  'Данила',
  'Влад'
];
const DESCRIPTIONS = [
  'Это я на море',
  'Я сейчас отдыхаю',
  'Любимая работа',
  'Вот бы снова стать студентом',
  'Потрясающий вид',
  'Доброе утро!'
];
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
import {getRandomInteger, createIdGenerator, getRandomArrayElement} from './utils.js';
const generateCommentId = createIdGenerator();
const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});
const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),
});

const getPhotos  = () => Array.from(
  { length: PICTURE_COUNT },
  (_, photoIndex) => createPhoto (photoIndex + 1),
);
export {getPhotos};
