import logo from './logo.svg';
import './App.css';
import './style.css';
import { box } from "img/box.png";
import { icon2 } from "img/icon2.png";
import { doc } from "img/doc.png";
import {facebook} from "img/facebook.png";
function App() {
  return (
    <><div class="body">

      <h1>About Diana</h1>
      <h2>A platform that looks out for you</h2>
      <p class="intro">Diana empowers you to understand how your body works so you can look and feel your best.</p>

      <div class="hr"><br /></div>
      <h4>Our Philosophy</h4>
      <h3>Sustainable wellness is a big-picture, inside out approach</h3>
      <p class="desc">Diana is on a mission to create thoughful, science-backed soluyions for women ho want to make informed decisons about their health and wellness.<br /><br />
        Thats's why we've created an integrated ecosystem of:</p>
      <div class="icontest">
        <img src={icon2} />
      </div>
      <div class="iconfont">
        Consciously formulated products that deliver feel-good results fast
      </div>
      <br />
      <div class={icontest2}>
        <img src={icon} />
      </div>
      <div class="iconfont2">
        In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
      </div>
      <br />
      <div class="icontest3">
        <img src={icon2} />
      </div>
      <div class="iconfont3">
        In-app consulation portals that connect you with compassionate wellness experts
      </div>
      <div class="iconfont4">Consider us your nerdy ally who spends their time perfecting products that work beacause they want you to feel your best everyday.</div>



      <div class="pinkh">What makes us different?</div>
      <div class="ph2">Reimagining and rewiring self-care</div>
      <div class="pbody"><p>You care about conscious consumption, and so do we.
        <br /><br />
        When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best
        <br /><br />
        We collaborate with researchers and doctors to
        <br /><br />
        <ul>
          <li>Help you get granular about your health and self-care with personalized insights, and</li>
          <br />
          <li>Equip you with simple, sustainable products that get the job done</li>
        </ul>
        <br /><br />
        No to-the-moon-and-back claims in this neck of the woods.
        <br /><br />
        We’re just solving real problems for real people here
      </p></div>

      <div class="pink">
      </div>
      <div class="cbodyh">
        Liberate your everyday wellness

      </div>

      <div class="cbodyh2">Shop our self-care products

      </div>
      <div class="cbodydsc">
        Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.
      </div>
      <div class="buttona">
        <div class="buttonatext">Upgrade your self-care</div>
      </div>
      <div class="tag">#NoNasties, we promise!</div>

      <div class="rose">
        <img src={rose} />
      </div>
      <div class="trackh">
        Track your mood
      </div>
      <div class="dbodydsc">
        All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.
      </div>

      <div class="buttonb">
        <div class="buttonatext">
          Track your mood on the app
        </div>
      </div>

      <div class="pic1"></div>
      <div class="pic2"></div>
      <div class="pic3"></div>
      <div class="pic4"></div>


      <div class="ebody"></div>
      <div class="trackh2">Track your period</div>
      <div class="ebodydsc">Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.</div>

      <div class="button3">
        <div class="button3d">Track you period on the app</div>
      </div>
    </div><div class="cal"></div><div class="fbodyh">Consult with wellness experts</div><div class="fbodydsc">Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.</div><div class="button6">
        <div class="button6t">Get a consulation</div>
      </div><div class="doc"></div><div class="gbody"><div class="gbox"></div>


      </div></>

  );
}

export default App;