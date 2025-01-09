import { motion } from "framer-motion"

const TOTAL_STEPS = 6;

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

function reverseIndex(index: number) {
    return TOTAL_STEPS - index - 1;
}

function Stairs() {
  return (
    <>
        {[...Array(TOTAL_STEPS)].map((_, index) => (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full w-full bg-white relative"
                transition={{
                    duration: 0.2,
                    delay: reverseIndex(index) * 0.1,
                    ease: "easeInOut",
                }}
            />
        ))}
    </>
  )
}

export default Stairs
