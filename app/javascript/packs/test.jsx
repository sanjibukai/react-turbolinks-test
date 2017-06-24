import React           from 'react'
import ReactDOM        from 'react-dom'
import TestComp        from 'testcomp'

document.addEventListener('turbolinks:load', function(event) {
    console.log("DOM loaded.. load");
    var element = document.getElementById("hello");
    console.log(element)
    if(element) {
        ReactDOM.render(<TestComp />, element);
    }
});