import { onNavigate } from './main.js'; //eslint-disable-line
import { createPost } from './fbConfig.js'

function post() {
  const postLayout = document.createElement('div');
  postLayout.classList.add('postContainer');

  //Título paseito
  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfo');
  const titleTop = document.createElement('h1');
  titleTop.classList.add('titleTop');
  titleTop.textContent = 'PASEITO';

  //Mostrar nombre del usuario
  const userInfo = document.createElement('section');
  userInfo.classList.add('userInfo');
  const imgProfile = document.createElement('img');
  imgProfile.classList.add('logoMuñePost');
  imgProfile.src = './assets/mochilero.png';
  const userName = document.createElement('h2');
  userName.classList.add('userName');
  userName.textContent = 'Angela Rivadeneira';

  //Mostrar post de usuarios
  const usersPosts = document.createElement('input');
  usersPosts.setAttribute('placeholder', 'Aquí se verán los posts');
  usersPosts.classList.add('postInput');
  const buttonPost = document.createElement('button');
  buttonPost.classList.add('loginButton');
  buttonPost.addEventListener('click', (event) => {
    createPost(usersPosts.value);
    event.preventDefault();
  });

  const postNode = document.createElement('div');
  postNode.classList.add('post');
  const renderPost = document.createElement('p');

/*   getPosts().then((posts) => {
  console.log(posts[0].innerHTML);
  renderPost.innerHTML = posts[0].innerHTML;
  });
 */
  const menuPost = document.createElement('section');
  menuPost.classList.add('menuPost');

  //Barra imagenes de opciones
  const returnstartIcon = document.createElement('img');
  returnstartIcon.classList.add('logoMuñePost');
  returnstartIcon.src = './assets/home.png';
  returnstartIcon.addEventListener('click', () => {
    onNavigate('/');
  });

  const searchpostIcon = document.createElement('img');
  searchpostIcon.classList.add('lupaPost');
  searchpostIcon.src = './assets/lupa.png';
  searchpostIcon.addEventListener('click', () => {
    alert('hola');
  });

  const createpostIcon = document.createElement('img');
  createpostIcon.classList.add('lupaPost');
  createpostIcon.src = './assets/addicon.png';
  createpostIcon.addEventListener('click', () => {
    alert('hola');
  });

  //MONITA
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñePost');
  startLogo.src = './assets/paseitologo.png';

  topInfo.append(titleTop);
  userInfo.append(imgProfile, userName);
  menuPost.append(returnstartIcon, searchpostIcon, createpostIcon, startLogo);
  postLayout.append(topInfo, userInfo, usersPosts, menuPost, postNode, buttonPost);
  postNode.append(renderPost);
  return postLayout;
}
export { post };
