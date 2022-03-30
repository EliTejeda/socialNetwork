import { onNavigate } from './main.js'; //eslint-disable-line
import { createPost, logoutUser, getPosts, getName, deletePost, editPost} from './fbConfig.js'

function post() {
  const postLayout = document.createElement('div');
  postLayout.classList.add('postContainer');

  //Título paseito
  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfo');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñePost');
  startLogo.src = './assets/mochilero.png';
  //Mostrar nombre del usuario
  let userName = '';
  let userDataFilter = '';
  let userDataName = '';
  getName().then((name) => {
    name.forEach((doc) => {
      console.log(doc);
      userDataFilter = (doc.id, ' => ', doc.data());
      userDataName = userDataFilter.Name + ' ' + userDataFilter.LastName;
      userName = document.createElement('h2');
      userName.classList.add('userName');
      userName.textContent = userDataName;
      topInfo.append(userName);
    });
  });
  topInfo.append(startLogo);
  const showPostsusers = document.createElement('section');
  showPostsusers.classList.add('showPostusers');
  getPosts().then((posts) => {
    posts.forEach((postsUsers) => {
       //Container Post Users Info
      const showPostusersInfo = document.createElement('div');
      showPostusersInfo.classList.add('showPostusersInfo');
      const showPostusersName = document.createElement('h4');
      showPostusersName.classList.add('showPostusersName');
      showPostusersName.textContent = postsUsers[6];
      const showPostusersTime = document.createElement('p');
      showPostusersTime.classList.add('showPostusersTime');
      showPostusersInfo.append(showPostusersName, showPostusersTime);
      //Container Post-info
      const showPostinfo = document.createElement('div');
      showPostinfo.classList.add('showPostinfo');
      const showPostcontents = document.createElement('p');
      showPostcontents.classList.add('showPostcontents');
      showPostcontents.textContent = postsUsers[0];
      const postmoney = document.createElement('p');
      postmoney.textContent = 'Costo: ' + postsUsers[2];
      const postplace = document.createElement('p');
      postplace.textContent = 'Lugar: ' + postsUsers[3];
      const posthours = document.createElement('p');
      posthours.textContent = 'Tiempo invertido: ' + postsUsers[4];
      //Container Post-count
      const postCount = document.createElement('div');
      postCount.classList.add('postCount');
      const postCountlikes = document.createElement('div');
      postCountlikes.classList.add('postCountlikes');
      
      const imgLike = document.createElement('img');
      imgLike.classList.add('postCountlikesImg');
      imgLike.src = './assets/like.png';
      const postCountlikesSum = document.createElement('p');
      postCountlikesSum.classList.add('postCountlikesSum');
      
    /*  imgLike.addEventListener('click', () => {
        aLike(postsUsers[1]);
      }); */

      const imgDelete = document.createElement('img');
      imgDelete.classList.add('postCountlikesImg');
      imgDelete.src = './assets/erasericon.png';
      imgDelete.addEventListener('click', () => {
        deletePost(postsUsers[5]); 
      });

      const imgEdit = document.createElement('img');
      imgEdit.classList.add('postCountlikesImg');
      imgEdit.src = './assets/editicon.png';
      imgEdit.addEventListener('click', () => {
          const editContainer = document.createElement('div');
          editContainer.classList.add('editContainer');
          const editInput = document.createElement('input');
          editInput.classList.add('editInput');
          editInput.textContent = postsUsers[5];
          const buttonSend = document.createElement('img');
          buttonSend.classList.add('sendiconPost');
          buttonSend.src = './assets/sendicon.png';
          showPostcontents.append(buttonSend);
          buttonSend.addEventListener('click', () => {
            editPost(postsUsers[5], editInput.value);
            onNavigate('/post');
          });
          editContainer.append(editInput, buttonSend);
          showPostcontents.append(editContainer);
        });

      postCount.append(imgLike, postCountlikesSum, imgDelete, imgEdit);


      const showPostEdit = document.createElement('div');
      showPostEdit.classList.add('showPostEdit');
      showPostinfo.append(showPostcontents, postmoney, postplace, posthours);
      showPostsusers.append(showPostusersInfo, showPostinfo, postCount);
    });
  });



  //Menú post
  const menuPost = document.createElement('section');
  menuPost.classList.add('menuPost');
  const returnstartIcon = document.createElement('img');
  returnstartIcon.classList.add('logoHome');
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
  const newPostcontainer = document.createElement('section');
  
  //Create post
  createpostIcon.addEventListener('click', () => {
    newPostcontainer.classList.add('newPostcontainer');
    const usersPosts = document.createElement('input');
    usersPosts.setAttribute('placeholder', 'Ingresa nuevo post');
    usersPosts.classList.add('postNewInput');
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('itemsContainer');
    const place = document.createElement('input');
    place.classList.add('placeInput');
    place.setAttribute('placeholder', 'Lugar');
    const hours = document.createElement('input');
    hours.setAttribute('placeholder', 'Horas');
    hours.classList.add('hoursInput');
    const money = document.createElement('input');
    money.setAttribute('placeholder', '$$$');
    money.classList.add('moneyInput');
    const buttonPost = document.createElement('img');
    buttonPost.classList.add('sendiconPost');
    buttonPost.src = './assets/sendicon.png';
    buttonPost.addEventListener('click', (event) => {
      createPost(usersPosts.value, place.value, hours.value, money.value, 3);
      event.preventDefault();
     onNavigate('/post');
    });
    itemsContainer.append(place, hours, money, buttonPost);
    newPostcontainer.append(usersPosts, itemsContainer);
  });
  const exitIcon = document.createElement('img');
  exitIcon.classList.add('logoHome');
  exitIcon.src = './assets/exit.png';
  exitIcon.addEventListener('click', () => {
    logoutUser();
    onNavigate('/');
  });

   menuPost.append(returnstartIcon, searchpostIcon, createpostIcon, exitIcon);
  postLayout.append(topInfo, showPostsusers, newPostcontainer, menuPost);

  return postLayout;
}
export { post };
