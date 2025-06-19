"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Hook customizado para o contador
const useCounter = (end: number, duration: number = 2) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        if (inView) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, inView]);

    return { count, ref };
};

// Componente Counter
const Counter = ({ end, label, duration = 2 }: { end: number; label: string; duration?: number }) => {
    const { count, ref } = useCounter(end, duration);

    return (
        <div ref={ref} className="p-4 text-center">
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                {count}
                {end === 20 && '+'} {/* Adiciona o '+' apenas para o número 20 */}
                {end === 200 && '+'} {/* Adiciona o '+' apenas para o número 200 */}
                {end === 100 && '%'} {/* Adiciona o '%' apenas para o número 100 */}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">{label}</p>
        </div>
    );
};

export function AboutUs(): JSX.Element {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const leftVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const rightVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="h-full bg-gradient-to-b from-white to-gray-50 flex items-center overflow-hidden">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8"
            >
                <motion.div variants={fadeVariants} className="text-center mb-6 sm:mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Tradição em Móveis Planejados
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Há 20 anos transformando sonhos em realidade
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
                    <motion.div variants={leftVariants} className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Nossa História
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                            Desde 2004, nós da Paulo Costa Planejados temos nos dedicado à arte da marcenaria,
                            transformando madeira em obras-primas funcionais. Nossa jornada começou
                            em uma pequena oficina, onde o compromisso com a qualidade e a atenção
                            aos detalhes já eram nossa marca registrada.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                            Com duas décadas de experiência, desenvolvemos um profundo entendimento
                            das necessidades de nossos clientes, combinando técnicas tradicionais
                            com tecnologia de ponta para criar móveis que são verdadeiras obras de arte.
                        </p>
                    </motion.div>

                    <motion.div variants={rightVariants} className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Nosso Compromisso
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                            A excelência é nossa obsessão. Cada projeto é tratado com dedicação
                            exclusiva, utilizando materiais premium e técnicas avançadas de
                            fabricação. Nosso compromisso com preços justos não é apenas uma
                            promessa, é parte fundamental de nossa filosofia.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                            Acreditamos que móveis planejados de qualidade devem ser acessíveis,
                            por isso trabalhamos incansavelmente para otimizar nossos processos
                            e oferecer o melhor custo-benefício do mercado, sem jamais comprometer
                            a qualidade.
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={fadeVariants} className="text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
                        <Counter end={20} label="Anos de Experiência" />
                        <Counter end={200} label="Projetos Realizados" />
                        <Counter end={100} label="Clientes Satisfeitos" />
                    </div>
                    

                </motion.div>
            </motion.div>
        </div>
    );
}
