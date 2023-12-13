<script>
  import { onMount, tick } from 'svelte';
  import { Deta } from 'deta';
  const deta = Deta("c08f3qnqxes_RUQwJXeiwU6wPGn8uspiknPeUpBcfKFZ");
  // const db = deta.Base('hero');

  let name = ""

  // getArticles()

  // async function getArticles() {
  //   const data = await db.get('123')
  //   name = data.text
  //   console.log(data);
  //   // return data
  // }

  // function addArticle() {
  //   let value = {
  //     // key: '2',
  //     text: 'Some new text of the article'
  //   }    
  //   db.put(value)
  // }


  // // Исходные значения полей формы
  // let text = '';
  // let key = '';

  // // Функция для сохранения данных в Deta Space
  // async function save(text, key) {
  //   try {
  //     // Создание объекта для сохранения
  //     const item = { key: key, text: text };

  //     // Сохранение объекта в Deta Space
  //     await db.put(item);
  //     console.log('Data saved!');
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  // }


  const db = deta.Base('events'); // Make sure this matches your actual base name

  let events = [];

  // onMount(async() => {  
    fetchEvents(); // Fetch events when the script loads
  // });

  async function fetchEvents() {
    try {
      const result = await db.fetch(); // Fetch all events from the base
      events = result.items;
      console.log(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }

  function addEvent(newEvent) {
    db.put(newEvent)
      .then(() => {
        console.log('Event added successfully');
        fetchEvents(); // Re-fetch events to update the local state
      })
      .catch(console.error);
  }

  // Example function to add a new event
  function onAddEventClick() {
    const newEvent = {
      title: "New Event",
      subtitle: "Event description",
      date: "January 5, 2024",
      time: "20:00",
      image: "spartacus.jpg",
    };
    addEvent(newEvent);
  }  
</script>

<h1>Admin panel</h1>
<h2>{name}</h2>

<!-- <button on:click={addArticle}>addArticle</button>

<form on:submit|preventDefault={ () => save(text, key) }>
  <input type="text" bind:value={text} placeholder="Text" />
  <input type="text" bind:value={key} placeholder="Key" />
  <button type="submit">Save</button>
</form> -->


<h1>Events</h1>
{#each events as event}
  <div>
    <h2>{event.title}</h2>
    <p>{event.subtitle}</p>
    <p>{event.date} - {event.time}</p>
  </div>
{/each}

<button on:click={onAddEventClick}>Add Event</button>

<style>
  :global(header) {
    display: none !important;
  }
</style>