import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check out these Blogs
                <div style={{padding: '5px'}}></div>
                <i class="fab fa-blogger"></i>
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/todo.jpg'
                            text='Maintaining a To-Do List'
                            label='Productivity'
                            path='/blogs'
                        />
                        <CardItem 
                            src='images/calender.jpg'
                            text='Scheduling Time Slots'
                            label='Productivity'
                            path='/blogs'
                        />
                        <CardItem 
                            src='images/breaks.jpg'
                            text='Taking Breaks'
                            label='Recharge'
                            path='/blogs'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/running.jpg'
                            text='Exercising regularly'
                            label='Lifestyle'
                            path='/blogs'
                        />
                        <CardItem 
                            src='images/mtask.jpg'
                            text='Avoid Multitasking'
                            label='Productivity'
                            path='/blogs'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;