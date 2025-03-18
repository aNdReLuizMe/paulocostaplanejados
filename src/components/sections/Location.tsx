import { motion, useAnimation } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
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
        <div className="overflow-hidden">
            <section className="h-[calc(100vh-5rem)] bg-gradient-to-b from-white to-gray-50 py-16 overflow-hidden">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    className="h-full grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* Mapa */}
                    <motion.div
                        variants={leftVariants}
                        className="w-full h-full min-h-[400px]"
                    >
                        <IframeMap
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.5886095732517!2d-51.700339!3d-20.8079248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098173cca9d87%3A0xe2e9759cf2555fa4!2sR.%20Santiago%20Manoel%20Fern%C3%A1ndez%2C%202332%20-%20Vila%20Zuque%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079620-378!5e0!3m2!1spt-BR!2sbr!4v1732745251656!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </motion.div>

                    {/* Informações de Contato */}
                    <motion.div
                        variants={rightVariants}
                        className="flex items-center justify-center p-8 lg:p-16 bg-gray-50"
                    >
                        <div className="space-y-8 max-w-lg">
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    Onde Estamos
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Venha conhecer nossa loja e realizar seu projeto
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Endereço */}
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                                        <p className="text-gray-600">
                                            Rua Santiago Manoel Fernández, 2332<br />
                                            Bairro Nova Três Lagoas 2<br />
                                            CEP: 79620-378<br />
                                            Três Lagoas/MS - Brasil
                                        </p>
                                    </div>
                                </div>

                                {/* Horário de Funcionamento */}
                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                                        <p className="text-gray-600">
                                            Segunda a Sexta: 8h às 18h<br />
                                            Sábado: 8h às 12h
                                        </p>
                                    </div>
                                </div>

                                {/* Contato */}
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Contato</h3>
                                        <p className="text-gray-600">
                                            (67) 99114-6889<br />
                                            contato@paulocostaplanejados.com.br
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Botão CTA */}
                            <div className="pt-6">
                                <a
                                    href="https://wa.me/5567992828187"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 hover:shadow-lg"
                                >
                                    Agende uma Visita
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            <footer className="bg-gray-900 text-gray-200 border-gray-800 text-center">
                <p className="p-7">© {currentYear} Paulo Costa Móveis Planejados. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};
