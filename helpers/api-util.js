//function to get all events from api
export const getAllEvents = async () => {
    const response = await fetch('https://next-events-ff3e8-default-rtdb.europe-west1.firebasedatabase.app/events.json');
    const data = await response.json();

    const sortedData = [];
    for (const key in data) {
        sortedData.push({ id: key, ...data[key] })
    }
    return sortedData;
}

export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured)
}

export const getEventById = async (id) => {
    const allEvents = await getAllEvents();
    return allEvents.find(event => event.id === id)
}