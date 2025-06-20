import { motion, useAnimation } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { type FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    style?: React.CSSProperties;
}

export const Location: FC = () => {
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

    const IframeMap: FC<IframeProps> = (props) => (
        <iframe
            {...props}
            title="PC Planejados Location"
        />
    );

    const currentYear = new Date().getFullYear()

    return (
        <section className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300 flex flex-col mt-8 lg:mt-0" aria-labelledby="location-heading">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                className="flex-1 flex flex-col"
            >
                {/* Seção Mapa + Informações */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
                    <header className="sr-only">
                        <h2 id="location-heading">Nossa Localização e Contato</h2>
                    </header>
                    {/* Mapa */}
                    <motion.div
                        variants={leftVariants}
                        className="p-4 sm:p-6 md:p-8 order-2 lg:order-1 flex items-center justify-center bg-white dark:bg-gray-900"
                    >
                        <div className="w-[90%] h-56 sm:h-72 md:h-80 lg:h-[80%] max-h-[400px] lg:max-h-[80%]">
                            <IframeMap
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.5886095732517!2d-51.700339!3d-20.8079248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098173cca9d87%3A0xe2e9759cf2555fa4!2sR.%20Santiago%20Manoel%20Fern%C3%A1ndez%2C%202332%20-%20Vila%20Zuque%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079620-378!5e0!3m2!1spt-BR!2sbr!4v1732745251656!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-lg shadow-lg dark:shadow-gray-700"
                                aria-label="Mapa da localização da Paulo Costa Planejados"
                            />
                        </div>
                    </motion.div>

                    {/* Informações de Contato */}
                    <motion.div
                        variants={rightVariants}
                        className="flex items-center justify-center p-3 xs:p-4 sm:p-6 lg:p-8 order-1 lg:order-2 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
                    >
                        <div className="space-y-3 xs:space-y-4 sm:space-y-6 max-w-lg w-full">
                            <header className="text-center lg:text-left">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                                    Venha nos conhecer
                                </h3>
                            </header>

                            <div className="space-y-3 sm:space-y-4">
                                {/* Endereço */}
                                <address className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-900 not-italic transition-all duration-300">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-xs sm:text-sm transition-colors duration-300">Endereço</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                                            Rua Santiago Manoel Fernández, 2332<br />
                                            Bairro Nova Três Lagoas 2<br />
                                            CEP: 79620-378<br />
                                            Três Lagoas/MS - Brasil
                                        </p>
                                    </div>
                                </address>

                                {/* Horário de Funcionamento */}
                                <div className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-900 transition-all duration-300">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-xs sm:text-sm transition-colors duration-300">Horário de Atendimento</h4>
                                        <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                                            <time>Segunda a Sexta: 8h às 18h</time><br />
                                            <time>Sábado: 8h às 12h</time>
                                        </div>
                                    </div>
                                </div>

                                {/* Contato */}
                                <div className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-900 transition-all duration-300">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-xs sm:text-sm transition-colors duration-300">Telefone</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm transition-colors duration-300">
                                            <a
                                                href="tel:+5567991146889"
                                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                                aria-label="Ligar para Paulo Costa Planejados"
                                            >
                                                (67) 99114-6889
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-900 transition-all duration-300">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-xs sm:text-sm transition-colors duration-300">E-mail</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm transition-colors duration-300">
                                            <a
                                                href="mailto:contato@paulocostaplanejados.com.br"
                                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                                aria-label="Enviar email para Paulo Costa Planejados"
                                            >
                                                contato@paulocostaplanejados.com.br
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Footer no rodapé da seção Location */}
            <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-0">
                        {/* Copyright */}
                        <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                            © {currentYear} Paulo Costa Móveis Planejados.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                            Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};
