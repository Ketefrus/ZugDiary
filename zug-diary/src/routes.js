import Background from './components/background';
import Capitulo1 from './components/capitulos/capitulo1'
import Amigos from './components/amigos';

export const routes = [
  {
    path: '/',
    element: <Background />
  },
  {
    path: '/kapitulo-1',
    element: <Capitulo1 />
  },
  {
    path: '/amigoz',
    element: <Amigos />
  }
]