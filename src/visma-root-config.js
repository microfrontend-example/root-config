import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@visma/list',
  app: () => System.import('@visma/list'),
  activeWhen: ['/list'],
});

registerApplication({
  name: '@visma/form',
  app: () => System.import('@visma/form'),
  activeWhen: ['/form'],
});

registerApplication({
  name: '@visma/navbar',
  app: () => System.import('@visma/navbar'),
  activeWhen: () => true,
});

start({ urlRerouteOnly: true });
