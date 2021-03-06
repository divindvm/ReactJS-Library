"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');
var Router = require('react-router');
var Link = Router.Link;


var AuthorPage = React.createClass({
    getInitialState : function(){
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function(){
        AuthorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState({authors: AuthorStore.getAllAuthors()});
    },

    render: function(){
        return(
            <div className="container-fluid">
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-primary btn-lg">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;