import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {

  listOfPosts: Post[] = [
    new Post(
      'Road Bike',
      'Road bikes are best identified by their drop or turned-down handlebars and skinny tires. The downward-curving handlebars are usually super lightweight that help put you in an aerodynamic position. The lightweight frame makes this type of bicycle particularly good for numerous pavement uses including racing, touring, fitness riding, long-distance rides and daily commuting. The large, thin tires allow you to glide the bike along various terrains with zero to little effort. If you are supremely concerned about speed, varied options for hand and riding positions, and an efficient transference of energy into propelling the bike forward, a road bike is the best option for you.',
      'http://lemonbin.com/wp-content/uploads/2020/06/road-bike-june172020-min.jpg',
      'reilan@test',
      new Date()
    ),
    new Post(
      'Mountain Bike',
      'This bike is designed with excellent braking systems and shock-absorbing features that can easily handle serious bumps, rocks, dirt trails, roots and ruts.  Mountain bikes are meant for dealing with steeper terrain which is why most of them consist of lower gears as compared to most other road bikes.',
      'http://lemonbin.com/wp-content/uploads/2020/06/mountain-bike-june172020-min.jpg',
      'Nikhola@test',
      new Date()
    ),
    new Post(
      'Touring Bike',
      'These are almost like the traditional road bikes, except with a few tweaks and changes that make them perfect for long-distance bike tours. Touring bikes come with multiple attachment points with the help of which you can attach fenders, pumps, lights, racks, water bottles and so much more. They also contain super sturdy frames that allow them to carry heavy loads on both the front and the rear racks.',
      'http://lemonbin.com/wp-content/uploads/2020/06/touring-bike-june172020-min.jpg',
      'reilan@test',
      new Date()
    ),
    new Post(
      'Folding Bike',
      'Folding bikes are believed to be excellent travel companions. As the name suggests, they fold super easily and smoothly, allowing them to be able to effortlessly fit on a boat, in the trunk of a car or on a subway. They can even be folded and carried in a carrying bag which makes them extremely convenient for commuters who have limited storage space at home or elsewhere.',
      'http://lemonbin.com/wp-content/uploads/2020/06/folding-bike-june172020-min.jpg',
      'reilan@test',
      new Date()
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
