import { BaggageClaim, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Image } from "./ui/image";
import { SlidingNumber } from "./ui/sliding-number";
import { TextAnimate } from "./ui/text-animate";

export const DashainOffer = () => {
  const [targetDate] = useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    let target = new Date(year, 8, 17, 0, 0, 0, 0);
    if (target < now) {
      target = new Date(year + 1, 8, 17, 0, 0, 0, 0);
    }
    return target;
  });

  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        setDaysLeft(days);
      } else {
        setDaysLeft(0);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative md:aspect-[16/4] rounded-lg overflow-hidden">
      <a
        href="https://tetoteto.co.jp/shop/sasto-sulav-express"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20 flex items-center justify-between px-8 py-6 bg-gradient-to-r from-red-900/20 to-orange-900/20"
      >
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Badge className="bg-red-600 text-white xs:px-4 px-2 xs:py-2 py-1 xs:text-xs text-xs font-semibold">
                COMING SOON
              </Badge>
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Calendar className="text-orange-400" size={20} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.h2
              className="text-white font-bold xs:text-3xl text-xl lg:text-4xl font-dosis"
              animate={{
                textShadow: [
                  "0 0 10px rgba(249, 115, 22, 0.5)",
                  "0 0 20px rgba(249, 115, 22, 0.8)",
                  "0 0 10px rgba(249, 115, 22, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Dashain Festival
            </motion.h2>
            <motion.p
              className="text-orange-200 xs:block hidden text-lg line-clamp-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Special offers & traditional items arriving soon!
            </motion.p>
            <TextAnimate
              delay={0.5}
              once
              duration={1}
              animation="slideLeft"
              by="character"
              className="text-orange-200 xs:hidden block text-sm line-clamp-1"
            >
              Get ready for authentic Nepali products & exclusive discounts
            </TextAnimate>
          </motion.div>

          <TextAnimate
            delay={0.5}
            once
            duration={1}
            animation="slideLeft"
            by="character"
            className="text-white/90 text-sm xs:block hidden"
          >
            Get ready for authentic Nepali products & exclusive discounts
          </TextAnimate>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-max"
          >
            <Button
              className={
                "bg-orange-600 xs:min-h-9 min-h-7 xs:py-2 py-1 hover:bg-orange-700 text-white rounded-full sm:text-base text-sm"
              }
            >
              Shop Now <BaggageClaim className="xs:size-5 size-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:block text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="text-orange-300 text-sm font-medium flex items-center gap-2 justify-end"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} />
            <p>
              Starting in{" "}
              <SlidingNumber
                className="inline"
                value={daysLeft}
                padStart={true}
              />{" "}
              days
            </p>
          </motion.div>

          <motion.div
            className="text-white text-2xl font-bold font-dosis"
            animate={{
              color: ["#ffffff", "#ff9800", "#ff0000", "#ffffff"],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            दशैं तिहार
          </motion.div>
          <motion.div
            className="text-gray-200 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Nepal's Greatest Festival
          </motion.div>
        </motion.div>
      </a>

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="size-full"
      >
        <Image
          src="/dashain.jpg"
          alt="Dashain Festival Banner"
          className="object-fill brightness-75"
        />
      </motion.div>
    </div>
  );
};
