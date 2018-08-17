'use strict';

var boxes = document.querySelectorAll('.box');

var data = [{
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];

// choice and add content by loops

for (var i = 0, boxes = data.length; i < boxes; i++) {


    var idElement = data[i].id;
    var titleElement = data[i].title;
    var contentElement = data[i].content;
    var categoriesElement = data[i].categories.join(' ');


    box.innerHTML += '<div id="' + idElement + '" class="box ' + categoriesElement + '"><header>' + titleElement + '</header>' + contentElement + '</div>';

}