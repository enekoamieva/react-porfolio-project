import { useState } from 'react';
import { motion } from 'framer-motion';

function Toggle({ children, title }) {
    //State
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(previousFaqToggle => !previousFaqToggle);
    }

    return (
        <motion.div layout onClick={handleToggle} className='question'>
            <motion.h4 layout>{title}</motion.h4>
            {
                toggle
                    ? children
                    : ''
            }
            <div className="faq-line"></div>
        </motion.div>
    );
}

export default Toggle;