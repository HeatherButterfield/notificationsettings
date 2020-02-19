import App from './App.vue'
import Retirement from './components/Retirement.vue'
import Cash from './components/Cash.vue'
import PerfectPlan from './components/PerfectPlan.vue'
import Saved from './components/Saved.vue'
import Yes from './components/Yes.vue'
import No from './components/No.vue'
import OptOut from './components/OptOut.vue'
import Feedback from './components/Feedback.vue'

export const routes = [
  { path: '/', component: App },
  { path: '/retirement', component: Retirement },
  { path: '/perfect', component: PerfectPlan },
  { path: '/cash', component: Cash },
  { path: '/saved', component: Saved },
  { path: '/yes', component: Yes },
  { path: '/no', component: No },
  { path: '/optout', component: OptOut },
  { path: '/feedback', component: Feedback },
];
