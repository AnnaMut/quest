import {changeScreen, render} from './utils';
import { initialState } from './data/data';


const template =  `
  <div class="quest">
    <p class="text">Вас зовут Луиджи Марио, вы водопроводчик, но сейчас перед вами стоит очень важная миссия —
      спасти принцессу
      Грибного Королевства Тоадстул Пич. Её похитил злой повелитель черепах Боузер и вы отправились в Грибное
      Королевство,
      чтобы победить Боузера и освободить принцессу. Вы отправляетесь в первый замок, но, чтобы в него попасть нужно
      преодолеть несколько препятствий. Вы стоите посреди на одной из равнин Грибного Королевства и видите как на
      вас
      стремительно несется хмурый гриб вашего роста. Нужно срочно что-то предпринять</p>
    <input type="text">
    <ul class="answers">
      <li class="answer">LEFT. Вы побежите влево, от гриба</li>
      <li class="answer">RIGHT. Вы побежите вправо, прямо на гриб</li>
      <li class="answer">JUMP. Вы прыгнете вверх</li>
    </ul>
  </div>
  <div class="result"></div>
  <small>Для справки введите <i>help</i></small>
`;

const element = render(template);

const input = element.querySelector(`input`);
input.onkeydown = (evt) => {
  if (evt.key === `Enter`) {
    // Переход на следующий экран
    input.reset();
  }
};

input.focus();

export default element;
