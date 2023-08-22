import '../styles/preload.css'
import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/animation.css'
import '../styles/components/modal.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/mobile-nav.css'
import '../styles/components/sobre.css'
import '../styles/components/local.css'
import '../styles/components/programacao.css'
import '../styles/components/submissao.css'
import '../styles/components/comissao.css'
import '../styles/components/contato.css'
import '../styles/components/footer.css'

import '../styles/utils.css'

import loading from './utils/loader';
// import modal from './utils/modal';
import animationController from './utils/animationController.js';
import mobileNav from './utils/mobile-nav.js';
import backToTop from './utils/toTop.js';
import acordeao from './utils/acordeao';

loading();
// modal();
mobileNav();
animationController();
backToTop();
acordeao();