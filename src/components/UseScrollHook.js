import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export function UseScrollHook() {

    //Todo eso servira para darle a la sección de servicios el efecto de FadeIn cuando nos acerquemos al elemento que controlsa su DIV
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.2 });

    if (view) {
        controls.start('show');
    } else {
        controls.start('hidden');
    }

    return [element, controls];
}