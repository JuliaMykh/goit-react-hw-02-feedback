import React from "react";

export const FeedbackOptions = ({options, onClickBtn}) => {
    return (   
        <ul>
            {options.map(option => (
                <li key={option}>
                    <button
                        type="button"
                        name={option}
                        onClick={onClickBtn}
                        >
                        {option}
                    </button>
                </li>
            ))
            }
        </ul>
    );
}