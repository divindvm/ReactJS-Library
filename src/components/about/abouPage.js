"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo:function(transition, params, query,callback){
            if(!confirm('Are you sure you read a page thats this boring')){
                transition.about();
            }
            else{
                callback();
            }
        },
        willTransitionFrom:function(transition, component){
            if(!confirm('Are you sure to leave a page thats this exiting')){
                transition.about();
            }
        }
    },
    render : function(){
        return (
            <div className="jumbotron">
                <h1>About Us Page</h1>
                <p>Lorem Ipsum</p>
                <h6>Where can I get some?</h6>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
        );
    }
});

module.exports = About;

