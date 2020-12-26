/* var */

const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
  /*console.log('Eixo X : ' + e.pageX, 'Eixo Y : ' + e.pageY);*/
  let xAxis = window.innerWidth / 2 - e.pageX / 25;
  let yAxis = window.innerHeight / 2 - e.pageY / 25;
  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});
