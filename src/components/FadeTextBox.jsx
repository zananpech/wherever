import React, {Component} from 'react';
import '../styles/style.css'
function FadeTextBox(props) {
    return (
    <div>
        <div class="content">
            <div class="hide">
                <div class="hide-content">
                    <h5 class="hide-name text-center">{props.title}</h5>
                </div>
            </div>
        </div>
    </div>
    )
      
}

export default FadeTextBox;