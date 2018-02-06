import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

// root folder holds collections
// keeps variable on client and server , keeps em synced`

// export const todoList = [
//   {title: "Get groceries", done: false},
//   {title: "Eat groceries", done: false},
//   {title: "Writhe in pain", done: false},
// ]

Todo = new Mongo.Collection("todoList");
