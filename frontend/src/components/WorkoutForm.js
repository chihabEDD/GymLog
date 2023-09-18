import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle]= useState('')
    const [load, setLoad]= useState('')
    const [reps, setReps]= useState('')
    const [error, setError]= useState(null)

    const handleSubmit = async (e) => {
       e.preventDefault()

       const workout  = {title, load, reps}

       const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: { 'Content-Type': 'application/json' }
        })

       const json = await response.json()

       //Error
       if(!response.ok){
        setError(json.error)
        console.log('erreur')
       }
       //NoError
       if(response.ok) {
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        console.log('new workout added', json)
        dispatch({type: 'CREATE_WORKOUT', payload: json})
      }
    }
  return (
    <form className='create' onSubmit={handleSubmit}>
     <h3 className='record-h3'>NEW RECORD</h3>
        <label>Exercise : </label>
        <input
        type='text'
        placeholder="Exercise name.."
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        />

        <label>Load : </label>
        <input
        type='number'
        placeholder="Load in kg.."
        onChange={(e)=> setLoad(e.target.value)}
        value={load}
        />

        <label>Reps : </label>
        <input
        type='number'
        placeholder="How many reps.."
        onChange={(e)=> setReps(e.target.value)}
        value={reps}
        />

        <button >Add new record</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}
