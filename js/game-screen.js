import {changeScreen, render} from './utils';

const template =  `<div>
  <header class="header">
    <div>Мир: 0</div>
    <div>Жизни: <span class="heart__full">♥</span>
      <span class="heart__full">♥</span>
      <span class="heart__full">♥</span>
    </div>
    <div>Время: 7</div>
  </header>
</div>
<div>
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
</div>
<div>
  <div class="result"></div>
  <small>Для справки введите <i>help</i></small>
</div>`;

const element = render(template);

export default element;
