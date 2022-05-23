# Calendar Project

<p align="center">
<a href='https://calendar-roan.vercel.app/' target="_blank">
Live Demo
</a>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/86134825/169916810-0908a098-e22e-4e5c-889d-ee2423cf57d6.png" width="500px">
</p>

> This project was made with the intention of improving skills in the follow aspects :
>
> - JS Date Object
> - Hash map
> - NextJs

## About:

The Calendar Project is a usable calendar were you can manage events.

## Features:

- Manage your events by adding , removing and editing them.

- The Calendar also displays a small icon on the corresponding day of an given event.

- A modal is used to possibilitate the app usability and also give clear info about the events.

- The events data is stored in the browser so you don't lose it easily.

- Today date is always marked on the calendar.

---

## Challenges :

This project had a few challenges worth mentioning:

- `#1` Make the displayed dates match the week day on ui
- `#2` Generate right amount of days for each month
- `#3` Create and manage events data

## Solutions :

### `#1`:

To solve this issue i had to create a condition that checked for the first week day of a given month and returned the difference between it and monday , the result would be the amount of days needed to add at the beginning of the displayed month. But that created another problems that is to know the correct number for the past month and the solution is basically the next one.

### `#2` :

The solution revolved around the proper usage of the JS Date Object because it has a lot of gotchas like the months go between 0-11 and so on.

### `#3` :

For this , i decided that a hash map was ideal , where the keys are the `date.valueOf()` for it to properly work it was needed to create the date object using the same hour always(00:00:00 was chosen). As the key already contained the value for the day , the value is a list of events(objects containing `event` and `color` keys)

---

## Future Improvements :

- Authenticate user and retrieve data from db

- Api to store data

- Allow events to also be set by hour

---

## Run Project :

Requirements:

- node
- yarn

```bash
# install dependencies
yarn install

# initialize dev build
yarn dev
```
