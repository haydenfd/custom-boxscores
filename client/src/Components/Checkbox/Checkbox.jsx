import React, {useContext, useState} from 'react'
import './Checkbox.css'
import { PreferencesContext } from '../../Context';

export const Checkbox = ({label, checked, value}) => 
{

  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const {preferences, setPreferences} = useContext(PreferencesContext)

  const handleChange = (e) => 
  {
    if (e.target.checked)
    {
      setPreferences((previous) => [...previous, value])
    }

    else {
      setPreferences((current) =>
      current.filter((pref) => pref !== value)
    )}

    setIsChecked((previous) => !previous)
  }
  return (
    <div className="checkbox-wrapper">
      <label>
        <input 
        type="checkbox" 
        checked={isChecked}
        onChange={handleChange}
        className={isChecked ? "checked" : ""}
        value={value}
        />
        <span>{label}</span>
      </label>
    </div>
  )
}
