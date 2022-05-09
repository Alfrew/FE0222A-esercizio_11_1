import { Ipost } from "../interface/post";

export async function loadDB(): Promise<Ipost[]> {
  return await (await fetch("assets/db.json")).json();
}
// const JSONP =  await fetch("assets/db.json").json();
// const POSTS: Ipost[] = JSON.parse(JSONP);
const POSTS: Ipost[] = [
  {
    id: 1,
    body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
    title: "Le elezioni proseguono",
    active: true,
    category: "Politic",
  },
  {
    id: 2,
    body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
    title: "Ricetta per la pizza napoletana",
    active: false,
    category: "Cooking",
  },
  {
    id: 3,
    body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
    title: "Calciatore espulso per droga",
    active: false,
    category: "Sport",
  },
  {
    id: 4,
    body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
    title: "Zuppa di fagioli",
    active: true,
    category: "Cooking",
  },
];

export async function getPosts(): Promise<Ipost[]> {
  return new Promise((resolve, reject) => {
    resolve(POSTS);
  });
}
