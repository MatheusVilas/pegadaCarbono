import Casa from "./components/Casa.vue";
import Dieta from "./components/Dieta.vue";
import TransporteIndividual from "./components/TransporteIndividual.vue";
import TransportePublico from "./components/TransportePublico.vue";
import ViagensAereas from "./components/ViagensAereas.vue";

const routes = [
  { path: "/casa", component: Casa },
  { path: "/dieta", component: Dieta },
  { path: "/transporte-individual", component: TransporteIndividual },
  { path: "/transporte-publico", component: TransportePublico },
  { path: "/viagens-areas", component: ViagensAereas }
];

export default routes;
