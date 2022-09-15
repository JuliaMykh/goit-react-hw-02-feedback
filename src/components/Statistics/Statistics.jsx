import React from "react";

export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
    
            <ul>
            <li>
<p>Good: <span>{good}</span> </p>
            </li>
            <li>
 <p>Neutral: <span>{neutral}</span></p>
            </li>
            <li>
                <p> Bad: <span>{bad}</span></p>
            </li>
            <li>
                 <p> Total: <span>{total}</span></p>
            </li>
            <li>
 <p> Positiv feedback: <span>{positiveFeedback}</span></p>
            </li>
            </ul>
            
           
            
           
           
   
    );
}