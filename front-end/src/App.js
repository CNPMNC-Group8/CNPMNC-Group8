import { BrowserRouter, Switch} from "react-router-dom";
import {routerAdmin} from './router';
import AdminTemplate from './template/admin.layout';



function App() {

  const showMeuAdmin = (router)=>{
    if(router && router.length >0){
      return router.map((item,index)=>{
        return <AdminTemplate key={index} exact={item.exact} path={item.path} name={item.name} component={item.component}/>
      })
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {showMeuAdmin(routerAdmin)}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
