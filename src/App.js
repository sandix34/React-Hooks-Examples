import React from "react";
import Like from "./components/Like";
import FrameworkList from "./components/FrameworkList";
import PostList from "./components/PostList";
import Calculator from "./components/Calculator";
import LevelA from "./components/LevelA";
import MailContextProvider from "./contexts/MailContext";
import Keycode from "./components/Keycode";
import Login from "./components/Login";

import GithubCorner from 'react-github-corner';



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
        <Header>
          <h1 style={{"color": "white"}}>React Hooks Examples</h1> 
          <GithubCorner href="https://github.com/sandix34/React-Hooks-Examples" bannerColor="#f5f2f0" octoColor="blue"/>
        </Header>
        <Content style={{"margin": "1rem"}}>
        <Collapse style={{"padding": "1rem"}} defaultActiveKey={["1"]} onChange={callback}>
          <h3>Gestion de l'état avec useState()</h3>
          <Panel header="Utiliser le hook useState() pour incrémenter" key="1">
            <Like />
          </Panel>
          <Panel forceRender="true" header="Utiliser plusieurs useState() dans un component -- Afficher la valeur d'un input" key="2">
            <FrameworkList />
          </Panel>
          <h3>Gestion des side effects avec useEffect()</h3>
          <Panel forceRender="true" header="Utiliser useEffect() pour effectuer une requête AJAX -- Itérer les blog posts -- Afficher un indicateur de loading -- 1 useEffect() par fonctionnalité " key="3">
            <PostList />
          </Panel>
          <h3>Gestion de l'état à l'aide de useReducer()</h3>
          <Panel forceRender="true" header="Création d'un component et de son reducer -- Dispatcher des actions" key="4">
            <Calculator />
          </Panel>
          <h3>Consommation de contexts à l'aide de useContext()</h3>
          <Panel forceRender="true" header="useContext() pour lire des messages depuis un component grand-parent -- Passer des données via 'context' -- Utiliser une fonction provenant du 'context'" key="5">
            <MailContextProvider>
              <LevelA />
            </MailContextProvider>
          </Panel>
          <h3>Interraction avec le DOM et useRef()</h3>
          <Panel forceRender="true" header="S'abonner et se désabonner à l'écoute d'évènements clavier" key="6">
            <Keycode />
          </Panel>
          <Panel forceRender="true" header="Gérer le focus à l'aide de useRef()" key="7">
            <Login />
          </Panel>
        </Collapse>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
