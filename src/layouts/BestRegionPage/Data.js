const continents = [
    {
        "_id": 1,
        "name": "Europe"
    },
    {
        "_id": 2,
        "name": "Asia"
    },
    {
        "_id": 3,
        "name": "Oceania"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "South America"
    },
    {
        "_id": 6,
        "name": "Africa"
    },
]


const mood = [
    {
        "_id": 1,
        "name": "Modern"
    },
    {
        "_id": 2,
        "name": "Calm"
    },
    {
        "_id": 3,
        "name": "Traditional"
    },
    {
        "_id": 4,
        "name": "City"
    },
    {
        "_id": 5,
        "name": "Natural"
    }
]

const price = [
    {
        "_id": 0,
        "name": "모든가격",
        "array": []
    },
    {
        "_id": 1,
        "name": "100만원 이하",
        "array": [0, 1000000]
    },
    {
        "_id": 2,
        "name": "101 ~ 199만원",
        "array": [1010000, 1990000]
    },
    {
        "_id": 3,
        "name": "200 ~ 299만원",
        "array": [2000000, 2990000]
    },
    {
        "_id": 4,
        "name": "300 ~ 399만원",
        "array": [3000000, 3990000]
    },
    {
        "_id": 5,
        "name": "400 ~ 499만원",
        "array": [4000000, 4990000]
    },
    {
        "_id": 6,
        "name": "500만원 ~ ",
        "array": [5000000, 10000000]
    },
]

export  {
    continents,
    mood,
    price
}
