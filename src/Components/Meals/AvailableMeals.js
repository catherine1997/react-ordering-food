import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'sushi',
        description: 'finise fish and veggies',
        price: 22.99,
    },

    {
        id: 'm2',
        name: 'zazi',
        description: 'tomatoes and egg sauce',
        price: 22.99,
    },

    {
        id: 'm3',
        name: 'kati',
        description: 'chicken and chips',
        price: 22.99,
    },

    {
        id: 'm4',
        name: 'sushi',
        description: 'finise fish and veggies',
        price: 22.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
         <MealItem 
         key = {meal.id} 
         name = {meal.name} 
         description = {meal.description} 
         price={meal.price}/>
         );
    return (
        <section className={classes.meal}>
        <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    );
};
export default AvailableMeals;