/*
1. When the user loads the page, they should be given the option to create a new workout or continue with their last workout.
2. The user should be able to:
  * Add exercises to the most recent workout.
  * Add new exercises to a new workout.
  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page. (Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.)
  * View the total duration of each workout from the past seven workouts on the `stats` page.
3.* As a user, I want to be able to view create and track daily workouts.
  * I want to be able to log multiple exercises in a workout on a given day.
  * I should also be able to track the name, type, weight, sets, reps, and duration of exercise.
  * If the exercise is a cardio exercise, I should be able to track my distance traveled.
4. Deploy to Heroku
*/

//When the user loads the page they are given the option to create a new workout or continue with their last workout
    //The user selects 'Continue Workout'
        //previous workout is retrieved/unlocked and the user is allowed to edit
    //[complete]if the user selects 'New Workout' 
        //[complete]exercise route is loaded 
        //new workout is created and appended to exercise route[? on the append]

//if the user clicks the Dashboard link/button at the top
    //they are taken to a stats page where they can view the combined weight of multiple exercises from the past seven workouts 
    //they are taken to a stats page where they can view the total duration of each workout from the past seven workouts

//[this step - completed] if the user selects 'New Workout' the 'exercise' route is loaded
    //User selects type of workout
        //resistance
            //user enters the name, type, weight, sets, reps, and duration of exercise
                //once the workout is submitted it's saved to the database
        //cardio
            //user enters the distance traveled
                //once the workout is submitted it's saved to the database