import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
//Fns date
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const WorkoutDetails = ({workout}) => {
  
  const { dispatch } = useWorkoutsContext()
  
  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      methode: 'DELETE'
    })

    const json = await response.json()
    
    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }  

  return (
    <div id='deleteIcon' className='workout-details'>
        <span className="material-symbols-outlined" onClick={handleClick} >DELETE</span>
        <h4>{workout.title}</h4>
        <p><strong>ID : </strong>{workout._id}.</p>    
        <p><strong>Reps : </strong>{workout.reps}.</p>    
        <p><strong>Load : </strong>{workout.load} kg.</p>
        <div className='dateFns'>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix: true })}</div>
    </div>
  )
}