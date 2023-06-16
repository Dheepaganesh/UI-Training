//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      <div className="container">
      <div className="header">
        <div>Clonetube</div>
        <div><input type="search" placeholder="Search Video"></input><button id="sb"><i className="fa fa-search"></i></button></div>
        <div>Login</div>
        <div>SignUp</div>
        <div><i className="fa light fa-user"></i></div>

    </div>
      <div className="sidenav">
        <ul>
          <br></br>
          <li><a href="/">Home<i className="fa fa-home"></i></a></li>
          <li><a href="/">Shorts<i className="fa fa-video-camera"></i></a></li>
          <li><a href="/">Subscription<i id="sub" className="fa fa-money"></i></a></li>
        </ul>
        </div>
        <div className="subhead">
          <div><button>Games</button></div>
          <div><button>Food Vlogs</button></div>
          <div><button>Sports</button></div>
          <div><button>Fashion</button></div>
          <div><button>Music</button></div>
          <div><button>Co-op</button></div>
        </div>
        <div className="content">
          <div><img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt='Image'></img><h6>Hey whatsapp!</h6></div>
        </div>  
        </div> 
      </div>

  );
}

export default App;
