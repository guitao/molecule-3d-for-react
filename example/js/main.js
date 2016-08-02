import Backbone from 'backbone';
import { MolWidget3DModel, MolWidget3DView } from '../../src/main.js';

Backbone.sync = () => {};

const model = new MolWidget3DModel();
const view = new MolWidget3DView({
  model,
  el: document.querySelector('.app'),
});

view.render();
