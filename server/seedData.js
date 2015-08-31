import mongoose from 'mongoose';
import FlickModel from './models/FlickModel';

// TODO: I'm not sure about this! Cleaning data!
mongoose.connection.db.dropDatabase();

var flicks = [
  { title: "Mauvais sang", watched: true },
  { title: "Los Hongos",   watched: false },
  { title: "Pure Vice",    watched: true }
];

flicks.forEach((flick) => { new FlickModel(flick).save(); });
