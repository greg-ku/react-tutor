const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const JsonFB = require('node-json-db');
const JsonDbConfirm = require('node-json-db/dist/lib/JsonDBConfig');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');

const db = new JsonFB(new JsonDbConfirm.Config('todoListDB', true ,false, '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/todo', (req, res) => {
  try {
    const todos = db.getData('/todo');
    res.json(_.isEmpty(todos) ? [] : todos);
  } catch (err) {
    res.json([]);
  }
});

app.get('/todo/:id', (req, res) => {
  try {
    const todos = db.getData('/todo')
    const todo = _.find(todos, todo => todo._id === req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(500).send('not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/todo', (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(500).send('empty input');
  } else {
    let todos = [];
    try {
      todos = db.getData('/todo');
    } catch (err) {
      // do nothing
    }
    const _id = uuidv4();
    const newTodo = { _id: uuidv4(), ...req.body };
    db.push('/todo', [newTodo, ...todos]);
    res.json(newTodo);
  }
});

app.put('/todo/:id', (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(500).send('empty input');
  } else {
    try {
      const todos = db.getData(`/todo`);
      const id = req.params.id;
      const updatedTodos = todos.map(todo => todo._id === id ? { _id: todo._id, ...req.body } : todo);
      db.push('/todo', updatedTodos);
      res.json({ _id: id, ...req.body });
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

app.delete('/todo/:id', (req, res) => {
  try {
    const todos = db.getData(`/todo`);
    const updatedTodos = todos.filter(todo => todo._id !== req.params.id)
    db.push('/todo', updatedTodos);
    res.send('ok');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log('App listening on port 3001');
});
