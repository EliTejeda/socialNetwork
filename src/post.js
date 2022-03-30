import { onNavigate } from './main.js'; //eslint-disable-line
import { createPost, getPosts, logoutUser, aLike} from './fbConfig.js'//eslint-disable-line

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

  const exitIcon = document.createElement('img');
  exitIcon.classList.add('logoHome');
  exitIcon.src = './assets/exit.png';
  exitIcon.addEventListener('click', () => {
    logoutUser();
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
    console.log(posts);
    posts.forEach((postsUsers) => {
      const eachPost = document.createElement('div');
      eachPost.classList.add('post');
      let postone = document.createElement('p');
      postone.textContent = postsUsers[0];
      const postmoney = document.createElement('p');
      postmoney.textContent = postsUsers[2];
      const postplace = document.createElement('p');
      postplace.textContent = postsUsers[3];
      const postlike = document.createElement('div');
      const postNumLike = document.createElement('p');
      postNumLike.textContent = postsUsers[1];
      const imgLike = document.createElement('img');
      imgLike.classList.add('like');
      imgLike.src = './assets/like.png';
      postlike.append(postNumLike, imgLike);
      imgLike.addEventListener('click', () => {
        aLike(postsUsers[5]);
      });
      const imgEdit = document.createElement('img');
      imgEdit.classList.add('like');
      imgEdit.src = './assets/lapiz.png';
      imgEdit.addEventListener('click', () => {
        postone.setAttribute('type', 'input');
        /* editPost(postsUsers[5], postone.value); */
      });

      eachPost.append(postone, postmoney, postplace, postlike, imgEdit);
      renderPost.append(eachPost);
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
    const place = document.createElement('input');
    usersPosts.setAttribute('placeholder', 'Lugar');
    const hours = document.createElement('input');
    hours.setAttribute('placeholder', 'Lugar');
    const money = document.createElement('input');
    money.setAttribute('placeholder', 'Lugar');
    const buttonPost = document.createElement('img');
    buttonPost.classList.add('sendiconPost');
    buttonPost.src = './assets/sendicon.png';
    buttonPost.addEventListener('click', (event) => {
      createPost(usersPosts.value, place.value, hours.value, money.value, 3);
      event.preventDefault();
      alert('Post creado');
    });
    newPostcontainer.append(usersPosts, place, hours, money, buttonPost);
  });
  //MONITA
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñePost');
  startLogo.src = './assets/paseitologo.png';

  topInfo.append(titleTop, returnstartIcon, exitIcon);
  userInfo.append(imgProfile, userName);
  postNode.append(renderPost);
  menuPost.append(searchpostIcon, createpostIcon, startLogo);
  postLayout.append(topInfo, userInfo, menuPost, postNode, newPostcontainer);
  return postLayout;
}
export { post };
