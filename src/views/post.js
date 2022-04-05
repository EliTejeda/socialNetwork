import { newPosts, renderAdvice } from '../appFunctions/onSnapshot.js'; //eslint-disable-line
import { onNavigate } from '../routes/main.js'; //eslint-disable-line
import { createPost, getPosts, getName, deletePost, editPost, aLike, logoutUser, currentUsermail } from '../appFunctions/fbConfig.js'; //eslint-disable-line


function post() {
  const postLayout = document.createElement('div');
  postLayout.classList.add('postContainer');

  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfo');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñePost');
  startLogo.src = './assets/mochilero.png';
  let userName = '';
  let userDataFilter = '';
  let userDataName = '';
console.log(currentUsermail);
  getName().then((name) => {
    name.forEach((doc) => {
      userDataFilter = (doc.id, ' => ', doc.data());
      userDataName = userDataFilter.Name + ' ' + userDataFilter.LastName; //eslint-disable-line
      userName = document.createElement('h2');
      userName.classList.add('userName');
      userName.textContent = userDataName;
      topInfo.append(userName);
    });
  });
  topInfo.append(startLogo);
  const showPostsusers = document.createElement('section');
  showPostsusers.classList.add('showPostusers');
  const renderizedPost = [];
  getPosts().then((posts) => {
    posts.forEach((postsUsers) => {
      renderizedPost.push(1);
      const showPostusersInfo = document.createElement('div');
      showPostusersInfo.classList.add('showPostusersInfo');
      const showPostusersName = document.createElement('h4');
      showPostusersName.classList.add('showPostusersName');
      showPostusersName.textContent = postsUsers.data().Email;
      const showPostusersTime = document.createElement('p');
      showPostusersTime.classList.add('showPostusersTime');
      showPostusersInfo.append(showPostusersTime);
      const timeUser = new Date(postsUsers.data().Date);
      showPostusersTime.textContent = timeUser;
      const showPostinfo = document.createElement('div');
      showPostinfo.classList.add('showPostinfo');
      const showPostcontents = document.createElement('p');
      showPostcontents.classList.add('showPostcontents');
      showPostcontents.textContent = postsUsers.data().Post;
      const postmoney = document.createElement('p');
      postmoney.textContent = 'Costo: ' + postsUsers.data().Money;//eslint-disable-line
      const postplace = document.createElement('p');
      postplace.textContent = 'Lugar: ' + postsUsers.data().Place;//eslint-disable-line
      const posthours = document.createElement('p');
      posthours.textContent = 'Tiempo invertido: ' + postsUsers.data().Hours;//eslint-disable-line
      const postCount = document.createElement('div');
      postCount.classList.add('postCount');
      const postCountlikes = document.createElement('div');
      postCountlikes.classList.add('postCountlikes');
      const heartContainer = document.createElement('div');
      const imgLike = document.createElement('img');
      imgLike.classList.add('postCountlikesImg');
      if (postsUsers.data().Likes.includes(currentUsermail)) {
        imgLike.src = './assets/like2.png';
      } else {
        imgLike.src = './assets/like.png';
      }
      heartContainer.append(imgLike);
      heartContainer.classList.add('coloredHeart');
      imgLike.addEventListener('click', () => {
        aLike(postsUsers.id);
      });
      const postCountlikesSum = document.createElement('p');
      postCountlikesSum.classList.add('postCountlikesSum');
      postCountlikesSum.textContent = postsUsers.data().Likes.length;

      const containerPencil = document.createElement('div');
      if (currentUsermail === postsUsers.data().Email) {
        containerPencil.classList.add('editContainer');
        const imgDelete = document.createElement('img');
        imgDelete.classList.add('postCountlikesImg');
        imgDelete.src = './assets/erasericon.png';
        imgDelete.addEventListener('click', () => {
          deletePost(postsUsers.id);
        });
        const imgEdit = document.createElement('img');
        imgEdit.classList.add('postCountlikesImg');
        imgEdit.src = './assets/editicon.png';
        imgEdit.addEventListener('click', () => {
          const editContainer = document.createElement('div');
          editContainer.classList.add('newEditcontainer');
          const editInput = document.createElement('input');
          editInput.classList.add('postNewInput');
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
          const buttonSend = document.createElement('img');
          buttonSend.classList.add('sendiconPost');
          buttonSend.src = './assets/sendicon.png';
          showPostcontents.append(buttonSend);
          buttonSend.addEventListener('click', () => {
            editPost(postsUsers.id, editInput.value, place.value, hours.value, money.value);//eslint-disable-line
            onNavigate('/post');
          });
          itemsContainer.append(place, hours, money, buttonSend);
          editContainer.append(editInput, itemsContainer);
          showPostcontents.append(editContainer);
        });
        containerPencil.append(imgEdit, imgDelete);
      }
      postCount.append(containerPencil, postCountlikesSum, heartContainer);

      const showPostEdit = document.createElement('div');
      showPostEdit.classList.add('showPostEdit');
      showPostinfo.append(showPostusersName, showPostusersTime, showPostcontents, postmoney, postplace, posthours);//eslint-disable-line
      showPostsusers.append(showPostusersInfo, showPostinfo, postCount);
    });
    //console.log(renderizedPost.length, 'los que ya estaban');
  });

  const menuPost = document.createElement('section');
  menuPost.classList.add('menuPost');
  const returnstartIcon = document.createElement('img');
  returnstartIcon.classList.add('logoHome');
  returnstartIcon.src = './assets/home.png';
  returnstartIcon.addEventListener('click', () => {
    onNavigate('/');
  });

  const createpostIcon = document.createElement('img');
  createpostIcon.classList.add('lupaPost');
  createpostIcon.src = './assets/addicon.png';
  const newPostcontainer = document.createElement('section');

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
      createPost(usersPosts.value, place.value, hours.value, money.value);
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

  menuPost.append(returnstartIcon, createpostIcon, exitIcon);
  postLayout.append(topInfo, showPostsusers, newPostcontainer, menuPost);

  /* let hearIncomingPost = ''; */


  return postLayout;
}
export { post };
