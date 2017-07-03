import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//ojo
//ReactDOM.render(React.createElement(MyprimerComponente,null,null),
//document.getElementById('root')
//);
//ojo
//import React from 'react';
//import ReactDOM from 'react-dom';
//const MyprimerComponente = ()=>(React.createElement('div',{className: 'text-center'},'Hello world'));

//const MyprimerComponente = ()=>(
//	<div className="text-center"> 
//	hola mundo
//	</div>
//);



//ReactDOM.render(
//<MyprimerComponente/>,document.getElementById('root'));
