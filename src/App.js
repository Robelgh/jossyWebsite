import logo from './logo.svg';
import './App.css';
import './asset/styles/styles.css'
import './asset/styles/styles.css.map' 


function App() {
  return (
    <div className="App">
   
   <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img src="img/hero.png" alt=""/>
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Yosef Hagos</span>
                    Chemical Engineer.
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage
                </p>
                <div class="btn-con">
                    <a href="" class="main-btn">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    </div>
    
  );
}

export default App;
