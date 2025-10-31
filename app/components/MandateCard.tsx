
      "use client";

      import { motion } from "framer-motion";

      type CardProps = {
        title: string;
        text: string;
        gradient?: boolean;
      };

      const MandateCard = ({ title, text, gradient = false }: CardProps) => {
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-xl bg-white border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 relative">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-1 w-12 bg-black rounded"
                />
                <h3 className="text-2xl font-bold text-black">{title}</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">{text}</p>
            </div>
          </motion.div>
        );
      };

      export default MandateCard;