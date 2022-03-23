import { onNavigate } from './main.js'; //eslint-disable-line
import { createPost, getPosts } from './fbConfig.js'

function post() {
  const postLayout = document.createElement('div');
  postLayout.classList.add('postContainer');

  //Título paseito
  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfo');
  const titleTop = document.createElement('h1');
  titleTop.classList.add('titleTop');
  titleTop.textContent = 'PASEITO';

  const returnstartIcon = document.createElement('img');
  returnstartIcon.classList.add('logoHome');
  returnstartIcon.src = './assets/home.png';
  returnstartIcon.addEventListener('click', () => {
    onNavigate('/');
  });

  //Mostrar nombre del usuario
  const userInfo = document.createElement('section');
  userInfo.classList.add('userInfo');
  const imgProfile = document.createElement('img');
  imgProfile.classList.add('logoMuñePost');
  imgProfile.src = './assets/mochilero.png';
  const userName = document.createElement('h2');
  userName.classList.add('userName');
  userName.textContent = 'Angela Rivadeneira';

  const postNode = document.createElement('section');
  postNode.classList.add('oldPost');

  const renderPost = document.createElement('section');
  getPosts().then((posts) => {
    posts.forEach((postsUsers) => {
      console.log(postsUsers);
      renderPost.append(postsUsers);
    });
  });

  const menuPost = document.createElement('section');
  menuPost.classList.add('menuPost');

  const searchpostIcon = document.createElement('img');
  searchpostIcon.classList.add('lupaPost');
  searchpostIcon.src = './assets/lupa.png';
  searchpostIcon.addEventListener('click', () => {
    alert('hola');
  });

  const createpostIcon = document.createElement('img');
  createpostIcon.classList.add('lupaPost');
  createpostIcon.src = './assets/addicon.png';
  const newPostcontainer = document.createElement('section');
  createpostIcon.addEventListener('click', () => {
    newPostcontainer.classList.add('newPostInput');
    const usersPosts = document.createElement('input');
    usersPosts.setAttribute('placeholder', 'Ingresa nuevo post');
    usersPosts.classList.add('postInput');
    const buttonPost = document.createElement('img');
    buttonPost.classList.add('sendiconPost');
    buttonPost.src = './assets/sendicon.png';
    buttonPost.addEventListener('click', (event) => {
      createPost(usersPosts.value);
      event.preventDefault();
      alert('Post creado');
    });
    newPostcontainer.append(usersPosts, buttonPost);
  });
  //MONITA
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñePost');
  startLogo.src = './assets/paseitologo.png';

  topInfo.append(titleTop, returnstartIcon);
  userInfo.append(imgProfile, userName);
  postNode.append(renderPost);
  menuPost.append(searchpostIcon, createpostIcon, startLogo);
  postLayout.append(topInfo, userInfo, menuPost, postNode, newPostcontainer);
  return postLayout;
}
export { post };
