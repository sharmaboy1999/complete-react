import logo from './logo.svg';
import './App.css';
import Functional from './my components/Functional';
import Class from './my components/Class';
import Jsx from './my components/Jsx';
import State from './my components/State';
import Counter from './my components/Counter';
import Functionclick from './my components/Event.js/Functionclick';
import Classclick from './my components/Event.js/Classclick';
import Eventbind from './my components/Event.js/Eventbind';
import Parentcomponent from './my components/Parentcomponent';
import Conditionalrendering from './my components/Conditionalrendering';
import Namelist from './my components/Namelist';
import Stylesheet from './my components/Stylesheet';
import Inlinecss from './my components/Inlinecss';
import Form from './my components/Form';
import LifecycleA from './my components/LifecycleA';
import Fragmentdemo from './my components/Fragmentdemo';
import Purecomponent from './my components/Purecomponent';
import Regularcomponent from './my components/Regularcomponent';
import Parentcomp from './my components/Parentcomp';
import Refsdemo from './my components/Refsdemo';
import Forrefsparent from './my components/Forrefsparent';

import Component2 from './my components/Higherordercomponent/Component2';
import Component3 from './my components/Higherordercomponent/Component3';
import Slick from './my components/Slick';


function App() {
  return (
    <div className="App">
      {/* <Functional /> */}
      {/* <Class /> */}
      {/* <Jsx /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <Functionclick /> */}
      {/* <Classclick /> */}
      {/* <Eventbind /> */}
      {/* <Parentcomponent /> */}
      {/* <Conditionalrendering /> */}
      {/* <Namelist /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inlinecss  /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <Fragmentdemo /> */}
      {/* <Purecomponent /> */}
      {/* <Regularcomponent /> */}
      {/* <Parentcomp  /> */}
      {/* <Refsdemo /> */}
      {/* <Forrefsparent /> */}
      <Component2 name='sharma'/>
      <Component3 name='sharma' />
      <Slick />
    </div>
  );
}

export default App;
