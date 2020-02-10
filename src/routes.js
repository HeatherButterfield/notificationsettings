import Home from './components/Home.vue'
import Retirement from './components/Retirement.vue'
import Cash from './components/Cash.vue'
import PerfectPlan from './components/PerfectPlan.vue'
import EmailFormat from './components/EmailFormat.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/email', component: EmailFormat },
  { path: '/retirement', component: Retirement },
  { path: '/perfect', component: PerfectPlan },
  { path: '/cash', component: Cash },
];
