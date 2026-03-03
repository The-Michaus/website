import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTrophy } from '@fortawesome/free-solid-svg-icons';

export function initIcons() {
  library.add(faInstagram, faPinterest, faLinkedinIn, faCheck, faTrophy);
  dom.watch();
}
