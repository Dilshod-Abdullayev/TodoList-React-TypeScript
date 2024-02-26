import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/store";
import { handleToggle } from "../../redux/Mode";
import { motion } from "framer-motion";
export default function Mode() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.mode)
  const handleClick = () => {
    dispatch(handleToggle())
    console.log(theme);
  }
  return (
    <motion.div
    whileTap={{ scale: 0.9 }}
      onClick={handleClick} className="cursor-pointer text-4xl">
      {theme.value ? <FaMoon /> : <FaSun />}
    </motion.div>
  )
}