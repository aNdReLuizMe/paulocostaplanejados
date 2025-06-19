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
        <section className="min-h-screen bg-white overflow-hidden" aria-labelledby="location-heading">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                className="h-full flex flex-col"
            >
                {/* Seção Mapa + Informações */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
                    <header className="sr-only">
                        <h2 id="location-heading">Nossa Localização e Contato</h2>
                    </header>
                    {/* Mapa */}
                    <motion.div
                        variants={leftVariants}
                        className="p-3 sm:p-4 order-2 lg:order-1 flex items-center justify-center"
                    >
                        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full max-h-[500px] lg:max-h-full">
                            <IframeMap
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.5886095732517!2d-51.700339!3d-20.8079248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098173cca9d87%3A0xe2e9759cf2555fa4!2sR.%20Santiago%20Manoel%20Fern%C3%A1ndez%2C%202332%20-%20Vila%20Zuque%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079620-378!5e0!3m2!1spt-BR!2sbr!4v1732745251656!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-lg shadow-lg"
                                aria-label="Mapa da localização da Paulo Costa Planejados"
                            />
                        </div>
                    </motion.div>

                    {/* Informações de Contato */}
                    <motion.div
                        variants={rightVariants}
                        className="flex items-center justify-center p-3 xs:p-4 sm:p-6 lg:p-8 order-1 lg:order-2 bg-gray-50"
                    >
                        <div className="space-y-3 xs:space-y-4 sm:space-y-6 max-w-lg w-full">
                            <header className="text-center lg:text-left">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                    Venha nos conhecer
                                </h3>
                            </header>

                            <div className="space-y-3 sm:space-y-4">
                                {/* Endereço */}
                                <address className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm not-italic">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">Endereço</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            Rua Santiago Manoel Fernández, 2332<br />
                                            Bairro Nova Três Lagoas 2<br />
                                            CEP: 79620-378<br />
                                            Três Lagoas/MS - Brasil
                                        </p>
                                    </div>
                                </address>

                                {/* Horário de Funcionamento */}
                                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">Horário de Atendimento</h4>
                                        <div className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            <time>Segunda a Sexta: 8h às 18h</time><br />
                                            <time>Sábado: 8h às 12h</time>
                                        </div>
                                    </div>
                                </div>

                                {/* Contato */}
                                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">Telefone</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            <a
                                                href="tel:+5567991146889"
                                                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                                aria-label="Ligar para Paulo Costa Planejados"
                                            >
                                                (67) 99114-6889
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">E-mail</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            <a
                                                href="mailto:contato@paulocostaplanejados.com.br"
                                                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
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

                {/* Footer Integrado */}
                <footer className="bg-gray border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-center">
                        {/* Copyright */}
                        <p className="text-gray-600 text-xs">
                            © {currentYear} Paulo Costa Móveis Planejados. Todos os direitos reservados.
                        </p>
                    </div>
                </footer>
            </motion.div>
        </section>
    );
};
