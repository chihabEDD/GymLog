import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('useWorkout Context must be used inside an WorkoutsContextProvider')
    }
    return context
}

