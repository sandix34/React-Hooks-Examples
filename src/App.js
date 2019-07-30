import React from "react";
import Like from "./components/Like";
import FrameworkList from "./components/FrameworkList";
import PostList from "./components/PostList";
import Calculator from "./components/Calculator";
import LevelA from "./components/LevelA";
import MailContextProvider from "./contexts/MailContext";
import Keycode from "./components/Keycode";
import Login from "./components/Login";



import { Collapse } from "antd";
import { Layout } from 'antd';

const { Header, Content } = Layout;

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

function App() {
  return (
    <div>
      <Layout>
        <Header style={{"color": "white"}}>
          React Hooks Examples 
        </Header>
        <Content>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="Utiliser le hook useState() pour incrémenter" key="1">
            <Like />
          </Panel>
          <Panel forceRender="true" header="Utiliser plusieurs useState() dans un component -- Afficher la valeur d'un input" key="2">
            <FrameworkList />
          </Panel>
          <Panel forceRender="true" header="Utiliser useEffect() pour effectuer une requête AJAX -- Itérer les blog posts -- Afficher un indicateur de loading -- 1 useEffect() par fonctionnalité " key="3">
            <PostList />
          </Panel>
          <Panel forceRender="true" header="This is panel header 4" key="4">
            <Calculator />
          </Panel>
          <Panel forceRender="true" header="This is panel header 5" key="5">
            <MailContextProvider>
              <LevelA />
            </MailContextProvider>
          </Panel>
          <Panel forceRender="true" header="This is panel header 6" key="6">
            <Keycode />
          </Panel>
          <Panel forceRender="true" header="This is panel header 7" key="7">
            <Login />
          </Panel>
        </Collapse>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
