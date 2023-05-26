import React, {useContext, useState} from "react";
import './PreferencesForm.css'
import { Checkbox } from "../../Components/Checkbox/Checkbox";
import { PreferencesContext } from "../../Context";

const table_cols = 
[
  'MIN', 
  'PTS', 
  'AST', 
  'REB',
  'OREB',
  'DREB', 
  'STL',
  'BLK', 
  'TO',
  '+/-',
  'FG',
  'FT',
  '3PT'
]

export const PreferencesForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(preferences)
  }

  const {preferences, setPreferences} = useContext(PreferencesContext);

  return (
    <div className="preferences-container">
      <h1>Preferences</h1>
        <div className="options-container">
        {table_cols.map((col) => {
          return (
            <Checkbox label={col} checked={false} value={col}/>
          )
        })}
        </div>
        <button 
        className="submit-preferences-button"
        onClick={(e) => {handleSubmit(e)}}
        >Save
        </button>
    </div>
  )
}