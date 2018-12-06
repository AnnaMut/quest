import {changeScreen, render} from './utils';
import gameScreen from './game-screen';

const template = `
<div class="end">
    <p>Ghbdtn! Настало время приключений! Вы готовы сразится с неприятностями и получить принцессу прямо сейчас?!<br>
      A?!<br>
      Точно?!<br>
      Уверен?!<br>
      Стопудов?!</p>
    <p>08 есть?</p>
    <div class="repeat">
      Ваше имя:<input type="text"><br>
      <span class="repeat-action agree-button">Да</span>
    </div>
</div>`;

const element = render(template);

const agreeButton = element.querySelector(`.agree-button`);

agreeButton.addEventListener(`click`, () => {
  changeScreen(gameScreen);
});

export default element;
