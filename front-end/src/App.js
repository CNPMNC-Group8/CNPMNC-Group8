import { BrowserRouter, Switch} from "react-router-dom";
import {routerHome,routerAdmin} from './router';
import AdminTemplate from './template/admin.layout';
import HomeTemplate from'./template/home.layout';



function App() {

  const showMeuHome = (router)=>{
    if(router && router.length >0){
      return router.map((item,index)=>{
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.Component}/>
      })
    }
  }

  const showMeuAdmin = (router)=>{
    if(router && router.length >0){
      return router.map((item,index)=>{
        return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.Component}/>
      })
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {showMeuAdmin(routerAdmin)}
          {showMeuHome(routerHome)}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
